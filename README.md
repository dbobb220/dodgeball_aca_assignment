# Dodgeball assignment code plan

*Step 0:* What's available in precode - 
Html:
- A button to create a list of players that have signed up under the list of players section. 
- A section for dodgeball players for the above list to go to when the button next to the make player list is clicked
- A respective section for members of the blue team and the red team to get added to once they are in the dodge ball players section

Javascript: 
- An array of objects that include player info
- An empty array for list of players, blue team, red team (inline with sections in html)
- empty classes for player section and blue/red team
- logic for list people button to create the list of players on page based on the players array of people
- console log for make player - *this will be updated to include logic for moving people to the player list*

*Step 1:*
- create logic that removes a person from the people list and adds them to the player list
- assign constructors/logic to the player class that adds the values when the button is clicked - `canThrowBall`, `canDodgeBall`, `hasPaid`, `isHealthy`, `yearsExperience`
- include 2 buttons in the DOM for blue team and a red team

*Step 2:*
- create logic that removes a player from the player list assigns a player to a team based on the button that is clicked in the DOM
- create constructors and values for `color` and `mascot` that gets added to the player based on which team they go to
