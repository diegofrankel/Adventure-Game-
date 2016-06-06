/*** Created by h205p3 on 3/17/16.*/
$(document).ready( function() {
    grade= "";
    sex= "";
    alc= "";
    smallschool= "";
    ride= "";
    rage1= "";
    getinrage1 = "";
    leaverage1= "";
    numdrinks= "";
    drinkcounter= "";
    friend= "";
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
    $('.rideA').click(function () {
        ride = "A";
        $(this).addClass("clicked");
        $('.rideB').removeClass('clicked');
        $('.rideC').removeClass('clicked');
    });
    $('.rideB').click(function () {
        ride = "B";
        $(this).addClass("clicked");
        $('.rideA').removeClass('clicked');
        $('.rideC').removeClass('clicked');
    });
    $('.rideC').click(function () {
        ride = "C";
        $(this).addClass("clicked");
        $('.rideA').removeClass('clicked');
        $('.rideB').removeClass('clicked');
    });
    $('#hopfence').click( function() {
        rage1 = "hopfence";
        var num = Math.random();
        if (num < 0.5) {
            getinrage1 = "no";
        }
        else {
            getinrage1 = "yes";
        }
        $(this).addClass('clicked');
        $('#paybouncer').removeClass('clicked');
    });
    $('#paybouncer').click( function() {
        rage1 = "paybouncer";
        getinrage1 = "yes";
        $(this).addClass('clicked');
        $('#hopfence').removeClass('clicked');
    });
    $('.getinchance').click(function() {
        if (getinrage1 === "no") {
            document.getElementById("bouncer").innerHTML = '<img src="../img/bouncerthrow.jpg"/>';
            document.getElementById("paybouncer").innerHTML="Slip the bouncer a $20, bc you fucked up";
            document.getElementById("cantgetin").innerHTML = "The bouncer caught you trying to hop the fence, you can either pay him double or cat. Don't be a cat";
            $('#hopfence').addClass('hide');
        }
        else if (getinrage1 === "yes") {
            this.innerHTML="<a href='../snakegame.html'>You made it</a>";
        }
    });
    $('#getoutfence').click( function() {
        var num = Math.random();
        if (num < 0.5) {
            leaveinrage1 = "no";
        }
        else {
            leaveinrage1 = "yes";
        }
        $(this).addClass('clicked');
        $('#getoutwalk').removeClass('clicked');
    });
    $('#getoutwalk').click( function() {
        leaverage1 = "yes";
        $(this).addClass('clicked');
        $('#getoutfence').removeClass('clicked');
    });
    $('.getoutchance').click(function() {
        endride = finalride();
        document.getElementById().innerHTML = "<a href='end/" + endride + ".html'>Continue</a>";
        if (leaveinrage1 === "yes") {
            var num = Math.random();
            if (ride = "rideA" && num < 0.7) {
                $('.getoutchance').innerHTML="<a href='rage2/arriverage2.html'>You made it</a>";
                $('.getoutchance').removeClass('getoutchance');
            }
            else if (ride = "rideB" && num < 0.5) {
                $('.getoutchance').innerHTML="<a href='rage2/arriverage2.html'>You made it</a>";
                $('.getoutchance').removeClass('getoutchance');
            }
            else if (ride= "rideC" && num < 0.3) {
                $('.getoutchance').innerHTML="<a href='rage2/arriverage2.html'>You made it</a>";
                $('.getoutchance').removeClass('getoutchance');
            }
            else {
                $('.getoutchance').innerHTML="<a href='../cat.html'>You made it (sorta)</a>";
                $('.getoutchance').removeClass('getoutchance');
            }
        }
        else {
            $('.getoutchance').innerHTML="<a href='arrested.html'>You didn't make it :(</a>";
            $('.getoutchance').removeClass('getoutchance');
        }
    });

    var finalride = function() {
        var endride= "";
        if (pong === "win") { //variable should be declared by kalia in game
            if (grade === "senior") {
                if (sex === "female") {
                    endride = "seniorgirlwin";
                }
                else {
                    endride = "seniorboywin";
                }
            }
            else {
                if (sex === "female") {
                    endride = "girlwin";
                }
                else {
                    endride = "boywin";
                }
            }
        }
        else {
            if(grade === "senior" ){
                if (sex === "female"){
                    endride = "seniorgirllose";
                }
                else {
                    endride = "seniorboylose";
                }
            }
            else {
                if (sex === "female"){
                    endride = "girllose";
                }
                else {
                    endride = "boylose";
                }
            }
        }
        return endride;
    };
});
