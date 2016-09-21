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

var words = [
  {text: "IoT", weight: 13},
  {text: "Reliance", weight: 10.5},
  {text: "SPIT", weight: 9.4},
  {text: "Contest", weight: 8},
  {text: "Win", weight: 6.2},
  {text: "Prizes", weight: 7},
  {text: "2017", weight: 5}
  /* ... */
];

$('#cloudTags').jQCloud(words,{
  height: 200
});