$(document).ready(function () {

    var $menu = $('.js-menu');
    var $btn = $menu.find('.js-menu-btn');
    var $list = $menu.find('.js-menu-list');
    var $item = $menu.find('.js-menu-item');

    $btn.on('click', function () {

        var active = $menu.hasClass('is-active');

        if (!active) {
            $menu.toggleClass('is-active');
            $list.slideToggle(500);
        } else {
            $list.slideToggle(500, function () {
                $menu.toggleClass('is-active');
            });
        }
    });

    $item.on('click', function() {
        var str = $(this).attr('data-link');
        $(window).scrollTo("#"+str, {
            offset: -85,
            duration: 500
        });

        $menu.toggleClass('is-active');
        $list.slideToggle(500);
    });
});