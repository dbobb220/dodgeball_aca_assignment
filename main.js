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

// class player {
//   constructor(id, name, age, skillSet, placeBorn) {
//       id = this.id;
//       age = this.age;
//       skillSet = this.skillSet;
//       placeBorn = this.placeBorn;
//   }
// }

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
  console.log(personArray);
  let personDOM = document.querySelector(`#person${id}`).parentElement;
  const li = document.createElement('li');
  const redButton = document.createElement('button');
  const blueButton = document.createElement('button');
  redButton.innerHTML = "Red Team";
  blueButton.innerHTML = "Blue Team";
  redButton.addEventListener('click', function() {redTeam(id)});
  blueButton.addEventListener('click', function() {blueTeam(id)});
  redButton.setAttribute('id', `person${personArray[0].id}`);
  blueButton.setAttribute('id', `person${personArray[0].id}`);
  li.appendChild(blueButton);
  li.appendChild(document.createTextNode(personArray[0].name));
  document.querySelector('#players').appendChild(li);
  personDOM.parentNode.removeChild(personDOM);
  let arrIndex = arrOfPeople.findIndex(x => x.id === personArray[0].id);
  let returnedItem = arrOfPeople.splice(arrIndex, 1);
  returnedItem = new dodgeBallPlayer(returnedItem[0].id, returnedItem[0].name, true, true, true, true, 5)
  listOfPlayers.push(returnedItem);
  console.log(returnedItem);
  console.log(personArray);
  console.log(listOfPlayers);
}

// const blueTeam = (id) => {
//   let teamMember = listOfPlayers.filter(x => x.id == id);
//   let personDOM = document.querySelector()
// }