$('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 52
});
/* smooth scrolling sections */
$('a[href*=\\#]:not([href=\\#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 50
            }, 800);
            // activte animations in this section
            target.find('.animate').delay(1200).addClass("animated");
            setTimeout(function () {
                target.find('.animated').removeClass("animated");
            }, 2000);
            return false;
        }
    }
});

$('.carousel').carousel({
  interval: 2000
})