$(document).ready(function () {
    const response = fetch(`https://status.krypton.ninja/discord?${Math.floor(Math.random() * 9999999)}`).then(response => response.json());
    response.then(json => {
        document.getElementById("logo").classList.add(json.status);
    });
});