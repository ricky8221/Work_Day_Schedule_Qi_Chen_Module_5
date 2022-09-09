$(document).ready(function(){

$(".saveBtn").on('click', function(){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);

    $('notification').addClass('show')

    setTimeout(function(){

        $('.notification').removeClass('show')

    }, 5000);
})

function hrUpdate(){

    var currentHour = parseInt(moment().format('H'));
    

    $('.time-block').each(function(){

        var blockHour = $(this).attr("id");
        if(blockHour < currentHour){
            $(this).addClass("past");
        }
        else if(blockHour == currentHour){
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        else{
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }

    })
}




hrUpdate()

var interval = setInterval(hrUpdate, 15000)

$('#hr-9 .description').val(localStorage.getItem("hr-9"))
$('#hr-10 .description').val(localStorage.getItem("hr-10"))
$('#hr-11 .description').val(localStorage.getItem("hr-11"))
$('#hr-12 .description').val(localStorage.getItem("hr-12"))
$('#hr-13 .description').val(localStorage.getItem("hr-13"))
$('#hr-14 .description').val(localStorage.getItem("hr-14"))
$('#hr-15 .description').val(localStorage.getItem("hr-15"))
$('#hr-16 .description').val(localStorage.getItem("hr-16"))
$('#hr-17 .description').val(localStorage.getItem("hr-17"))

})

$('#currentDay').text(moment().format('hh:mm:ss ,dddd, MMMM Do, YYYY'));