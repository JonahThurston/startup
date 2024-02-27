class Button {
    constructor(description, el) {
        this.el = el;
        this.watched = description.watched;
        this.paint();
    }

    paint() {
        if(this.watched){
            const background = `red`;
            this.el.style.backgroundColor = background;
        }
        else{
            const background = `blue`;
            this.el.style.backgroundColor = background;
        }
    }

    async updateWatched(){
        return new Promise(async (watchedResolve) => {
            //TODO; update score in database
            watchedResolve()
        });
    }

    async press() {
        return new Promise(async (pressResolve) => {
          this.watched = !this.watched;
          this.paint();
          await this.updateWatched();
          pressResolve();
        });
    }
}


class WatchList {
    buttons;
    btnDescriptions = [
        {watched: false}
    ];
    numWatched;
    
    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();

        this.buttons = new Map();
        //TODO: initialize btnDescriptions from local storage or to all false if not in storage.
        document.querySelectorAll('.btn').forEach((el, i) => {
            if (i < this.btnDescriptions.length) {
              this.buttons.set(el.id, new Button(this.btnDescriptions[i], el));
            }
        });

        //TODO: initialize numWatched from local storage or to 0 if not
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }
    
    async updateScore(scoreUpdate){
        return new Promise(async (scoreResolve) => {
            //TODO; update score in database
            scoreResolve()
        });
    }

    async pressButton(button) {
        let buttonID = button.id;
        let buttonToPress = this.buttons.get(buttonID)
        await buttonToPress.press();
        if(buttonToPress.watched){
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