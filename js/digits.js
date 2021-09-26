$(function() {
    $("#shuf").click(function() {
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
});