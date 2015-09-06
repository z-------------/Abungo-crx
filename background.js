chrome.app.runtime.onLaunched.addListener(function() {
    console.log(window.outerWidth);
    chrome.app.window.create("window.html", {
        "outerBounds": {
            "width": 1000,
            "height": 600
        }
    });
});
