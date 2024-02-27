class WatchList {

    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
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