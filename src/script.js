function run () {
    var htmlCode = $("#html-container").val();
    var cssCode = "<style>" + $("#css-container").val() + "</style>";
    var jsCode = $("#js-container").val();
    var result = $("#result");
    result.contents()[0].body.innerHTML = htmlCode + cssCode;1
    result.prop("contentWindow").eval(jsCode);
}

$("#html-container").keyup(run);
$("#css-container").keyup(run);
$("#js-container").keyup(run);
