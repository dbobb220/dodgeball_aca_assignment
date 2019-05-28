const assert = require('assert');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(``, {
  url: 'http://127.0.0.1:5500/index.html',
  contentType: "text/html",
  includeNodeLocations: true
});

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class dodgeBallPlayer {
  constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this.id = id;
    this.name = name;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

class blueTeammate extends dodgeBallPlayer {
  constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, color, mascot) {
    super(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.color = color;
    this.mascot = mascot;
  }
}

class redTeammate extends dodgeBallPlayer {
  constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, color, mascot) {
    super(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.color = color;
    this.mascot = mascot;
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    button.setAttribute('id', `person${person.id}`)
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

// move from people list to player list in DOM and arrays, include buttons in DOM
const makePlayer = (id) => {
  let personArray = arrOfPeople.filter(x => x.id == id);
  let personDOM = document.querySelector(`#person${id}`).parentElement;
  const li = document.createElement('li');
  const redButton = document.createElement('button');
  const blueButton = document.createElement('button');
  redButton.innerHTML = "Red Team";
  blueButton.innerHTML = "Blue Team";
  redButton.addEventListener('click', function() {redTeamButton(this.dataset.val)});
  blueButton.addEventListener('click', function() {blueTeamButton(this.dataset.val)});
  redButton.setAttribute('data-val', `${personArray[0].id}`);
  blueButton.setAttribute('data-val', `${personArray[0].id}`);
  li.appendChild(blueButton);
  li.appendChild(redButton);
  li.appendChild(document.createTextNode(personArray[0].name));
  document.querySelector('#players').appendChild(li);
  personDOM.parentNode.removeChild(personDOM);
  let arrIndex = arrOfPeople.findIndex(x => x.id === personArray[0].id);
  let returnedItem = arrOfPeople.splice(arrIndex, 1);
  returnedItem = new dodgeBallPlayer(returnedItem[0].id, returnedItem[0].name, true, true, true, true, 5)
  listOfPlayers.push(returnedItem);
}

let blueTeamButton = (id) => {
  let personArray = listOfPlayers.filter(x => x.id == id); 
  let personDOM = document.querySelector(`[data-val='${id}']`).parentElement;
  let bluePlayer = new blueTeammate(personArray[0].id, personArray[0].name, personArray[0].canThrowBall, personArray[0].canDodgeBall, personArray[0].hasPaid, personArray[0].isHealthy, personArray[0].yearsExperience, 'Blue', 'Steel');
  let blueList = document.querySelector('#blue');
  let li = document.createElement('li');
  blueTeam.push(bluePlayer);
  personDOM.parentNode.removeChild(personDOM);
  li.appendChild(document.createTextNode(bluePlayer.name + ' - ' + bluePlayer.color + ' ' + bluePlayer.mascot));
  blueList.appendChild(li);
}

let redTeamButton = (id) => {
  let personArray = listOfPlayers.filter(x => x.id == id); 
  let personDOM = document.querySelector(`[data-val='${id}']`).parentElement;
  let redPlayer = new redTeammate(personArray[0].id, personArray[0].name, personArray[0].canThrowBall, personArray[0].canDodgeBall, personArray[0].hasPaid, personArray[0].isHealthy, personArray[0].yearsExperience, 'Red', 'Roosters');
  let blueList = document.querySelector('#red');
  let li = document.createElement('li');
  redTeam.push(redPlayer);
  personDOM.parentNode.removeChild(personDOM);
  li.appendChild(document.createTextNode(redPlayer.name + ' - ' + redPlayer.color + ' ' + redPlayer.mascot));
  blueList.appendChild(li);
}

// Tests
if (typeof describe === 'function') {
  describe('#makePlayer()', () => {
    it('adds object values to player from person', () => {
      let newPlayer = new dodgeBallPlayer('newPlayer.id', 'newPlayer.name', true, true, true, true, 4);
            assert.equal(newPlayer.canThrowBall, true);
            assert.equal(newPlayer.canDodgeBall, true);
            assert.equal(newPlayer.hasPaid, true);
            assert.equal(newPlayer.isHealthy, true);
            assert.equal(newPlayer.yearsExperience, 4);
    })
  })

  describe('#blueTeam()', () => {
    it('should add mascot and color to blue player', () => {
      let bluePlayer = new blueTeammate('bluePlayer.id', 'bluePlayer.name', true, true, true, true, 4, 'Blue', 'Steel');
        assert.equal(bluePlayer.mascot, 'Steel');
    })
  })
  
  describe('#redTeam()', () => {
    it('should add mascot and color to red player', () => {
      let redPlayer = new redTeammate('redPlayer.id', 'redPlayer.name', true, true, true, true, 4, 'Red', 'Roosters');
        assert.equal(redPlayer.mascot, 'Roosters')
    })
  })
} else {

}