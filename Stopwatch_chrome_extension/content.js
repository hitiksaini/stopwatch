chrome.storage.local.get('timerDisplay', (response) => {
  if (response.timerDisplay) {
    timerDisplay.innerHTML = response.timerDisplay ;
  }
});
