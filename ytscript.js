// Store all players
let players = [];

// This function is called when the YouTube iframe API is ready
function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach((iframe, index) => {
        players[index] = new YT.Player(iframe.id, {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    });
}

// This function triggers when the player's state changes
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        pauseAllOthers(event.target);
    }
}

// This function pauses all other videos
function pauseAllOthers(currentPlayer) {
    players.forEach(player => {
        if (player !== currentPlayer) {
            player.pauseVideo();
        }
    });
}

// Load the IFrame Player API asynchronously
(function() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();
