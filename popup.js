const toggleSwitch = document.getElementById('toggleSwitch');

if (toggleSwitch) {
  chrome.storage.sync.get("activated", ({ activated }) => {
    if (activated) {
      toggleSwitch.checked = true;
    } else {
      toggleSwitch.checked = false;
    }
  });

  toggleSwitch.addEventListener('click', async () => {
    let activated;
    if (toggleSwitch.checked) {
      activated = true;

    } else {
      activated = false;
    }
    chrome.storage.sync.set({ activated });
  })
}
