playBtn.onclick = function (event) {
    if (player.paused) {
        player.play();
        this.dataset.volume = "on";
    } else {
        player.pause();
        this.dataset.volume = "off";
    }
};

progressRange.oninput = function(e){
    let root = document.documentElement;
    root.style.setProperty('--progress', this.value);
    //root.style.setProperty('--speed-spool', '600ms');    
}
