

  function clozeCard(cloze,text){
	this.cloze = cloze;
	this.text = text;
	this.partialText = text.replace(cloze, "....");
	this.fullText = this.text + this.cloze;
	};


var harryPotter = new clozeCard("Harry Potter", "The boy who lived is...");

console.log(harryPotter.partialText);
console.log(harryPotter.fullText);


var kendrickLamar = new clozeCard("Compton", "kendrick Lamar is from...");
console.log(kendrickLamar.partialText);
console.log(kendrickLamar.fullText);

var warriorsBall = new clozeCard("The Warriors won", "The NBA championship");
console.log(warriorsBall.partialText);
console.log(warriorsBall.fullText);

module.exports = clozeCard.js


