# To set up and deploy this LWC
Here is a quick how-to for getting started with updating the code for your org.
 
# Salesforce VSCode Project Setup Guide

Follow these steps to set up a Salesforce project using Visual Studio Code and the Salesforce CLI.

---

## 1. Install Visual Studio Code
Download and install VSCode from the official website:  
[https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)

> Once installed, you can close it.

---

## 2. Install Salesforce DX CLI
Download and install the Salesforce CLI:  
[https://developer.salesforce.com/tools/sfdxcli](https://developer.salesforce.com/tools/sfdxcli)

---

## 3. Install Salesforce Extension Pack in VSCode
1. Open VSCode.
2. Press `Ctrl + Shift + X` to open the Extensions view.
3. Search for **Salesforce Extension Pack**.
4. Click **Install**.

---

## 4. Create a New Project
1. Press `Ctrl + Shift + P` in VSCode.
2. Select `SFDX: Create Project with Manifest`.
3. Choose **Empty**.
4. Provide a project name.
5. Select the directory to store the project.

---

## 5. Connect Your Project with a Salesforce Org
1. Press `Ctrl + Shift + P`.
2. Select `SFDX: Authorize an Org`.
3. Choose the org type (e.g., **Production** or use the **Project Default** defined in `sfdx-project.json`).
4. Provide an alias for the org.

> This will open a browser window where you can log in to your Salesforce org.

---

## 6. Retrieve Code from Salesforce Org
1. In the **manifest** folder, right-click `package.xml`.
2. Select **Retrieve This Source from Org**.

> This will pull all components from the org into your local project.

---

## 7. Copy Tacton CPQ Code
Copy the code from the **Tacton CPQ Embedded Package** folder into your new project directory.

---

## 8. Deploy Code to Org
1. In the **manifest** folder, right-click `package.xml`.
2. Select **SFDX: Deploy Source in Manifest to Org**.

---

## Notes
- Visual Studio Code is available for Windows, macOS, and Linux.
- The setup process is intended for developers working with the Salesforce platform, including Tacton CPQ integration.



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
