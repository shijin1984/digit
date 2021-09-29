var digits_config {};

$(function () {
    var audio = new Audio("audio/praise.mp3");
    audio.autoplay = false;
    var fontCollection = [
        "cursive", "emoji", "monospace", "serif", "sans-serif", "Verdana",
        "Comic Sans MS"];
    var urlParams = new URLSearchParams(window.location.search);

    var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (urlParams.has("digits")) {
        var digitStr = urlParams.get("digits");
        digits = digitStr.split();
    }
    digits_config = {
        audio: audio,
        fontCollection: fontCollection,
        digits: digits
    };

    digits_config.digits.forEach(function(num) {
        $("#tgt").append($("<option/>", {text: num, value: num, class: "tgt_drop"}));
    });
    $("#tgt").val(digits_config.digits[0]);

    var getTargetDigit = function() {
        return $("#tgt").val();
    };

    var randomSelect = function (array) {
        var index = Math.floor(Math.random() * array.length);
        return array[index];
    };

    $("#shuf").click(function () {
        var num = digits_config.digits.slice();
        for (var i = 0; i < num.length; ++i) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = num[i];
            num[i] = num[j];
            num[j] = tmp;
        }

        for (var i = 0; i < num.length; ++i) {
            $("td").eq(i).text(num[i]);
        }

        $("td").css("font-family", randomSelect(digits_config.fontCollection));
    });

    $("td").click(function () {
        // TODO(shijin1984): $(this).animate() does not work, why?
        $(this).css("background", "lightgreen");
        setTimeout(function () {
            $("td").css("background", "none");
        }, 300);

        if ($(this).text() == getTargetDigit()) {
            // The kids can tap repeatedly, replay only if the audio is not playing.
            if (audio.paused || audio.ended) {
                audio.currentTime = 0;
                audio.play();
            }
        }
    });


    $("#shuf").click();  // Shuffle on loading.
});