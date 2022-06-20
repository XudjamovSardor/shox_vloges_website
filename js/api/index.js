
// <---------------------------------------------------------------------------------------> \\

fetch('http://localhost:8080/api/onlinenew/true?type=YouTube&size=2')
    .then(response => response.json())
    .then(data => addFullIframe(data));

fetch('http://localhost:8080/api/onlinenew/false?type=YouTube&size=3')
    .then(r => r.json())
    .then(d => addShortIframe(d))

function addShortIframe(data) {
    let youtubeShot = document.getElementById("youtubeShort")
    for (let d of data.content) {
        const iframeShort = document.createElement("iframe")
        iframeShort.height = 200 + "px"
        iframeShort.width = 33.3 + "%"
        iframeShort.src = d.link
        youtubeShot.appendChild(iframeShort)
    }
}



function addFullIframe(data) {
    let youtubeFull = document.getElementById("youtubeFull")
    for (let d of data.content) {
        const iframeFull = document.createElement("iframe")
        iframeFull.height = 275 + "px"
        iframeFull.width = 100 + "%"
        iframeFull.src = d.link
        youtubeFull.appendChild(iframeFull)
    }
}
