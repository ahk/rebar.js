<b>Rebar.js is a factory library for javascript test fixtures. It will bring inner strength to your javascript test data.</b>

please use like:

<pre><code>
// this is a rebar environment, contains factories
var rebar = new Rebar()

// define a factory: (<name> , <identifier field>)
rebar.define('bunny', 'uniqueId',{
	uniqueId  : function () {
		return Math.floor(Math.random() * 9999);
	},
	isHoppy : true,
	carrots : true
})

// get a defined factory by name
var bunnies = rebar.factory('bunny')

// create a bunny
var oldBunny = bunnies.create('old', {
	name    : 'long tooth',
	legs    : 3,
	lbs     : 10,
	carrots : false
})

// create another bunny, linked to first bunny
// by the identifier defined for the factory
var nommler = bunnies.create('nomnom', {
	name    : 'serious muncher',
	legs    : 4,
	lbs     : 20,
	carrots : true,
	parent  : bunnies.link('old')
})
</code></pre>

This will leave you with two bunnies, old and nomnom.
old is nomnom's parent, linked by old's randomly generated
uniqueId.
