console.log('script work!');

$('.contacts-tab-link').on('click', function (e) {
  e.preventDefault();

  let index = $(this).index('.contacts-tab-link');

  $('.contacts-tab-link').removeClass('active');
  $(this).addClass('active');

  $('.contacts-content').removeClass('active');
  $('.contacts-content').eq(index).addClass('active');
});
