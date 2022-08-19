chrome.storage.sync.get("activated", ({ activated }) => {
  console.log(activated);
  if (activated) {
    let video = document.querySelector("video");

    if (video) {
      chrome.storage.sync.get("PLAYBACK_RATE", ({ PLAYBACK_RATE }) => {
        video.playbackRate = PLAYBACK_RATE;
      });
    }
  }
});

