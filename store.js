var Store = function(name, city, records, balance){
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = 0;
}

Store.prototype = {
  addRecord: function (record){
    this.records.push(record);
  },
  inventory: function(){
    for (i = 0; i < this.records.length; i++){
      return this.records;
    }
  }
  // canSellRecord: function(record){
  //   return this.records.filter(function(records){
  //     if (this.records.record === record){
  //       return records.price + store.balance;
  //     } else {
  //       return null;
  //     }
  //   });
  // }
}



module.exports = Store;
// Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
// take the record out of the array loop through and find the one u want to remove then add total onto balance --

// JS Record Store


// Create a method that lists the inventory. --


// Create a method that reports on the financial situation of the store. Cash and value of inventory.


// Create a RecordCollector (or customer) constructor who can buy and sell records.
// If you choose to, you can use lodash for enumerable functionality.
// Use TDD all the way through!



// npm init --yes avoids u have to hit enter when installing it all onto the terminal.