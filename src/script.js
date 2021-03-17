function run () {
    var htmlCode = $("#html-container").val();
    var cssCode = "<style>" + $("#css-container").val() + "</style>";
    var jsCode = $("#js-container").val();
    var result = $("#result-container");
    result.contents()[0].body.innerHTML = htmlCode + cssCode;
    result.prop("contentWindow").eval(jsCode);
}

$("#html-container").keyup(run);
$("#css-container").keyup(run);
$("#js-container").keyup(run);

$(".btn").click(function () {
    $(this).toggleClass("selected");
    var containerId = "#" + this.id + "-container";
    $(containerId).toggleClass("hidden");
    $(".panel").width(($(window).width() / ($(".selected").length)) - 25);
    $(".panel").height($(window).height() - $("#container").height() - 25);
});

$(".panel").width($(window).width() / ($(".selected").length) - 25);
$(".panel").height($(window).height() - $("#container").height() - 25);