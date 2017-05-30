$(document).ready(function() {
    $('#photoSlider').lightSlider({
        item: 1,
        cssEasing: 'ease-in-out',
        loop: true,
        auto: true,
        pager: true
    });


    $('#testimon').lightSlider({
        item: 2,
        cssEasing: 'ease-in-out',
        prevHtml: '<h1><</h1>',
        nextHtml: '<h1>></h1>',
        pager: false,
        auto: false,
        loop: true,
        pauseOnHover: true,
        pause: 4000,
        responsive: [{
            breakpoint: 800,
            settings: {
                item: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                item: 1
            }
        }]
    });

    $("#locations").lightGallery({
        download: false,
        galleryId: 1
    });
    $("#inbox").lightGallery({
        download: false,
        galleryId: 2
    });



    $("#header-order-button, #mainoffer-order-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#order-form").offset().top
        }, 1400);
    });



    // HEADER FADE-IN
    var distance = $('.aboutit h1').offset().top,
        $window = $(window);

    $('.header').addClass('hidden');
    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            $('.header').addClass('visible');
            $('.header').removeClass('hidden');
        } else {
            $('.header').addClass('hidden');
            $('.header').removeClass('visible');

        }
    });

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


    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    var modalCheck = function() {
        $(".modal_result").text("");

        var demo_email = $("#modal_demo_email").val();

        var feed_email = $("#modal_feed_email").val();
        var feed_name = $("#mofal_feed_name").val();
        var feed_message = $("#modal_feed_message").val();


        if (validateEmail(demo_email)) {
            $(".modal_result_demo").text("Ссылка на установочный файл выслана!").css("color", "green");
            $(".modal_send").addClass('modal_button_hidden');

            let dataString = 'demo_email=' + demo_email;

            $.ajax({
                type: "POST",
                url: "mail-demo.php",
                data: dataString,
                success: function() {
                    console.log('Sent demo')
                }
            });
        } else if (validateEmail(feed_email)) {
            $(".modal_result_feed").text("Ваше сообщение отправлено!").css("color", "green");
            $(".modal_send").addClass('modal_button_hidden');

            let dataString = 'feed_email=' + feed_email + '&feed_name=' + feed_name + '&feed_message=' + feed_message;

            $.ajax({
                type: "POST",
                url: "mail-feed.php",
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

    $("#modal_demo_send").on("click", modalCheck);
    $("#modal_feed_send").on("click", modalCheck);


    // demo sender =>


});
