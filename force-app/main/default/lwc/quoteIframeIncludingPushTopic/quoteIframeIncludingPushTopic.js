import { LightningElement,wire, api,track } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import { subscribe,unsubscribe, onError } from 'lightning/empApi';
import { getRecord } from 'lightning/uiRecordApi';
import { RefreshEvent } from 'lightning/refresh';


export default class QuoteIframeIncludingPushTopic extends LightningElement {
    @api recordId;
    @api tactonCPQUrlEmbedded;
    @api iframeHeight;
    @api scrolling;
    @track quote;
    
    @track quoteChangeEvent = '/data/QuoteChangeEvent';
    @track strResponse = '';
    loading = false;


    connectedCallback() {
        this.loading = true;
        this.registerErrorListener();
        this.registerSubscribe();
    }

    disconnectedCallback() {
        unsubscribe(this.subscription, () => console.log('Unsubscribed to change events.'));
    }
    
    // Called by connectedCallback()
    registerErrorListener() {
        onError(error => {
            console.error('Salesforce error', JSON.stringify(error));
        });
    }

    registerSubscribe() {
        const changeEventCallback = changeEvent => {
            const eventData = JSON.stringify( changeEvent );
            console.log( 'Update received : ', eventData );
            if(eventData.indexOf(this.recordId)){
                this.dispatchEvent(new RefreshEvent());
             }
        };

        // Sets up subscription and callback for change events
        subscribe(this.quoteChangeEvent, -1, changeEventCallback).then(subscription => {
            this.subscription = subscription;
        });
    }

    renderedCallback() {
        const spinnerContainer = this.template.querySelector('.slds-spinner_container');
        const containerElem = this.template.querySelector('.iframe-container');

        const iframe = document.createElement('iframe');
        iframe.src = this.fullUrl(); // iFrame src; add this URL to CSP
        iframe.id = 'tactonCPQ';
        iframe.width = '100%';
        
        iframe.height = "800px";
        if(this.iframeHeight){
            iframe.height = this.iframeHeight;
        }
        iframe.scrolling =this.scrolling;
        containerElem.appendChild(iframe);

        // onload() before setting 'src'
        iframe.onload = function(e){
            spinnerContainer.classList.add("slds-hide"); // hide spinner
        };
       
    }
    afterLoad(e){
        spinnerContainer.classList.add("slds-hide");
    }
    registerErrorListener() {
        // Invoke onError empApi method
        onError(error => {
            console.log( 'Received error from server: ', JSON.stringify( error ) );
            // Error contains the server-side error
        });
    }

    fullUrl() {
        var cpqUrl = this.tactonCPQUrlEmbedded;
        console.log("url",cpqUrl);
        if(cpqUrl==undefined||cpqUrl==""){
            cpqUrl = "https://se-demo.admin.cpqdemo.tacton.com/!uyOHyC3L-KFGD4Ml~tickets~T-00000098/$embed/jump/trampoline/0d4a65da-ebce-46da-9a96-34bd32714698?crmSetting=Salesforce&object=<OBJECT ID>";
        }

        var recordId = this.recordId;
        return cpqUrl.replace("<OBJECT ID>",recordId);
    }   




    get frameName() {
        return 'cpqembedded' + Date.now();
    }    

    
}