// Rebar is a factory library for javascript test fixtures

// Top level Rebar environment.
//
Rebar = function() {
  this.factories = {};
};

// set up factory, register an identifier for linking, default schema
Rebar.prototype.define = function(factoryName, identifier, schema) {
  // don't let people clobber an existing factory
  if (!this.factories[factoryName]) {
    this.factories[factoryName] = new RebarFactory(this, factoryName, schema, identifier);
  } else {
    throw('You\'ve already defined a ' + factoryName + ' factory.')
  };
};

// get a defined factory by name
Rebar.prototype.factory = function(factoryName) {
  return this.factories[factoryName];
};

// Factories keep track of their relationship identifier, and previously
// created objects of the same type.
//
RebarFactory = function(rebarInstance, factoryName, schema, identifier) {
  this.rebar = rebarInstance;
  this.factoryName = factoryName;
  this.schema = schema;
  this.collection = {};
  this.identifier = identifier;
};

RebarFactory.prototype.create = function(objName, opts) {
  var obj = {};
  // factory defaults
  for(var field in this.schema) {
    if (!this.schema.hasOwnProperty(field)) continue;
    typeof(this.schema[field]) === "function" ?
      obj[field] = this.schema[field]() : obj[field] = this.schema[field];
  }
  // fixture specific options
  for(var field in opts) {
    if (!opts.hasOwnProperty(field)) continue;
    typeof(opts[field]) === "function" ?
      obj[field] = opts[field]() : obj[field] = opts[field];
  }
  this.collection[objName] = obj;
  return obj;
};

RebarFactory.prototype.get = function (objName) {
  return this.collection[objName];
}

// get the identifier for association links
RebarFactory.prototype.link = function(objName) {
  return this.collection[objName][this.identifier];
};
