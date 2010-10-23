function loadDefs() {
    var rb = new Rebar()
    rb.def('larry', {
      name : 'larry b',
      age  : function() {
        return Math.floor(Math.random() * 100);
      }
    })
    return rb;
}
