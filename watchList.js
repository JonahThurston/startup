class WatchList {
    playerName;
    numWatched = 0;
    watchTable = [
        false, false, false, false , false, false, false, false, false, false,
        false, false, false, false , false, false, false, false, false, false,
        false, false, false, false , false, false, false, false, false, false,
        false, false, false, false , false, false, false, false, false, false,
        false, false, false, false , false, false, false, false, false, false,
    ];

    constructor() {
        //get and set player name
        this.playerName = this.getPlayerName();
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.playerName;

        //get and set numWatched
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            this.numWatched = JSON.parse(scoresText);
        }
        const scoreEl = document.querySelector('#score');
        scoreEl.textContent = this.numWatched;

        //get watchTable
        const watchedText = localStorage.getItem('table');
        if (watchedText) {
            this.watchTable = JSON.parse(watchedText);
        }

        //initially paint buttons
        document.querySelectorAll('.btn').forEach((el) => {
            this.setButtonDom(el)
        });


    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }
    
    async updateScore(scoreUpdate){
        return new Promise(async (scoreResolve) => {
            this.numWatched = this.numWatched + scoreUpdate;
            const scoreEl = document.querySelector('#score');
            scoreEl.textContent = this.numWatched;
            
            //TODO: im a bit confused but I think this is bad cuz scores will be independent of name
            localStorage.setItem('scores', JSON.stringify(this.numWatched));

            scoreResolve()
        });
    }

    watched(buttonID){
        return this.watchTable[Number(buttonID)]
    }

    setButtonDom(buttonEl){
        if(this.watched(buttonEl.id)){
            const background = `red`;
            buttonEl.style.backgroundColor = background;
            buttonEl.innerText = "Movie Watched!!!";
        }
        else{
            const background = `blue`;
            buttonEl.style.backgroundColor = background;
            buttonEl.innerText = "Mark watched";
        }
    }

    async updateWatched(){
        return new Promise(async (watchedResolve) => {
            //TODO: im a bit confused but I think this is bad cuz scores will be independent of name
            localStorage.setItem('table', JSON.stringify(this.watchTable));
            watchedResolve()
        });
    }

    async press(button) {
        return new Promise(async (pressResolve) => {
          this.watchTable[Number(button.id)] = !this.watchTable[Number(button.id)]
          this.setButtonDom(button);
          await this.updateWatched();
          pressResolve();
        });
    }

    async pressButton(button) {
        await this.press(button);
        if(this.watched(button.id)){
            await this.updateScore(1)
        }
        else{
            await this.updateScore(-1)
        } 
    }
}

const watchList = new WatchList();

// Simulate chat messages that will come over WebSocket
setInterval(() => {
    const notificationText = document.querySelector('#notificationList');
    notificationText.innerHTML =
      `<li class="notification">Marcus just watched Lego Batman</li>` +
      notificationText.innerHTML;
}, 5000);