// Brief
// Using your knowledge about scope and variable declarations in JavaScript,
//  look at the following code snippets and predict what the output or error 
//  will be and why. Copy the following episodes into a JavaScript file and add
//   comments under each one detailing the reason for your predicted output.

// MVP
// Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The output will be 'Miss Scarlet'.  scenario is available globally 
// so should be accessed by the function.  The output of the function
// is then assigned to a variable, which is called in the console log

// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// I think the program would return 'Professor Plum' as the function declareMurderer 
// will not access the reassigned variable inside changeMurderer.  Also, murderer is 
//assigned with const, so maybe the program will end after the attemp to reassign
// in 'chageMurderer


// Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//const firstVerdict will return 'Mrs. Peacock'.  const secondVerdict will return 
// 'Professor Plum' as it cannot access the returned result(murderer variable)
//  of declareMurderer

// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// 1. miss Scarlet, Professor Plum, Mrs Peacock
// 2. variable 'suspects' is never declared
// 3. Mrs Peacock

// Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}
// can't access 'scenario.weapon' in changeWeapon
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
//will return "the weapon is the candle stick"

// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist(); //mrs.white
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;//colonel mustard
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//the murderer is colonel mustard

// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer(); //colonel mustard
const verdict = declareMurderer(); //professor plum
console.log(verdict);


// Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard'); //lead pipe
  }

  plotTwist('Dining Room'); //colonel mustard
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon(); //Lead Pipe
console.log(verdict);

// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`; //Professor Plum
}

const verdict = declareMurderer();
console.log(verdict);

// Extensions
// Make up your own episode!