// async function login() {
//     // Request options
// const options = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }
// // Fetch user data from api
// await fetch(`https://geo-trumps-api.onrender.com/players/${username}`, options)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// console.log("logging in...")
// }


//Import flag from db
function getFlag (playerCountry,cpuCountry) {
    const playerFlag = atob(playerCountry)
    const playerFlagImg = document.getElementById("player-flag-image")
    playerFlagImg.outerHTML +=playerFlag 

    const cpuFlag = atob(cpuCountry)
    const cpuFlagImg = document.getElementById("cpu-flag-image")
    cpuFlagImg.outerHTML +=cpuFlag
}

const p = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmc+DQo8c3ZnIHdpZHRoPSI5MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSItOSAtNiAxOCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICA8cmVjdCB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWYyYjJkIi8+DQogICA8cmVjdCB4PSItNTAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI1MCUiIGZpbGw9IiMwMDllNDkiLz4NCiAgIDxnIGZpbGw9IiNmY2QxMTYiIHRyYW5zZm9ybT0ic2NhbGUoMikiPg0KICAgICAgPGcgaWQ9ImNvbmUiPg0KICAgICAgICA8cG9seWdvbiBpZD0idHJpYW5nbGUiIHBvaW50cz0iMCwwIDAsMSAuNSwxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xKSByb3RhdGUoMTgpIi8+DQogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3RyaWFuZ2xlIiB0cmFuc2Zvcm09InNjYWxlKC0xLDEpIiAvPg0KICAgICAgPC9nPg0KICAgICAgPHVzZSB4bGluazpocmVmPSIjY29uZSIgdHJhbnNmb3JtPSJyb3RhdGUoNzIpIiAvPg0KICAgICAgPHVzZSB4bGluazpocmVmPSIjY29uZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTcyKSIgLz4NCiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2NvbmUiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiIC8+DQogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTQ0KSIgLz4NCiAgIDwvZz4NCjwvc3ZnPg0K"

let c = "PHN2ZyB3aWR0aD0iNjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgOTAgNjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiMwMDdhNWUiIGQ9Im0wLDBoMzB2NjBoLTMweiIvPg0KPHBhdGggZmlsbD0iI2NlMTEyNiIgZD0ibTMwLDBoMzB2NjBoLTMweiIvPg0KPGcgZmlsbD0iI2ZjZDExNiI+DQo8cGF0aCBkPSJtNjAsMGgzMHY2MGgtMzB6Ii8+DQo8ZyB0cmFuc2Zvcm09Im1hdHJpeCg4IDAgMCA4IDQ1IDMwKSI+DQo8ZyBpZD0iYyI+DQo8cGF0aCBpZD0idHJpYW5nbGUiIGQ9Im0wLDB2MWguNXoiIHRyYW5zZm9ybT0ibWF0cml4KC45NTEwNiAuMzA5MDIgLS4zMDkwMiAuOTUxMDYgMCAtMSkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI3RyaWFuZ2xlIiB0cmFuc2Zvcm09InNjYWxlKC0xIDEpIi8+DQo8L2c+DQo8dXNlIHhsaW5rOmhyZWY9IiNjIiB0cmFuc2Zvcm09InJvdGF0ZSg3MikiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2MiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2MiIHRyYW5zZm9ybT0ibWF0cml4KC0uODA5MDIgLS41ODc3OSAuNTg3NzkgLS44MDkwMiAwIDApIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNjIiB0cmFuc2Zvcm09Im1hdHJpeCguMzA5MDIgLS45NTEwNiAuOTUxMDYgLjMwOTAyIDAgMCkiLz4NCjwvZz4NCjwvZz4NCjwvc3ZnPg0K"

getFlag(p,c)
