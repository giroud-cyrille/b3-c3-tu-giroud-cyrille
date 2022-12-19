$(document).ready(function() {
    let c = new Calculator();
    $(".touche").click(function() {
        c.input($(this).text());
    });
    $(".clear").click(function() {
        c.inputClear();
    });
    $(".result").click(function() {
        c.baseCalcul();
    });

    $(".complex").click(function() {
        c.complexCalcul($(this).text());
    });

    $(".del").click(function() {
        c.inputRemoveLast();
    });
});