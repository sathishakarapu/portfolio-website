function toggeleMenu () {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle('open');
}

function sendEmail () {
    var respientEmail = "akarapusathish003@gmail.com";
    if(respientEmail) {
        window.location.href = "mailto:" + respientEmail;
    } else {
        alert("Please enter a valid username");
    };
};