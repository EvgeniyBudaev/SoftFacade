$(function () {
  // Tabs
  $('.categories__tabs .tab, .settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.categories__tabs, .settings__tabs').find('.tab__item').removeClass('active-tab').hide();
    $('.categories__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

// Sidebar
  $("ul.main-menu li").click(function (e) {
    e.preventDefault();

    if ($(this).siblings("li").find("ul.sidebar__submenu:visible").length) {
      $("ul.sidebar__submenu").slideUp("normal");
    }
    $(this).find("ul.sidebar__submenu").slideToggle("normal");
  });

  var t1 = new TimelineMax({paused: true});

  t1.to(".menu", 0.3, {
    autoAlpha: 1,
  });

  t1.staggerFrom(
    ".main-menu li a:not(.sidebar__submenu li a)",
    1,
    {
      opacity: 0,
      y: 10,
      ease: Power3.easeInOut,
    },
    0.1
  );

  t1.from(".sidebar__submenu", 0.3, {
    autoAlpha: 0,
  });

  t1.reverse();

  $(document).on("click", ".menu-btn", function () {
    t1.reversed(!t1.reversed());
  });

  $(document).on("click", ".close-menu", function () {
    t1.reversed(!t1.reversed());
  });

  // Hamburger
  $(".hamburger").click(function () {
    $(this).toggleClass("on");
    $(".header__top-inner").toggleClass("on");
    $(".header__logo").toggleClass("off");
    $(".hamburger__span").toggleClass("on");
    $(".header__top").toggleClass("off");
  });

  // Sticky scroll header
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header__top-inner");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Scroll reveal
  window.sr = ScrollReveal();

  sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '15rem',
    delay: 300
  });

  sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '15rem',
    delay: 300
  });

  sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '15rem',
    delay: 300
  });

  sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '15rem',
    delay: 300
  });

});


