M.AutoInit();



$(document).ready(() => {
    $(".dropdown-trigger").dropdown();

    $('#textarea1').val('New Text');

    M.textareaAutoResize($('#textarea1'));

    $("#firstHiddenContainer").hide();

    $("#secondHiddenContainer").hide();

    $("#lastHiddenContainer").hide();

    $('#fadeInHeader').hide()






    $('#fadeInHeader').fadeIn(3000)(function () {
        $('#fadeInHeader').show();
    });


});