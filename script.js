
/*const isAPIsupported = () => {
    return window.File && window.FileReader && window.FileList && window.Blob;
  }
  
  const handleFileSelect = (evt) => {
    const file = evt.target.files[0];
  
    if (!file.type.match('video.*')) {
      alert('Por favor, seleccione un archivo de video');
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = ((theFile) => {
      return (e) => {
        const videoDiv = document.querySelector('.video-container');
  
        if (videoDiv) {
          videoDiv.parentNode.removeChild(videoDiv);
        }
  
        const div = document.createElement('div');
        div.id = 'video-div';
        div.className = 'video-container';
        div.innerHTML = `<video controls id="video" class="thumb" src="${e.target.result}" title="${escape(theFile.name)}"/>`;
  
        document.getElementById('video-output').insertBefore(div, null);
  
        const loadingMessage = document.createElement('p');
  
        loadingMessage.id = 'loading';
        loadingMessage.className = 'loading-message';
        loadingMessage.innerHTML = 'El video está cargando';
  
        document.getElementById('video-output').insertBefore(loadingMessage, null);
  
        const playButton = document.getElementById('play');
        const pauseButton = document.getElementById('pause');
        const volumeUp = document.getElementById('up');
        const volumeDown = document.getElementById('down');
  
        playButton.addEventListener('click', () => {
          document.getElementById('video').play();
        });
  
        pauseButton.addEventListener('click', () => {
          document.getElementById('video').pause();
        });
  
        volumeUp.addEventListener('click', () => {
          document.getElementById('video').volume += 0.1;
        });
  
        volumeDown.addEventListener('click', () => {
          document.getElementById('video').volume -= 0.1;
        });
  
        document.getElementById('video').addEventListener('canplay', () => {
          const loadingMessage = document.getElementById('loading');
  
          document.getElementById('video-output').removeChild(loadingMessage);
  
          document.getElementById('video').style.visibility = 'visible';
  
          playButton.style.visibility = 'visible';
          pauseButton.style.visibility = 'visible';
          volumeUp.style.visibility = 'visible';
          volumeDown.style.visibility = 'visible';
        });
      }
    })(file);
  
    reader.readAsDataURL(file);
  };
  
  if (isAPIsupported()) {
    alert('¡Genial! Todas las API\'s están soportadas :)');
  } else {
    alert('La API no está soportada por este navegador... :(');
  }
  document.getElementById('file').addEventListener('change', handleFileSelect, false);*/

  //-------------------- otro java ------------

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