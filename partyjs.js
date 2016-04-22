/*** Created by h205p3 on 3/17/16.*/
$(document).ready( function() {
    grade= "";
    sex= "";
    alc= "";
    smallschool= "";
    $('#disclaimer').click( function() {
        $('.note').toggleClass('hide');
    });
    $('#soph').click( function() {
        grade = "sophomore";
        $(this).addClass('clicked');
        $('#bowdown').removeClass('clicked');
        $('#burnt').removeClass('clicked');
    });
    $('#burnt').click( function() {
        grade = "junior";
        $(this).addClass('clicked');
        $('#bowdown').removeClass('clicked');
        $('#soph').removeClass('clicked');
    });
    $('#bowdown').click( function() {
        grade = "senior";
        $(this).addClass('clicked');
        $('#burnt').removeClass('clicked');
        $('#soph').removeClass('clicked');
    });
    $('#male').click( function() {
        sex = "male";
        $(this).addClass('clicked');
        $('#female').removeClass('clicked');
    });
    $('#female').click( function() {
        sex = "female";
        $(this).addClass('clicked');
        $('#male').removeClass('clicked');
    });
    $('#yalc').click( function() {
        alc= "yes";
        $(this).addClass('clicked');
        $('#nalc').removeClass('clicked');
    });
    $('#nalc').click( function() {
        alc= "no";
        $(this).addClass('clicked');
        $('#yalc').removeClass('clicked');
        document.getElementById('go').innerHTML = '<a href="/rack.html">Go!</a>';
    });
    $('#ib').click( function() {
        smallschool= "ib";
        $(this).addClass('clicked');
        $('#is').removeClass('clicked');
        $('#ac').removeClass('clicked');
    });
    $('#ac').click( function() {
        smallschool= "ac";
        $(this).addClass('clicked');
        $('#ib').removeClass('clicked');
        $('#is').removeClass('clicked');
    });
    $('#is').click( function() {
        smallschool= "is";
        $(this).addClass('clicked');
        $('#ac').removeClass('clicked');
        $('#ib').removeClass('clicked');
    });

    var compile = function(me){
        var code = "";
        var grade = me[0];
        var sex = me[1];
        var alc = me[2];
        var smallschool = me[3];
        if (grade === "sophomore") {
            if (sex === "male") {
                code = 'beginningboy.html';
            }
            else {
                code = 'beginninggirl.html';
            }
        }
        else if (grade === "junior") {
                if (smallschool === "ib") {
                    if (sex === "male") {
                        code = 'beginningibboy.html';
                    }
                    else {
                        code = 'beginningibgirl.html';
                    }
                }
                else {
                    if (sex === "male") {
                        code = 'beginningboy.html';
                    }
                    else {
                        code = 'beginninggirl.html';
                    }
                }
            }
        else {
                if (sex === "female") {
                    code = 'seniorgirl.html';
                }
                else {
                    code = 'seniorboy.html';
                }
            }
        return code;
    };
    $('#create').click( function() {
        me = [grade, sex, alc, smallschool];
        $('#next').removeClass('hide');
        document.getElementById('next').innerHTML = '<a href="beginning/' + compile(me) + '">Continue</a>'
    });
});

