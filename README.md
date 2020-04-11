# Lightning-web-component-send-email
Lightning web component send email using Apex class controller

---
## Setup
Either use this whole project in salesforce CLI using visual studio code or Copy [EmailHandler.cls](https://github.com/MrRajatSharma/Lightning-web-component-send-email/blob/master/force-app/main/default/classes/EmailHandler.cls) to copy email sending code. This can be used in visual force page or LWC app

## Steps to enable LWC component in salesforce
1. Login to salesforce using developer account
2. Click on setup on top right depicted in Cog wheel logo
3. Click on *Setup*
4. Click on Menu icon below salesforce icon
5. Click on *Sales* app
6. Open Leads and select a lead or create one.
7. Click on setup > Edit page
![Edit page](https://raw.githubusercontent.com/MrRajatSharma/Lightning-web-component-send-email/master/Screenshot_1.png "Edit page")

8. Drag and drop *sendEmail* component from aside pannel to your layout and click save. Activate if not activated.

![sendEmail](https://raw.githubusercontent.com/MrRajatSharma/Lightning-web-component-send-email/master/Screenshot_2.png "sendemail")

9. Check rendered page in Leads page. Fill email and click on send.

![sendEmail](https://raw.githubusercontent.com/MrRajatSharma/Lightning-web-component-send-email/master/Screenshot_3.png "sendemail")

10. Check you mail box.
![sendEmail](https://raw.githubusercontent.com/MrRajatSharma/Lightning-web-component-send-email/master/Screenshot_4.png "sendemail")


