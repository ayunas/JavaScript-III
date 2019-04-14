// let first = 'amir';
// let last = 'yunas';

// console.log(window.first, this.last, this);

// function show() {
//     console.log(this.first,this.last);
// }

// show();
// window.show();


// 1. implicit binding of THIS.  the object that the function is a part of is set to THIS.  

const nouns = {
    noun1 : 'boat',
    noun2 : 'tire',
    noun3 : 'sheep',
    showNoun : function() {
        console.log(this.noun1);
    }
}

nouns.showNoun();

//here, this is assigned to it's containing object, because when you call showNoun, you have to call the object that contains the method.  

//2. explicit binding.  using the Function methods .call() .bind() ... or .apply()

const dinner = {
    drink: 'sprite',
    meal : 'spagetti',
    dessert: 'ice-cream',
    eat : function() {
        console.log(`I am eating ${this.meal}`);
    }
}

function sleep() {
    console.log(`after ${this.meal}, I'm going to sleep!`);
}

sleep();
sleep.call(dinner);
sleep();
// in this example, sleep() will be invoked,  looking for this, which will point to the window object. since there is no meal property on the window object, it returns as undefined.  but when you explicitly set the context of the sleep() function using .call(context), then this is set to that object context.

//3. new binding.  when the new keyword is used, it creates and returns an object called this.  this = {} inside the function being invoked.

function AnimalMaker(stuff) {
    //this = { } created by new keyword
    this.name = stuff.name;
    this.weight = stuff.weight;
    this.length = stuff.length;

}

const ant = new AnimalMaker({
    name : 'ant',
    weight : '1 gram',
    length : '3 cm'
});

console.log(ant);

//in this example, the new keyword binds it to the hidden this object.

//4. window binding.  if THIS is called inside a function( ) in the global context, this will be bound to the window object.  


function play() {
    console.log(this);
}

//if you run play in the console, this will point to the global window object.  
