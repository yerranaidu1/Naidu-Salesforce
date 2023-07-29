import { LightningElement, api, wire } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import USER_NAME from '@salesforce/schema/User.Name';
import USER_EMAIL from '@salesforce/schema/User.Email';
import {getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class DisplayUserName extends LightningElement {

    @api showEmail;
    @api message;

    @wire(getRecord, { recordId: USER_ID, fields: [USER_NAME,USER_EMAIL]})
    wiredUser;

    get userName(){
        return getFieldValue(this.wiredUser.data, USER_NAME);
    }
}