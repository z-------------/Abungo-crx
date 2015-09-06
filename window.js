var webview = document.querySelector("#main");

document.body.classList.add("loading");

webview.addEventListener("loadstop", function(e) {
    document.body.classList.remove("loading");
});
