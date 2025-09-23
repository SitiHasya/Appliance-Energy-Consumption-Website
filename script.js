function goToHome() {
    window.location.href = "index.html";
}

function goToTelevisions() {
    window.location.href = "televisions.html";
}

function goToAboutUs() {
    window.location.href = "about.html";
}



window.onload = function() {

    showDateTime();
};

function showDateTime() {
    var dtElem = document.getElementById('date-time');
    if (!dtElem) return;
    function update() {
        var now = new Date();
        var year = now.getFullYear();
        var time = now.toLocaleTimeString();
        dtElem.textContent = ` ${time} | Year: ${year}`;
    }
    update();
    setInterval(update, 1000);
}