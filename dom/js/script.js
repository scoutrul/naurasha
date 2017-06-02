$(document).ready(function() {


    var $window = $(window);
    //TIMER COUNTDOWN SHOW
    var container_offset = $('.order-section').offset().top;
    var countdown_offset = $('.countdown').offset().top;
    var countainer_h = $('.order-section').height();
    var countdown_h = $('#cta_countdown').height();

    // $('.countdown').css({ visibility: 'hidden' });

    // $window.scroll(function() {
    //     if ($window.scrollTop() <= countdown_offset - screen.height) {
    //         $('.countdown').css({ visibility: 'hidden' });

    //     } else {
    //         if ($window.scrollTop() < countdown_offset + countdown_h) {
    //             $('.countdown').css({ visibility: 'visible' });

    //         } else {
    //             $('.countdown').css({ visibility: 'hidden' });

    //         }
    //     }
    // });

    $(".header-order-button, #mainoffer-order-button").on('click', function() {
        $('body').animate({
            scrollTop: $("#order_anchor").offset().top
        }, 1400);
    });






    // MODAL
    var modals = {
        Reset: function() {
            $(".modal_result").text("");
            $("input, textarea").val('');
            $(".modal_result").text("")
        },
        error: function() {
            $(".modal_result").text("Не корректный ввод").css("color", "red")
        },
        validate_email: function(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    };

    $("#modal_demo_send").click(
        function() {
            $(".modal_result").text("")
            var demo_email = $("#modal_demo_email").val();
            var demo_name = $("#modal_demo_name").val();
            if (modals.validate_email(demo_email) && demo_name !== '') {
                let demo_data = 'demo_email=' + demo_email + '&demo_name=' + demo_name;
                $(".modal_send").addClass('modal_button_hidden');
                $(".modal_result_demo").text("Спасибо! Ссылка выслана на Ваш E-mail!").css("color", "green");

                $.ajax({
                    type: "POST",
                    url: "mail_demo.php",
                    data: demo_data,
                    success: function() {
                        console.log('Success!');
                    }
                });

            } else {
                modals.error();
            }
            return false;
        }
    );

    $("#modal_feed_send").click(function() {
        $(".modal_result").text("")
        var feed_email = $("#modal_feed_email").val();
        var feed_name = $("#modal_feed_name").val();
        var feed_message = $("#modal_feed_message").val();
        if (modals.validate_email(feed_email) && feed_name !== '' && feed_message !== '') {
            let feed_data = 'feed_email=' + feed_email + '&feed_name=' + feed_name + '&feed_message=' + feed_message;
            $(".modal_send").addClass('modal_button_hidden');
            $(".modal_result_feed").text("Спасибо за обращение! В ближайшее время (в будни с 10 до 18) наш менеджер свяжется с Вами.").css("color", "green");

            $.ajax({
                type: "POST",
                url: "mail_feed.php",
                data: feed_data,
                success: function() {
                    console.log('Success!');
                }
            });
        } else {
            modals.error();
        }
        return false;
    });

    $("#modal_order_send").click(function() {
        $(".order_result").text("")
        var order_email = $("#order_email").val();
        var order_name = $("#order_name").val();
        var order_message = $("#order_message").val();
        var order_phone = $("#order_phone").val();
        if (modals.validate_email(order_email)) {
            let phone = (order_phone !== '') ? '&order_phone=' + order_phone : '';
            let order_data = 'order_email=' + order_email + '&order_name=' + order_name + '&order_message=' + order_message + phone;
            $(".order_result").text("Спасибо за заказ! В ближайшее время (в будни с 10 до 18) наш менеджер свяжется с Вами.").css("color", "#fff236");
            $("#modal_order_send").hide();
            $.ajax({
                type: "POST",
                url: "mail_order.php",
                data: order_data,
                success: function() {
                    console.log('Success!');

                }
            });
        } else {
            modals.error();
            $(".order_result").text("Пожалуйста, введите номер телефона.").css("color", "white");
        }
        return false;
    });


    // demo sender =>

    // BUTTON DEMO SHOW/CLOSE MODAL WINDOW
    $('#mainoffer-demo-button, #modal_demo_close').click(function() {
        $('#modal_demo').toggleClass('modal_visible');
        $('#modal_demo').toggleClass('modal_hidden');
        $(".modal_send").removeClass('modal_button_hidden');
        modals.Reset();

    });
    // BUTTON FEED SHOW/CLOSE MODAL WINDOW
    $('#modal_feed_open, #modal_feed_close').click(function() {
        $('#modal_feed').toggleClass('modal_visible');
        $('#modal_feed').toggleClass('modal_hidden');
        $(".modal_send").removeClass('modal_button_hidden');
        modals.Reset();


    });

});
