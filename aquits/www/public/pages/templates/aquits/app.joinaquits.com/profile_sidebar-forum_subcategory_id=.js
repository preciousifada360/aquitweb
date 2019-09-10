
follow_sum = parseInt("11");
$('.secondary_menu_hover[data-filter=submenu-item-following]').find('.menu-count').remove();
$('[data-menu-title=community]').find('.sidebar-notification').remove();
if (follow_sum > 0){
  $('.secondary_menu_hover[data-filter=submenu-item-following]').append('<div class="menu-count">' + follow_sum + '</div>');
  $('[data-menu-title=community]').append('<div class="sidebar-notification">' + follow_sum + '</div>');
}
