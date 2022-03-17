$(".footer_page").load("footer.html");

/* header 變色 */
$(window).scroll(function() {
    if ($(this).scrollTop() > 500){ 
        $('header').addClass('whitebg');
    } else {
        $('header').removeClass('whitebg');
    }
});
/* hamburger  */
$('.burger_btn').click(function(event){
    console.log("????");
    event.stopPropagation();
    
    $('.nav2').slideToggle(300);
    $('.bun').slideToggle(100);
})

/* 回頂部 */
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".gotop").fadeIn();
  } else {
    $(".gotop").fadeOut();
  }
});
$(".gotop").click(function () {
  $(".body, html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});
