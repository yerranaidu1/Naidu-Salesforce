import { LightningElement, wire, api} from 'lwc';
import contactPagination from '@salesforce/apex/ReadContactPagination.contactPagination';
export default class GaneshExample extends LightningElement {
@api name='Naidu Yerra New Changes';
 totalContacts
 @wire(contactPagination)
      getAllContacts({data,error}){
        if(data){
          this.totalContacts=data
          console.log(this.totalContacts)
      }
      if(error){
        console.error(error)
      }
    }
}