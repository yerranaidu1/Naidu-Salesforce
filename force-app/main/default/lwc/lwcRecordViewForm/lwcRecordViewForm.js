import { LightningElement, api } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
export default class LwcRecordViewForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields=[ACCOUNT_NAME];
}