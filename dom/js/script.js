$(document).ready(function() {


         $("#header-order-button, #mainoffer-order-button").on('click', function() {
            $('body').animate({
                scrollTop: $("#order_anchor").offset().top
            }, 1400);
        });

        // BUTTON DEMO SHOW/CLOSE MODAL WINDOW
        $('#mainoffer-demo-button, #modal_demo_close').on('click', function() {
            FORMS.modal_demo_toggle()
        });
        // BUTTON FEED SHOW/CLOSE MODAL WINDOW
        $('#modal_feed_open, #modal_feed_close').on('click', function() {
            FORMS.modal_feed_toggle()
        });

        // MODAL
        var FORMS = {
            RESET: function() {
                $(".modal_result").text("");
                $("input, textarea").val('');
                $(".modal_result").text("");
                $(".modal_send").removeClass('modal_button_hidden');
            },
            ERROR: function() {
                $(".modal_result").text("Ошибочный ввод").css("color", "red")
            },
            VALIDATE_EMAIL: function(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            modal_feed_toggle: function() {
                event.preventDefault()
                $('#modal_feed').toggleClass('modal_visible').toggleClass('modal_hidden');
                this.RESET();

            },
            modal_demo_toggle: function() {

                $('#modal_demo').toggleClass('modal_visible').toggleClass('modal_hidden');
                this.RESET();
            }
        }

        $("#modal_demo_send").click(function() {

            $(".modal_result").text("")
            var demo_email = $("#modal_demo_email").val();
            var demo_name = $("#modal_demo_name").val();
            if (FORMS.VALIDATE_EMAIL(demo_email) && demo_name !== '') {
                var demo_data = 'demo_email=' + demo_email + '&demo_name=' + demo_name;
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
                FORMS.ERROR();
            }
            return false;
        });

        $("#modal_feed_send").click(function() {
            $(".modal_result").text("")
            var feed_email = $("#modal_feed_email").val();
            var feed_name = $("#modal_feed_name").val();
            var feed_message = $("#modal_feed_message").val();
            if (FORMS.VALIDATE_EMAIL(feed_email) && feed_name !== '' && feed_message !== '') {
                var feed_data = 'feed_email=' + feed_email + '&feed_name=' + feed_name + '&feed_message=' + feed_message;
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
                FORMS.ERROR();
            }
            return false;
        });

        $("#modal_order_send").click(function() {

            $(".order_result").text("")
            var order_email = $("#order_email").val();
            var order_name = $("#order_name").val();
            var order_message = $("#order_message").val();
            var order_phone = $("#order_phone").val();
            if (FORMS.VALIDATE_EMAIL(order_email)) {
                var phone = (order_phone !== '') ? '&order_phone=' + order_phone : '';
                var order_data = 'order_email=' + order_email + '&order_name=' + order_name + '&order_message=' + order_message + phone;
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
                FORMS.ERROR();
                $(".order_result").text("Пожалуйста, введите номер телефона.");
            }
            return false;
        });


    // popup ask question if user not active
    idleTimer = null;
    idleState = false;
    idleWait = 1000 * 500;

    $(document).on('mousemove keydown scroll', function() {
        clearTimeout(idleTimer);
        if (idleState == true) {
            // Действия на возвращение пользователя
            console.log('welcome back')
        }

        idleState = false;
        idleTimer = setTimeout(function() {
            // Действия на отсутствие пользователя

            $('#modal_feed').toggleClass('modal_visible').toggleClass('modal_hidden');
            FORMS.RESET();

            idleState = true;
        }, idleWait);
    });

});
