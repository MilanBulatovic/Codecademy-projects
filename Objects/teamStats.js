const team = {
  _players: [
    {firstName: 'Milan', lastName: 'Buli', age: 37},
    {firstName: 'Mil', lastName: 'Grin', age: 27}
  ],
  _games: [
    {opponent: 'Barca', teamPoints: 45, opponentPoints: 50 },
    {opponent: 'Red Star', teamPoints: 55, opponentPoints: 50 }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };

    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game= {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };

    this.games.push(game);
  }
};



team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
