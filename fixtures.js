window.onload = function(){
  var rb = loadDefs()
  var larry = rb.create('larry', 'l1', {
    feet : 'two left ones'
  })

  rb.create('larry','l2',{
    age : 25,
    name : 'l2'
  })

  rb.create('larry','l3',{
    age : 20,
    name : 'l3',
    // SUPPORT THIS USE CASE
    parent : rb['l2'].id()
  })

  console.log(larry.feet)
};
