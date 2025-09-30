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
    
    showyear();
};

function showyear() {
    var dtElem = document.getElementById('year');
    if (!dtElem) return;
    
    var now = new Date();
    var year = now.getFullYear();
    dtElem.textContent = `Year: ${year}`;
}