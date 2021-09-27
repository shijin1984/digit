$(function () {
    var audio = new Audio("audio/praise.mp3");
    audio.autoplay = false;
    var fontCollection = [
        "cursive", "emoji", "monospace", "serif", "sans-serif", "Verdana",
        "Comic Sans MS"];


    for (var num = 1; num <= 9; ++num) {
        $("#tgt").append($("<option/>", {text: num, value: num, class: "common"}));
    }
    $("#tgt").val("1");

    var getTargetDigit = function() {
        return $("#tgt").val();
    };

    var randomSelect = function (array) {
        var index = Math.floor(Math.random() * array.length);
        return array[index];
    };

    $("#shuf").click(function () {
        var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (var i = 0; i < num.length; ++i) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = num[i];
            num[i] = num[j];
            num[j] = tmp;
        }

        for (var i = 0; i < num.length; ++i) {
            $("td").eq(i).text(num[i]);
        }

        $("td").css("font-family", randomSelect(fontCollection));
    });

    $("td").click(function () {
        // TODO(shijin1984): $(this).animate() does not work, why?
        $(this).css("background", "lightgreen");
        setTimeout(function () {
            $("td").css("background", "none");
        }, 300);

        if ($(this).text() == getTargetDigit()) {
            audio.currentTime = 0;
            audio.play();
        }
    });


    $("#shuf").click();  // Shuffle on loading.
});