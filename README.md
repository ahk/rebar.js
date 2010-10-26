<b>Rebar.js is a factory library for javascript test fixtures. It will bring inner strength to your javascript test data.</b>

please use like:

<pre><code>
var rebar = new Rebar()

rebar.define('bunny', 'uniqueId',{
	uniqueId  : function () {
		return Math.floor(Math.random() * 9999);
	}
	isHoppy : true,
	carrots : true
})

var bunnies = rebar.factory('bunny')

var nommler = bunnies.create('nomnom', {
	name    : 'serious muncher',
	legs    : 4,
	lbs     : 20,
	carrots : true,
	parent  : bunnies.link('old')
})

var oldBunny = bunnies.create('old', {
	name    : 'long tooth',
	legs    : 3,
	lbs     : 10,
	carrots : false
})
</code></pre>

This will leave you with two bunnies, old and nomnom.
old is nomnom's parent, linked by old's randomly generated
uniqueId.
