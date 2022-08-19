const PLAYBACK_RATE = 2.0;
let activated = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ PLAYBACK_RATE });
  chrome.storage.sync.set({ activated });
})
