window.loadFixtures = function(){

  var rebar = loadDefs()
  var larries = rebar.factory('larry')

  larries.create('l1', {
    feet : 'two left ones'
  })

  larries.create('l2',{
    age : 25,
    name : 'l2'
  })

  larries.create('l3',{
    age : 20,
    name : 'l3',
    friend : larries.link('l1')
  })

  return larries;

};
