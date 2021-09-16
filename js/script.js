$(function () {

    //Change style of navbar
    $(window).on("scroll", function () {
        let navOffset = $('nav').offset().top;
        let wScroll = $(window).scrollTop();
        if (wScroll = navOffset) {
            $('nav').css("backgroundColor", "rgba(20,20,20,1)")
        }
        else {
            $('nav').css("backgroundColor", "transparent")
        }
    });

    //To show movie box when i hover in the movie's photo
    $('.image').each(function () {
        $(this).on("mouseenter", () => {
            $(this).parent().children().eq(1).fadeIn(500);
        })
        $(".title").on("mouseleave", function () {
            $(this).fadeOut(300);
        })
    });

    //Slick Plugin
    $('.slider-top').slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });

    //Open info box when i click on info icon
    $('#info-icon').on('click', function () {
        // $('#info_container').css('display', 'block');
        $('#info_container').fadeIn(500)
        $('html').css('overflow', 'hidden')
    })

    //Close info box when i click on close icon
    $('#close').on('click', function () {
        // $('#info_container').css('display', 'none');
        $('#info_container').fadeOut(500)
        $('html').css({ 'overflow-y': 'auto', 'overflow-x': 'hidden' })
    })

    //Close info box when i click on any where in window
    $(window).on('click', function (event) {
        if (event.target == info_container) {
            // $('#info_container').css('display', 'none');
            $('#info_container').fadeOut(500)
            $('html').css({ 'overflow-y': 'auto', 'overflow-x': 'hidden' })
        }
    })

    // Flipping between The seasons
    $('.season_one').show();
    $('.season_two').hide();
    $('.season_three').hide();
    $('.season_four').hide();
    $('.season_five').hide();
    $('.btn').on('click', function () {
        let value = $(this).attr('data-filter');
        if (value == '.season_one') {
            $('.season_one').fadeIn(500).show();
            $('.seasons').not('.' + value).fadeOut(500).hide();
        }
        else {
            $('.seasons').filter('.' + value).fadeIn(500).show();
            $('.seasons').not('.' + value).fadeOut(500).hide();
        }
    })

    // Icon To Top 
    $(window).on('scroll', function () {
        let headerOffset = $('header').innerHeight();
        let windowScroll = $(window).scrollTop();
        if (windowScroll > headerOffset) {
            $('.to_top').fadeIn(500);
        }
        else {
            $('.to_top').fadeOut(500);
        }
    })
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 2000)
    })
})

// ====== To get the first and last name from localStorage and put it into name list=======
let firstName = localStorage.getItem("firstName");
let lastName = localStorage.getItem("lastName");
let nameList = document.getElementById('name');
nameList.innerHTML = firstName + " " + lastName;
// ===== To clear localStorage and go back to sign in page=======
function logout() {
    localStorage.clear();
    document.getElementById('logout').setAttribute('href', 'login/login.html')
}