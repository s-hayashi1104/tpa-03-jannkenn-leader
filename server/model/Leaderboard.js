const Player = require('./Player');

class Leaderboard {
  constructor() {
    this.leadersArray = [];
    this.leadersMap = {};
  }

  // winStatus will be 1, 0, or -1
  updateLeaderBoard({ name, winStatus }) {
    let player;
    if (this.doesPlayerExist(name)) {
      player = this.leadersMap[name];
      player.updateStats(winStatus);
    } else {
      player = new Player(name);
      player.updateStats(winStatus);
      this.leadersMap[name] = player;
      this.leadersArray.push(player);
    }
    this.leadersArray.sort(this.compareWinPercentage);
  }

  getLeaderBoard() {
    return this.leadersArray;
  }

  doesPlayerExist(name) {
    return !!this.leadersMap[name];
  }

  getPlayerStats(name) {
    return this.leadersMap[name].getStats();
  }

  compareWinPercentage(mapObjOne, mapObjTwo){
    if (parseInt(mapObjOne['winPercentage'], 10) < parseInt(mapObjTwo['winPercentage']), 10) {
      return 1;
    }
    if (parseInt(mapObjOne['winPercentage'], 10) > parseInt(mapObjTwo['winPercentage']), 10) {
      return -1;
    }   
    return 0;
  }

}

module.exports = Leaderboard;
