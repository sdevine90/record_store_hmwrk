var Record = require('../record');
var assert = require('assert');


describe('Record', function() {
  var record1 = new Record ("Slipknot", "Wait and Bleed", 10);
  var record2 = new Record ("The Eagles", "Lying Eyes", 8);

  it("artist", function(){
    assert.equal("Slipknot", record1.artist);
  });

  it("title", function(){
    assert.equal("Wait and Bleed", record1.title);
  });

  it("price", function(){
    assert.equal(10, record1.price);
  });

  it("artist from record 2", function(){
    assert.equal("The Eagles", record2.artist);
  });

  it("title from record 2", function(){
    assert.equal("Lying Eyes", record2.title);
  });

  it("price from record 2", function(){
    assert.equal(8, record2.price);
  });
  });

