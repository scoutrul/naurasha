$(document).ready(function() {


    $("#header-order-button, #mainoffer-order-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#order-form").offset().top
        }, 1400);
    });



    //TIMER COUNTDOWN SHOW
    var container_offset = $('.order-section').offset().top;
    var countdown_offset = $('.countdown').offset().top;
    var countainer_h = $('.order-section').height();
    var countdown_h = $('#cta_countdown').height();

    $('.countdown').css({ visibility: 'hidden' });

    var $window = $(window);
    $window.scroll(function() {
        if ($window.scrollTop() <= countdown_offset - screen.height) {
            $('.countdown').css({ visibility: 'hidden' });

        } else {
            if ($window.scrollTop() < countdown_offset + countdown_h) {
                $('.countdown').css({ visibility: 'visible' });

            } else {
                $('.countdown').css({ visibility: 'hidden' });

            }
        }
    });
    // 
    

    // BUTTON DEMO SHOW MODAL WINDOW
    $('.mainoffer button.demo, #modal_demo_close').on('click', function() {
        $('#modal_demo').toggleClass('modal_visible');
        $('#modal_demo').toggleClass('modal_hidden');
        $(".modal_send").removeClass('modal_button_hidden');
        $(".modal_result").text("");
        $("#modal_demo_email, #modal_feed_email, #formFeedName, #formFeedMessage").val('');
    });
    // BUTTON FEED SHOW MODAL WINDOW
    $('#modal_feed_open, #modal_feed_close').on('click', function() {
        $('#modal_feed').toggleClass('modal_visible');
        $('#modal_feed').toggleClass('modal_hidden');
        $(".modal_send").removeClass('modal_button_hidden');
        $(".modal_result").text("");
        $("#modal_demo_email, #modal_feed_email, #formFeedName, #formFeedMessage").val('');

    });



        // reset modals
    // $("#modal_demo_send, #modal_feed_send").on('click', function() {
    //     $(".modal_result").text("");

    //     var demo_email = $("#modal_demo_email").val();

    //     var feed_email = $("#modal_feed_email").val();
    //     var feed_name = $("#modal_feed_name").val();
    //     var feed_message = $("#modal_feed_message").val();
    // })
            var demo_email = $("#modal_demo_email").val();
            var feed_email = $("#modal_feed_email").val();
            var feed_name = $("#modal_feed_name").val();
            var feed_message = $("#modal_feed_message").val();

    var modals = {
        reset: function(){
            $(".modal_result").text("");
        },
        validate_email: function(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        modal_demo_check: function() {
            modals.reset;

            if (modals.validate_email(demo_email)) {
                $(".modal_result_demo").text("Ссылка на установочный файл выслана!").css("color", "green");
                $(".modal_send").addClass('modal_button_hidden');

                let dataString = 'demo_email=' + demo_email;

                $.ajax({
                    type: "POST",
                    url: "#",
                    data: dataString,
                    success: function() {
                        console.log('Sent demo')
                    }
                });

            } else {
                $(".modal_result").text("Не корректный ввод").css("color", "red");
            }
            return false;
        },
        modal_feed_check: function() {
            modals.reset;

             if (modals.validate_email(feed_email)) {
                $(".modal_result_feed").text("Ваше сообщение отправлено!").css("color", "green");
                $(".modal_send").addClass('modal_button_hidden');

                let dataString = 'feed_email=' + feed_email + '&feed_name=' + feed_name + '&feed_message=' + feed_message;

                $.ajax({
                    type: "POST",
                    url: "#",
                    data: dataString,
                    success: function() {
                        console.log('Sent feed')
                    }
                });

            } else {
                $(".modal_result").text("Не корректный ввод").css("color", "red");
            }
            return false;
        }
    };



    $("#modal_demo_send").on("click", modals.modal_demo_check);
    $("#modal_feed_send").on("click", modals.modal_feed_check);


    // demo sender =>


});


 // "Спасибо за заказ! 
 // В ближайшее время* наш менеджер свяжется с вами. 
 // в будни с 10 до 18"