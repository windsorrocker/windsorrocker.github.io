function include(file) {
    let script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* Include Many js files */
include('/static/js/wr0100.js');
include('https://images.cart-shed.com/static/js/canvas_view.min.js');
include('https://images.cart-shed.com/static/js/gallery_view.min.js');

/* setup zoomer */
QU.whenReady(function() {

     // Zoomer/gallery options and events
     var viewer_opts = { showcontrols: 'yes' };
     var gallery_opts = { viewer: viewer_opts };
     var events = {};

     // Init image zoomer/gallery
     if (document.getElementsByClassName('gallery_image').length > 1) {
         gallery_view_init_all_fullscreen('gallery_image', gallery_opts, events);
     }
     else {
         canvas_view_init_all_images('gallery_image', viewer_opts, events);
     }
 });

function ready(fn) {
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState === 'interactive')
                fn();
        });
    }
}

ready(function() {

    if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
        /* browser with either Touch Events of Pointer Events running on touch-capable device */
        var b = document.getElementsByTagName('body');
        if (b.length > 0) {
            if (b[0].classList) {
                b[0].classList.add('touch');
            } else {
                b[0].className += ' ' + 'touch';
                 }
        }
        wrAddEventListener(document.getElementById('show_nav'), 'click', show_nav);
        wrAddEventListener(document.getElementById('show_nav'), 'touchend', show_nav);
    } else {
        wrAddEventListener(document.getElementById('show_nav'), 'click', show_nav);
        wrAddEventListener(document.getElementById('show_nav'), 'touchend', show_nav);
    }
});

