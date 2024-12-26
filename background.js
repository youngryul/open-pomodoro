chrome.action.onClicked.addListener((tab) => {
    chrome.windows.create({
        url: 'index.html',
        type: 'popup',
        width: 500,
        height: 700
    });
});