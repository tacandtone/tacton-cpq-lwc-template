# To set up and deploy this LWC
Here is a quick how-to for getting started with updating the code for your org.
 
1) Install VsCode
https://code.visualstudio.com/Download
Once installed close it.
 
2) Install Salesforce DX CLI
https://developer.salesforce.com/tools/sfdxcli
 
3) Install Salesforce Extension Pack in VsCode
Open VsCode and press "Ctrl + Shift + X" and search for "Salesforce Extension Pack" and click the "Install button"
 
4) Create project
 
In VsCode press "Ctrl + Shift + P" and select "SFDX: Create project with Manifest"
Choose empty
Give it a name
Select where to store the code
 
5) Connect project with your Salesforce Org
Press "Ctrl + Shift + P" and select "SFDX: Authorize an Org"
Select org type (probably Production, or if you have defined it in sfdx-project.json then "Project Default")
Give it an alias
 
This opens a web page where you login as your org user
 
6) Download code
Select manifest -> package.xml , right click and select "Retrieve this Source from Org"
Once done you should have all components etc in your project.
like 1
Download Visual Studio Code - Mac, Linux, Windows
Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows. Download Visual Studio Code to experience a redefined code editor, optimized for building and debug...
star 1
Download Visual Studio Code - Mac, Linux, Windows
Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows. Download Visual Studio Code to experience a redefined code editor, optimized for building and debug

7) Copy the code
Copy the code from the Tacton CPQ Embedded Package folder into your new project

8) Deploy
Select manifest -> package.xml , right click and select "SDX: Deploy Source in Manifest to Org"


## ✅ Post-Installation Steps

### Step 1: Enable Change Data Capture for Quote

1. Navigate to **Setup** in Salesforce.
2. In the **Quick Find** box, type **"Change Data Capture"**.
3. Click **Change Data Capture** under the **Integrations** section.
4. In the list of available entities, find and **select**:
   - `Quote`
5. Click **Save**.

> ⚠️ **Important:** This is required to publish `QuoteChangeEvent` notifications. Without this step, real-time quote updates will not be delivered to subscribed clients.

---

## ℹ️ Why This Step is Required

Due to Salesforce platform limitations, **Change Data Capture for standard objects like Quote cannot be included in managed packages**. This configuration must be set by an admin in the target org.

---

## 📘 Documentation & Support

For more details on Change Data Capture in Salesforce, visit:
[Salesforce CDC Documentation](https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_intro.htm)
