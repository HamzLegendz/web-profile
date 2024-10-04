window.addEventListener('load', function() {
    var music = document.getElementById('background-music');
    music.volume = 0.7;

    var playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            console.log('Music is playing');
        }).catch(function() {
            var playButton = document.createElement('button');
            playButton.textContent = 'Play Music';
            playButton.style.position = 'fixed';
            playButton.style.top = '10px';
            playButton.style.left = '10px';
            playButton.style.padding = '10px 20px';
            playButton.style.backgroundColor = '#000';
            playButton.style.color = '#fff';
            playButton.style.border = 'none';
            playButton.style.cursor = 'pointer';
            playButton.style.zIndex = '999';
            
            document.body.appendChild(playButton);

            playButton.addEventListener('click', function() {
                music.play().then(function() {
                    document.body.removeChild(playButton);
                });
            });
        });
    }
});