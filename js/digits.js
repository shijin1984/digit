$(function () {
    var audio = new Audio("audio/praise.mp3");
    audio.autoplay = false;

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
    });

    $("td").click(function () {
        // TODO(shijin1984): $(this).animate() does not work, why?
        $(this).css("background", "lightgreen");
        setTimeout(function () {
            $("td").css("background", "none");
        }, 300);

        if ($(this).text() == "1") {
            audio.currentTime = 0;
            audio.play();
        }
    });
});