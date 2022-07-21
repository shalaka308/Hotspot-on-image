$(".trigger").mouseenter(function () {
    $(this).find('.speech-bubble').css("display", "block");
});
$(".trigger").mouseleave(function () {
    $(this).find('.speech-bubble').css("display", "none");
});