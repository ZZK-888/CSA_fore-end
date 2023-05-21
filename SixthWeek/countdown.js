setInterval(function () {
    var now = new Date();
    var target = new Date("January 1, 2023");
    var timeLeft = Math.floor((target - now) / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML = timeLeft;
}, 1000);
