function activarRadio(idRadio) {
    setTimeout(function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },20);
    var radius = document.getElementById(idRadio);
    radius.checked = true;
}