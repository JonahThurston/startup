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

    async loadScores() {
        let scoresToGet = `${this.playerName}Score`

        try {
          // Get the users score from the service
          const response = await fetch(`/api/getScore/${this.playerName}`);
          let scoreObject = await response.json();

          if (!response.ok) {
            throw new Error(`Failed to fetch score: ${response.status} ${response.statusText}`);
          }
      
          // Save the score in case we go offline in the future
          localStorage.setItem(scoresToGet, JSON.stringify(scoreObject));

          this.numWatched = scoreObject.score;
        } catch (error) {
          console.error('Error fetching score:', error);

          // If there was an error then just use the last saved scores
          const scoresText = localStorage.getItem(scoresToGet);
          if (scoresText) {
              this.numWatched = JSON.parse(scoresText).score;
          }
        } finally {
            const scoreEl = document.querySelector('#score');
            scoreEl.textContent = this.numWatched;
        }
    }

    async loadTable() {
        let tableToGet = `${this.playerName}Table`

        try {
          // Get the users table from the service
          const response = await fetch(`/api/getTable/${this.playerName}`);
          let tableObject = await response.json();

          if (!response.ok) {
            throw new Error(`Failed to fetch table: ${response.status} ${response.statusText}`);
          }
      
          // Save the score in case we go offline in the future
          localStorage.setItem(tableToGet, JSON.stringify(tableObject));

          this.watchTable = tableObject;
        } catch (error) {
          console.error('Error fetching table:', error);

          // If there was an error then just use the last saved table
          let tableToGet = `${this.playerName}Table`
          const watchedText = localStorage.getItem(tableToGet);
          if (watchedText) {
              this.watchTable = JSON.parse(watchedText);
          }
        } finally {
            //initially paint buttons
            document.querySelectorAll('.btn').forEach((el) => {
                this.setButtonDom(el)
            });
        }
    }

    constructor() {
        //get and set player name
        this.playerName = this.getPlayerName();
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.playerName;

        //get and set numWatched
        this.loadScores();

        //get and set watchTable
        this.loadTable();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }
    
    

    async updateScore(scoreUpdate){
        return new Promise(async (scoreResolve) => {
            this.numWatched = this.numWatched + scoreUpdate;
            const scoreEl = document.querySelector('#score');
            scoreEl.textContent = this.numWatched;


            let scoreToSet = `${this.playerName}Score`;
            let url = `/api/setScore/${this.playerName}`;

            try {
                const response = await fetch(url, {
                  method: 'POST',
                  headers: {'content-type': 'application/json'},
                  body: JSON.stringify({ score: this.numWatched }),
                });
          
                // Store what the service gave us as the table
                const watched = await response.json();
                localStorage.setItem(scoreToSet, JSON.stringify(watched));
            } catch {
              // If there was an error then just track locally
              localStorage.setItem(scoreToSet, JSON.stringify(this.numWatched));
            }

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
            let tableToSet = `${this.playerName}Table`;
            let url = `/api/setTable/${this.playerName}`;

            try {
                const response = await fetch(url, {
                  method: 'POST',
                  headers: {'content-type': 'application/json'},
                  body: JSON.stringify(this.watchTable),
                });
          
                // Store what the service gave us as the table
                const table = await response.json();
                localStorage.setItem(tableToSet, JSON.stringify(table));
            } catch {
              // If there was an error then just track locally
              localStorage.setItem(tableToSet, JSON.stringify(this.watchTable));
            }

            
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

//output movie quotes every 15 seconds
setInterval(() => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      contentString = data.content;
      authorString = data.author;

      const notificationText = document.querySelector('#notificationList');
      notificationText.innerHTML =
        `<li class="notification">"` + contentString + `" - ` + authorString + `</li>` +
        notificationText.innerHTML;
    });
}, 15000);