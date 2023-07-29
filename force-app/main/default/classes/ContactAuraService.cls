public with sharing class ContactAuraService {
    public ContactAuraService() {

    }
    @AuraEnabled
    public static List<SObject> getAccountList(String name){
        try {
            String key='%'+name+'%';
            String query='Select Id, Name, Email, Phone from Account Where Name LIKE :key';
            return Database.query(query);  
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}