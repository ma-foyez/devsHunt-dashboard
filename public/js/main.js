$(document).ready(function () {

    /*************** Open Language Menu List *********** */
    $(".language").on('click', function () {
        $(".language-list").toggleClass("hidden");
        $(".notification-list").addClass("hidden");
    });
    $(".notification").on('click', function () {
        $(".notification-list").toggleClass("hidden");
        $(".language-list").addClass("hidden");
    });

    /*************** Toggle Setting Menu *********** */

    $('.toggle-setting').on('click', function () {
        $('.open-settings').toggle('slide');
    });

    /*************** Store Theme in local storage *********** */
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    $('#change_theme').on('click', function () {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            localStorage.removeItem("theme")
            document.documentElement.classList.remove('dark')
        } else {
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add('dark')
        }
    });

    $('.dropify').dropify();

});

