window.loadDefs = function() {
    var rb = new Rebar()
    rb.define('larry', 'id', {
      id   : function() {
        return Math.floor(Math.random() * 9999);
      },
      name : 'larry b',
      age  : function() {
        return Math.floor(Math.random() * 100);
      }
    })
    return rb;
};
