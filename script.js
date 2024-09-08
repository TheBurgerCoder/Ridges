var swfobject = {};

swfobject.embedSWF = function(url, cont, width, height){
    var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
            width: width,
            height: height,
            style: 'width: ' + width + 'px; height: ' + height + 'px;'+ "margin:0;"
        });

    player.load({ url: url });
};

function reus() {
const urlParams = new URLSearchParams(window.location.search);
const file = urlParams.get('game');
 
swfobject.embedSWF(file+".swf", 'ruffle', 1517, 852);
}