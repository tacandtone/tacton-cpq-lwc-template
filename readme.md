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

7) Copy the code in this repository to your new project

8) Log in to salesforce and enter setup

9) Search for "Change data capture" and add the Quote object to the selected entities 
