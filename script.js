document.addEventListener('DOMContentLoaded', () => {
    if (window.MediaSource && window.File && window.FileReader) {
        const inputFile = document.getElementById('inputFile');
        const loading = document.getElementById('loading');
        const videoContainer = document.getElementById('videoContainer');
        const videoPlayer = document.getElementById('videoPlayer');
        const controls = document.getElementById('controls');
        const play = document.getElementById('play');
        const pause = document.getElementById('pause');
        const volumeUp = document.getElementById('volumeUp');
        const volumeDown = document.getElementById('volumeDown');

        inputFile.addEventListener('change', () => {
            const file = inputFile.files[0];
            if (file.type.startsWith('video/')) {
                loading.classList.remove('hidden');
                setTimeout(() => {
                    const url = URL.createObjectURL(file);
                    videoPlayer.src = url;
                    videoContainer.classList.remove('hidden');
                    controls.classList.remove('hidden');
                    play.classList.remove('hidden');
                    volumeUp.classList.remove('hidden');
                    volumeDown.classList.remove('hidden');
                    loading.classList.add('hidden');
                }, 2000);
            } else {
                alert('Por favor, selecciona un archivo de vídeo válido.');
            }
        });

      
    } else {
        alert('Lo sentimos, pero su navegador no es compatible con MediaSource, File API o FileReader. Por favor, utilice un navegador actualizado como Chrome, Firefox, Safari o Edge.');
    }

    videoPlayer.addEventListener('play', () => {
        play.classList.add('hidden');
        pause.classList.remove('hidden');
    });

    videoPlayer.addEventListener('pause', () => {
        pause.classList.add('hidden');
        play.classList.remove('hidden');
    });

    play.addEventListener('click', () => {
        videoPlayer.play();
    });

    pause.addEventListener('click', () => {
        videoPlayer.pause();
    });

    volumeUp.addEventListener('click', () => {
        videoPlayer.volume = Math.min(videoPlayer.volume + 0.1, 1);
        if (videoPlayer.volume > 0) {
            videoPlayer.muted = false;
        }
    });

    volumeDown.addEventListener('click', () => {
        videoPlayer.volume = Math.max(videoPlayer.volume - 0.1, 0);
        if (videoPlayer.volume > 0) {
            videoPlayer.muted = false;
        }
    });
});
