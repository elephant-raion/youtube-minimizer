chrome.storage.sync.get("activated", ({ activated }) => {
  if (activated) {
    let video = document.querySelector("video");

    if (video) {
      chrome.storage.sync.get("PLAYBACK_RATE", ({ PLAYBACK_RATE }) => {
        video.playbackRate = PLAYBACK_RATE;
      });

      // (変更を監視する) オブザーバーのオプション
      const config = { attributes: true, childList: true, subtree: true };
      // 変更が発見されたときに実行されるコールバック関数
      const callback = function () {
        chrome.storage.sync.get("PLAYBACK_RATE", ({ PLAYBACK_RATE }) => {
          video.playbackRate = PLAYBACK_RATE;
        });
      };
      // コールバック関数に結びつけられたオブザーバーのインスタンスを生成
      const observer = new MutationObserver(callback);
      // 対象ノードの設定された変更の監視を開始
      observer.observe(video, config);

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

