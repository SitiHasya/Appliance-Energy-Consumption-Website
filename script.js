function goToHome() {
    window.location.href = "Index.html";
}

function goToTelevisions() {
    window.location.href = "Televisions.html";
}

function goToAboutUs() {
    window.location.href = "Aboutus.html";
}


function highlightActiveNav() {
   
}

window.onload = function() {
    highlightActiveNav();
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