
var addStudent = document.getElementById('addStudent');

var addSubjects = document.getElementById('addSubjects');
var addSubjects1 = document.getElementById('addSubjects1');
var addSubjects2= document.getElementById('addSubjects2');

console.log(addStudent);
console.log(addSubjects[0]);

$(document).ready(function(){
    $('#a1').addClass('current');
    $('#addSubjects').remove();
    $('#addSubjects1').remove();
    $('#addSubjects2').remove();
})


$(function(){
    $('#a1').click(function(){
        $('#a2').removeClass('current');
        $('#a3').removeClass('current');
        $('#a4').removeClass('current');
        $('#a5').removeClass('current');
        $(this).addClass('current');
        $('#addSubjects').remove();
        $('#addSubjects1').remove();
        $('#addSubjects2').remove();

        $('.right-screen').append(addStudent);
        $('#addStudent').removeAttr('action');
        $('#addStudent').attr('action', '/quan-tri/cap-tai-khoan');


    });
});


$(function(){
    $('#a2').click(function(){
        $('#a1').removeClass('current');
        $('#a3').removeClass('current');
        $('#a4').removeClass('current');
        $('#a5').removeClass('current');
        $(this).addClass('current');
        $('#addSubjects').remove();
        $('#addSubjects1').remove();
        $('#addSubjects2').remove();

        $('.right-screen').append(addStudent);
        $('#addStudent').removeAttr('action');
        $('#addStudent').attr('action', '/quan-tri/du-dieu-kien');
    });
});

$(function(){
    $('#a3').click(function(){
        $('#a1').removeClass('current');
        $('#a2').removeClass('current');
        $('#a4').removeClass('current');
        $('#a5').removeClass('current');
        $(this).addClass('current');
        $('#addSubjects').remove();
        $('#addSubjects1').remove();
        $('#addSubjects2').remove();
        $('.right-screen').append(addStudent);
        $('#addStudent').removeAttr('action');
        $('#addStudent').attr('action', '/quan-tri/khong-du-dieu-kien');

    });
});

$(function(){
    $('#a4').click(function(){
        $('#a1').removeClass('current');
        $('#a2').removeClass('current');
        $('#a3').removeClass('current');
        $('#a5').removeClass('current');
        $(this).addClass('current');

        $('#addStudent').remove();
        $('.right-screen').append(addSubjects);
        $('.right-screen').append(addSubjects1);
        $('.right-screen').append(addSubjects2);
        // $('.right-screen').append(addSubjects[1]);
        // $('.right-screen').append(addSubjects[2]);

        $.ajax({
            url : "quan-tri/danh-sach-hoc-phan",
            type : "post",
            dataType:"text",
            data :{
                code :  $('#inputEmail').val(),
                name :  $('#inputPassword').val()
            },
            success : function (result){
                // $('.right-screen').append(result);

                console.log(result);
            }
        });
    });
});

$(function(){
    $('#a5').click(function(){
        $('#a1').removeClass('current');
        $('#a2').removeClass('current');
        $('#a3').removeClass('current');
        $('#a4').removeClass('current');
        $(this).addClass('current');

        $('#addStudent').remove();
        $('.right-screen').append(addSubjects);
        $('.right-screen').append(addSubjects1);
        $('.right-screen').append(addSubjects2);
 
        // $('.right-screen').append(addSubjects[0]);
        // $('.right-screen').append(addSubjects[1]);
        // $('.right-screen').append(addSubjects[2]);
        
        $.ajax({
            url : "quan-tri/quan-ly-ca-thi",
            type : "post",
            dataType:"text",
            success : function (result){
                // $('.right-screen').append(result);
                //console.log(result);

            }
        });


    });
});
