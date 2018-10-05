const Player = require('./Player');

class Leaderboard {
  constructor() {
    this.leadersArray = [];

    // this.leadersArray に含まれているインスタンスの取得が効率よくできるために
    // this.leadersMap はこんなキー・バリュー型で格納するのがいい：
    // {
    //   名前： player インスタンス
    // }
    this.leadersMap = {};
  }

  // winStatus will be 1, 0, or -1
  updateLeaderBoard({ name, winStatus }) {
    //
    // TODO - リーダーボード配列を更新しよう
    // name      STRING: player name
    // winStatus NUMBER: lose (-1), tie (0), win (1)
    //
    // 注意：各playerの勝率を使用してthis.leadersArrayの並び替えを忘れないように！
    //
    // 大事なポイント： Player.js も開いて、player インスタンスが何をできるかをざっと見とこう。
    //
    let player;
    if (this.doesPlayerExist(name)) {
      player = this.leadersArray.filter((item, index) => {
        if (item[name]) return this.leadersArray[index];
      });
      player[0][name].updateStats(winStatus);
      console.log(this.leadersArray);
      return this.leadersArray;
    } else {
      player = new Player(name);
      player.updateStats(winStatus);
      this.leadersMap[name] = player;
      this.leadersArray.push(this.leadersMap);
      return this.leadersArray;
    }
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

}

module.exports = Leaderboard;
