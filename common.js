document.addEventListener("DOMContentLoaded", function () {
    //modal appears in 20 sec
    setTimeout(function () {
        document.getElementById("triggerModal").click();
    }, 20000)
    //leaving
    document.addEventListener('mouseleave', function (event) {
        document.getElementById("triggerModal").click();
    })
})

document.addEventListener("DOMContentLoaded", function () {
    let date = new Date();
    date.setDate(date.getDate() - 5);
    document.getElementById("publish-date").innerText = date.toLocaleDateString();
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("form-overlay").style.display = 'block';
    }, 600000)
})
