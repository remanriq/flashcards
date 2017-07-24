 function basicCard(front, back){
	this.front = front;
	this.back = back;
};

var harryPotter = new basicCard("How Many Harry Potter Books are there?", "7");
console.log(harryPotter.front);
console.log(harryPotter.back);
var kendrickLamar = new basicCard("Where is Kendrick Lamar from?", "Compton");
console.log(kendrickLamar.front);
console.log(kendrickLamar.back);
var warriorsBall = new basicCard("Who won the NBA championship?", "The Warriors");
console.log(warriorsBall.front);
console.log(warriorsBall.back);


module.exports = basicCard;





