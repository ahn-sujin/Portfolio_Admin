$(function(){

    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

//gnb
    $('#gnb>li>a').off('click');
    $('#gnb>li>a').on('click',function(){
        $('.submenu').stop().slideUp();
        $(this).next('.submenu').stop().slideToggle();
    });

    $('.toggle').on('click',function(){
        $('#header , #nav, #main, #login').toggleClass('on');
    });

//datepicker
    $('#date1').datepicker();
    $('#date2').datepicker();
    setDatePickerBtn('.date1');
    setDatePickerBtn('.date2');
    function setDatePickerBtn(selector){
        $(selector).on('click',function(){
            $(this).prev().focus();
        });
    }
    

    



});