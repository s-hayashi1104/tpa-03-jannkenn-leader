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

  compareWinPercentage(player, secondPlayer){
    return parseFloat(secondPlayer.winPercentage, 10) - parseFloat(player.winPercentage, 10);
  }
}

module.exports = Leaderboard;
