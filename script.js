$('.img-wrap img:nth-child(n+2)').hide();
      setInterval(function() {
        $(".img-wrap img:first-child").fadeOut(2000);
        $(".img-wrap img:nth-child(2)").fadeIn(2000);
        $(".img-wrap img:first-child").appendTo(".img-wrap");
      }, 4000);
;

$('#fadeout').fadeIn(3000, function () {
    $(this).delay(5000).fadeOut("slow");
  });
