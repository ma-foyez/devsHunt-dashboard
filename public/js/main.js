
/***************Get Current Year For Footer Section*********** */
// document.getElementById("year").innerHTML = new Date().getFullYear();

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

    /*************** Nav Responsive *********** */
    $('.mobile-navbar').removeClass('hidden');
    $('.mobile-navbar').hide();

    $('.navbar-toggle').on('click', function () {
        $('.mobile-navbar').toggle('slide');
        $('#toggle-icon').toggleClass('fa-times');
    });

    $(window).click(function () {
        $('.mobile-navbar').hide("slide");
        $('.mobile-navbar').addClass('hidden');
        // $(".language-list").hide("slide");

        $('#toggle-icon').addClass('fa-bars');
        $('#toggle-icon').removeClass('fa-times');
    });

    $('.navbar-toggle').on('click', function (event) {
        event.stopPropagation();
    });

    $('.mobile-navbar').on('click', function (event) {
        event.stopPropagation();
    });



});