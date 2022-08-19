chrome.storage.sync.get("activated", ({ activated }) => {
  if (activated) {
    let video = document.querySelector("video");

    if (video) {
      chrome.storage.sync.get("PLAYBACK_RATE", ({ PLAYBACK_RATE }) => {
        video.playbackRate = PLAYBACK_RATE;
      });

      setInterval(() => {
        if (
          video.currentTime > video.duration / 10 &&
          video.currentTime < (video.duration * 9) / 10
        ) {
          video.currentTime = (video.duration * 9) / 10;
        }
      }, 1000);
    }
  }
});

