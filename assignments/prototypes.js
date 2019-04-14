function GameObject(obj) {

  this.createdAt = obj.createdAt;
  this.name = obj.name;
  this.dimensions = obj.dimensions;
  this.year = obj.year;
  // this.prototype = {
  //   destroy : () => {return `${this.name} was removed from the game`}
  // }
}

GameObject.prototype.destroy = function() {return `${this.name} was removed from the game`};

function CharacterStats(obj) {
  GameObject.call(this,obj);
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {return `${this.name} took damage`};

function Humanoid(obj) {
  CharacterStats.call(this,obj);
  this.weapons = obj.weapons;
  this.language = obj.language;
  this.team = obj.team;
  this.healthPoints = 100;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {return `${this.name} offers a greeting in ${this.language}`};
Humanoid.prototype.attack = function(humanoid) {
  console.log(humanoid);
  const damage = Math.floor(Math.random()*this.healthPoints);
  humanoid.healthPoints -= damage;
  return `${this.name} is attacking ${humanoid.name}!  He caused ${damage} points of damage with the ${this.weapons}.  New healthpoints for ${humanoid.name}: ${humanoid.healthPoints}`;
};

function Villian(obj) {
  Humanoid.call(this,obj);

}

Villian.prototype = Object.create(Humanoid.prototype);

function Hero(obj) {
  Humanoid.call(this,obj);

}

Hero.prototype = Object.create(Humanoid.prototype);




const player = new CharacterStats({
  createdAt: new Date(),
  name: 'player',
  dimensions: '40inches'
})

const tetris = new GameObject({
  createdAt: 'june',
  name: 'tetris',
  year: 1984
})

const ibby = new Humanoid({
  name : 'ibby',
  dimensions: '50inches',
  year: 2012,
  language: 'english',
  weapons: 'ipad'
})

const yusi = new Humanoid({
  name: 'yusi',
  dimensions: '30inches',
  year: 2015,
  language: 'baby-talk',
  weapons: 'dunda'
})
 
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});
  
  //additional testing and tinkering
  console.log(ibby);
  console.log(yusi);
  console.log(tetris);
  console.log(player);
  //stretch tasks:
  console.log(ibby.attack(yusi));
  console.log(yusi.attack(ibby));




  // //assignment
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  



  /*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

// /*
