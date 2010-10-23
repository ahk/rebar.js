// Rebar is a factory library for javascript test fixtures
// please instantiate like:
//
// var rb = new Rebar

function() {
  Rebar = function() {
    this.definitions = [];
  };

  Rebar.prototype.def = function(factoryName, schema) {
    this.definitions[factoryName] = schema;
  };

  Rebar.prototype.create = function(factoryName, objectName, opts) {
    var factory = this.definitions[factoryName]
    var widget = {};
    for(var field in factory) {
      if (!factory.hasOwnProperty(field)) continue;
      typeof(factory[field]) === "function" ?
        widget[field] = factory[field]() : widget[field] = factory[field];
    }
    return widget;
  };

  // WRITE THE id(), and support finding by objectName
}()


