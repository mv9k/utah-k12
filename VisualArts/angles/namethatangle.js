var numRight = 0;

var a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0;

function Answer() {
    var input1 = $('#input1').val();
    var input2 = $('#input2').val();
    var input3 = $('#input3').val();
    var input4 = $('#input4').val();
    var input5 = $('#input5').val();
    var input6 = $('#input6').val();

    if (input1 === "right") {
        a1 = 1;
    } else {
        a1 = 0;
    }
    if (input2 === "acute") {
        a2 = 1;
    } else {
        a2 = 0;
    }
    if (input3 === "obtuse") {
        a3 = 1;
    } else {
        a3 = 0;
    }
    if (input4 === "acute") {
        a4 = 1;
    } else {
        a4 = 0;
    }
    if (input5 === "obtuse") {
        a5 = 1;
    } else {
        a5 = 0;
    }
    if (input6 === "right") {
        a6 = 1;
    } else {
        a6 = 0;
    }

    numRight = (a1+a2+a3+a4+a5+a6);
    $('#feedback').html('right: ' + numRight + '/ 6');

    if (numRight == 6) {
        $('#feedback').css('background-color', '#4EED5A');
    }
    if (numRight < 6) {
        $('#feedback').css('background-color', 'whitesmoke');
    }
}
window.setInterval(Answer(), 100);
