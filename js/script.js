$(function () {
  // Portfolio, 탭메뉴 변수
  const $tabMenu = $('.tab-menu > li');
  const $tabcontent = $('.tab-con');

  // s : Portfolio 탭메뉴 설정
  // 초기 세팅
  tabAction(0);

  // 탭메뉴를 클릭했을 때
  $tabMenu.on('click', function () {
    let idx = $(this).index();

    tabAction(idx);
  });

  // 함수 정의
  function tabAction(index) {
    $tabMenu.removeClass('on');
    $tabMenu.eq(index).addClass('on');

    // $tabcontent.hide();
    $tabcontent.addClass('hide');
    $tabcontent.eq(index).removeClass('hide');
  }
  // e : Portfolio 탭메뉴 설정

  // about, 스와이퍼
  const interviewsSwiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    autoplay: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
  });
});
