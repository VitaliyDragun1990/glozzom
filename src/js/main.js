$(function () {
    // Auto play model video
    $(".video").click(function () {
        var theModal = $(this).data("target"),
            videoSrc = $(this).attr("data-video"),
            videoSRCauto = videoSrc +
                '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSrc);
        });
    });
});

// implement lightbox gallery
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
   event.preventDefault();
   $(this).ekkoLightbox();
});

$('.slider').slick({
   infinite: true,
   slidesToShow:1,
   slidesToScroll:1
});