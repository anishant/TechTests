var noOfOptions = 0;
var qnType = 1;
// zero represents para type
// one represents single choice type
// two repesents multi choice type
var Test = [];
var CurrentQuestion = {
    qnText : "",
    type : -1,
    options : []
};
jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
    $(".CreationNav").on('click',function(e) {
        $(e.target).parent.addClass('active');
    });
});
jQuery(document).ready(function($) {
    $("#btnAddOption").click(function() {
        // adding an option
        noOfOptions += 1;
        var sa1 = $('<div>').addClass('row').attr('id','Opt'+noOfOptions).css({'margin-top':'15px'});
        var sa2 = $('<div>').addClass('col-sm-1').html(noOfOptions+'.');
        var sa3 = $('<div>').addClass('col-sm-9');
        var sa4 = $('<input>').addClass('form-control optionInput').attr({placeholder:'Option',type:'text',value:''});
        var sa5 = $('<div>').addClass('col-sm-1');
        var sa6 = $('<button>').addClass('btn btn-default').attr('type','button').on('click',function(e){
            $(e.target).parents('.row')[0].remove();
        });
        var sa7 = $('<span>').addClass('glyphicon glyphicon-remove');
        sa6.append(sa7);
        sa5.append(sa6);
        sa3.append(sa4);
        sa1.append(sa2).append(sa3);
        sa1.append(sa5);
        $('#OptHolder').append(sa1);
        // $('#btnAddQuestion').click(Addition);
    });
    $("#btnClearOption").click(function() {
        clearOptions();
    });
    $("#btnAddQuestion").click(function Addition() {
        CurrentQuestion.qnText = $('#foo').val();
        CurrentQuestion.type = qnType;
        if (qnType != 0) {
            $("input").each(function(index, element) {
                if ($(element).hasClass("optionInput")) {
                    var temp = $(element).val();
                    CurrentQuestion.options.push(temp);
                }
            });
        }
        Test.push(CurrentQuestion);
        console.log("mera variable " + Test.length);
        var sa1 = $('<a>').addClass('list-group-item').attr('href','#');
        var sa2 = $('<dl>');
        var sa3 = $('<dt>').html('Q. '+CurrentQuestion.qnText);
        var sa4 = $('<dd>');
        var sa5 = $('<em>');
        var sa6 = $('<ul>');
        var sa = [];
        var sa7 = $('<li>');
        if(qnType == 0)
            sa5.html('Paragraph Type Question');
        else if (qnType == 1)
            sa5.html('Single Option Correct');
        else if (qnType == 2)
            sa5.html('Multiple Options Correct');
        if (qnType != 0) {
            var i = 0;
            for(i = 0; i < CurrentQuestion.options.length; i++) {
                sa.push($('<li>'));
                sa[i].html(CurrentQuestion.options[i]);
                console.log(sa[i].html());
                sa6.append(sa[i]);
            }
        }
        sa2.append(sa3);
        sa4.append(sa5);
        if (qnType != 0) sa4.append(sa6);
        sa2.append(sa4);
        sa1.append(sa2);
        $('#preparedQuestions').append(sa1);
        resetQuestion();
    });

    $("#btnResetQuestion").click(function() {
        resetQuestion();
    });

    function resetQuestion() {
        $('#foo').val('');
        // a.attr('value','Albus');
        // document.getElementById('foo').value = "";
        qnType = 1;
        clearOptions();
        chooseMCQ();
    };

    function clearOptions() {
        noOfOptions = 0;
        $('#OptHolder').empty();
    };

    function removeElement(elem_id) {
        $(elem_id).remove();
    }
});

function choosePara() {
    document.getElementById("currentChoice").innerHTML = "Paragraph";
    document.getElementById("ParagraphTypeDiv").className = "col-sm-9 collapse in";
    document.getElementById("OptionsDiv").className = "col-sm-9 collapse";
    qnType = 0;
}
function chooseMCQ() {
    document.getElementById("currentChoice").innerHTML = "Single Correct";
    document.getElementById("ParagraphTypeDiv").className = "col-sm-9 collapse";
    document.getElementById("OptionsDiv").className = "col-sm-9 collapse in";
    qnType = 1;
}
function chooseMulti() {
    document.getElementById("currentChoice").innerHTML = "Multiple Correct";
    document.getElementById("ParagraphTypeDiv").className = "col-sm-9 collapse";
    document.getElementById("OptionsDiv").className = "col-sm-9 collapse in";
    qnType = 2;
}
