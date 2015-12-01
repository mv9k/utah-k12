/**
 * Created by kris on 11/20/15.
 */
var correct=0;
// checks for submit button click
$('document').ready(function(){
   $('#results').on('click', function(){
       checkAnswers();
   })
});
// variables for radio button values
$('input').change(function() {
        q1 = $('input:radio[name="q1"]:checked').val(),
        q2 = $('input:radio[name="q2"]:checked').val(),
        q3 = $('input:radio[name="q3"]:checked').val(),
        q4 = $('input:radio[name="q4"]:checked').val(),
        q5 = $('input:radio[name="q5"]:checked').val(),
        q6 = $('input:radio[name="q6"]:checked').val();
});

// function that checks answers, taking in the values of each questions radio button selection.
function checkAnswers() {
    // For each question, if the answer is correct, display green styling on question, if wrong then show red styling and correct answer for question.
    // hig = hilight green, hir = hilight red
    if (q1 == 'a') {
        $('#question1').addClass('hig');
        correct++;
    }
    if (q1 != 'a') {
        $('#question1').addClass('hir');
    }
    if (q2 == 'b') {
        $('#question2').addClass('hig');
        correct++;
    }
    if (q2 != 'b') {
        $('#question2').addClass('hir');
    }
    if (q3 == 'c') {
        $('#question3').addClass('hig');
        correct++;
    }
    if (q3 != 'c') {
        $('#question3').addClass('hir');
    }
    if (q4 == 'd') {
        $('#question4').addClass('hig');
        correct++;
    }
    if (q4 != 'd') {
        $('#question4').addClass('hir');
    }
    if (q5 == 'a') {
        $('#question5').addClass('hig');
        correct++;
    }
    if (q5 != 'a') {
        $('#question5').addClass('hir');
    }
    if (q6 == 'b') {
        $('#question6').addClass('hig');
        correct++;
    }
    if (q6 != 'b') {
        $('#question6').addClass('hir');
    }
    $('.hig').css({'padding':'10px', 'border':'1px solid #00A2FC'});
    $('.displayAnswer').show();
    $('body').append('<div><h1>You answered ' + correct + ' correctly!</h1></div>')
}
