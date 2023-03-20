public with sharing class ReadContactPagination {
    @AuraEnabled(cacheable=true)
    public static List<Contact> contactPagination() {
     return [SELECT Id, Name FROM  Contact WITH SECURITY_ENFORCED];
    }
}