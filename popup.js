const toggleSwitch = document.getElementById('toggleSwitch');

if (toggleSwitch) {
  toggleSwitch.addEventListener('click', async () => {
    let activated;
    if (toggleSwitch.checked) {
      activated = true;

    } else {
      activated = false;
    }
    chrome.storage.sync.set({ activated });
    chrome.storage.sync.get('activated', (data) => {
      let activatedChecker = document.getElementById("activated-checker");
      activatedChecker.innerHTML = data.activated
    });
  })
}
