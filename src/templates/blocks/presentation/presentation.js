let videoPlayer = document.querySelector('.presentation__video'),
    btnPlay = document.querySelector('.presentation__info > .btn-play'),
    videoInfo = document.querySelector('.presentation__info');

btnPlay.addEventListener('click', () => {
  videoPlayer.play();
  videoPlayer.controls = true;
  videoInfo.style.display = 'none';
});

videoPlayer.addEventListener('pause', () => {
  videoInfo.style.display = 'flex';
  videoPlayer.controls = false;
});
 