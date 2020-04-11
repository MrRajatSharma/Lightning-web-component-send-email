import { LightningElement, api, wire, track } from 'lwc';
import sendEmail from '@salesforce/apex/EmailHandler.sendEmail';

export default class SendEmail extends LightningElement {
    @track email = '';
 
    handleChange(event) {
        if (event.target.name === 'emailAddress') {
            this.email = event.target.value;
        }
    }
    
    sendEmailHandler(event) {
        // send mail
        console.log("Sending email to", this.email);
        sendEmail({ toAddress: this.email, subject: "Subject", body: "Awesome right!"});
    }
}