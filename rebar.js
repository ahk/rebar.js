
var Rebar = function() {
  this.definitions = [];
};

Rebar.prototype.def = function(factoryName, schema) {
  this.definitions[factoryName] = schema;
};

Rebar.prototype.build = function(factoryName) {
  var factory = this.definitions[factoryName]
  var widget = {};
  for(var field in factory) {
    if (!factory.hasOwnProperty(field)) continue;
    typeof(factory[field]) === "function" ?
      widget[field] = factory[field]() : widget[field] = factory[field];
  }
  return widget;
};

window.onload = function(){
  var rb = new Rebar()
  rb.def('larry', {
    name : 'larry b',
    age  : function() {
      return Math.floor(Math.random() * 100);
    }
  })

  console.log(rb.build('larry'))
};
