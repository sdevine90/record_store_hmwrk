var Store = require('../store');
var Record = require('../record');
var assert = require('assert');

describe("Store", function(){
  var store; 
  var record1;
  var record2;

  beforeEach(function(){
    store = new Store();
    record1 = new Record ("Slipknot", "Wait and Bleed", 10);
    record2 = new Record ("The Eagles", "Lying Eyes", 8);
   }); 

  it("should have no records", function (){
    assert.deepEqual([], store.records);
  });

  it("store balance should be 0", function(){
    assert.equal(0, store.balance);
  });
  it("store should have record....just why why", function(){
    store.addRecord(record1);
    assert.equal("Slipknot", "Wait and Bleed", 10, store.inventory);
  });

});