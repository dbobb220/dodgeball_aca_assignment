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
  
  class player {
    constructor(id, name, age, skillSet, placeBorn) {
        id = this.id;
        age = this.age;
        skillSet = this.skillSet;
        placeBorn = this.placeBorn;
    }
  }

  class dodgeBallPlayer extends player {
    constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, id, name, age, skillSet, placeBorn) {
        super(id, name, age, skillSet, placeBorn);
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
  }
  
  class blueTeammate {
    constructor(){}
  }

  class redTeammate {
    constructor(){}
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
    //!! change this logic from innerHTML to events like above
    li.innerHTML = `<button class="red">Red Team</button><button class="blue">Blue Team</button>${personArray[0].name}</li>`;
    personDOM.parentNode.removeChild(personDOM);
    document.querySelector('#players').appendChild(li);
    let arrIndex = arrOfPeople.findIndex(x => x.id === personArray[0].id);
    let returnedItem = arrOfPeople.splice(arrIndex, 1);
    listOfPlayers.push(returnedItem[0]);
    console.log(listOfPlayers);
  }