$(document).ready(function () {
    // load up defined settings
    function loadSettings() {
        $('#selection').val(localStorage.theme);
    }
    loadSettings();
    $('#selection').on('change', function (e) {
        var option = $('#selection').val();
        localStorage.theme = option;
        console.log(localStorage.theme);
    });
});