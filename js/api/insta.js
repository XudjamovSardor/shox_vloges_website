fetch('http://localhost:8080/api/onlinenew/true?type=Instagram&size=2')
    .then(response => response.json())
    .then(data => addFullIframeIns(data))

fetch('http://localhost:8080/api/onlinenew/false?type=Instagram&size=3')
    .then(response => response.json())
    .then(data => addShortIframeIns(data))
function addFullIframeIns(data) {
    let InstagramFull = document.getElementById("instaFull")
    for (let d of data.content) {
        const iframeFull = document.createElement("iframe")
        iframeFull.height = 700 + "px"
        iframeFull.width = 100 + "%"
        iframeFull.frameBorder = 0
        iframeFull.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframeFull.allowFullscreen = true
        iframeFull.src = d.link
        InstagramFull.appendChild(iframeFull)
    }
}


function addShortIframeIns(data) {
    let InstagramShot = document.getElementById("instaShot")
    for (let d of data.content) {
        const iframeShort = document.createElement("iframe")
        iframeShort.height = 300 + "px"
        iframeShort.width = 33.3 + "%"
        iframeShort.frameBorder = 0
        iframeShort.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframeShort.allowFullscreen = true
        iframeShort.src = d.link
        InstagramShot.appendChild(iframeShort)
    }
}