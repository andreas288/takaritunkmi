jQuery(document).ready(function() {
    // accordion
    jQuery('.accordion-box .acc-content').hide();
    jQuery('.accordion-box h2:first').addClass('active').next().show();
    jQuery('.accordion-box h2').click(function() {
        if (jQuery(this).next().is(':hidden')) {
            jQuery('.accordion-box h2').removeClass('active').next().slideUp();
            jQuery(this).toggleClass('active').next().slideDown();
        }
        return false; // Prevent the browser jump to the link anchor
    });

    // Tabs
    jQuery('ul.tabs > br').remove();
    jQuery('.tabs-wrapper').append(jQuery('.tabs li div'));
    jQuery('.tabs li:first a').addClass('defaulttab selected');
    jQuery('.tabs a').click(function() {
        switch_tabs(jQuery(this));
    });
    switch_tabs(jQuery('.defaulttab'));

    function switch_tabs(obj) {
        jQuery('.tab-content').hide();
        jQuery('.tabs a').removeClass("selected");
        var id = obj.attr("rel");
        jQuery('#' + id).show();
        obj.addClass("selected");
    }
});

// Content Toggle
jQuery(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find(".toggle-title");
        links.on(
            "click", {
                el: this.el,
                multiple: this.multiple
            },
            this.dropdown
        );
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        ($this = jQuery(this)), ($next = $this.next());

        $next.slideToggle();
        $this.parent().toggleClass("open");

        if (!e.data.multiple) {
            $el
                .find(".toggle-content")
                .not($next)
                .slideUp()
                .parent()
                .removeClass("open");
        }
    };
    var accordion = new Accordion(jQuery(".toggle-container"), false);
});


// NAVIGATION CALLBACK
var ww = jQuery(window).width();
jQuery(document).ready(function() {
    jQuery(".sitenav li a").each(function() {
        if (jQuery(this).next().length > 0) {
            jQuery(this).addClass("parent");
        };
    })
    jQuery(".toggleMenu").click(function(e) {
        e.preventDefault();
        jQuery(this).toggleClass("active");
        jQuery(".sitenav").slideToggle('fast');
    });
    adjustMenu();
})

// navigation orientation resize callbak
jQuery(window).bind('resize orientationchange', function() {
    ww = jQuery(window).width();
    adjustMenu();
});

var adjustMenu = function() {
    if (ww < 991) {
        jQuery(".toggleMenu").css("display", "block");
        if (!jQuery(".toggleMenu").hasClass("active")) {
            jQuery(".sitenav").hide();
        } else {
            jQuery(".sitenav").show();
        }
        jQuery(".sitenav li").unbind('mouseenter mouseleave');
    } else {
        jQuery(".toggleMenu").css("display", "none");
        jQuery(".sitenav").show();
        jQuery(".sitenav li").removeClass("hover");
        jQuery(".sitenav li a").unbind('click');
        jQuery(".sitenav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
            jQuery(this).toggleClass('hover');
        });
    }
}

jQuery(document).ready(function() {
    jQuery(this).find('.sitenav li ul').parent().addClass('has-sub');
    jQuery(this).find(".has-sub").prepend('<span class="submenu-button"></span>');
    jQuery(this).find('.submenu-button').on('click', function() {
        jQuery(this).toggleClass('submenu-opened');
        if (jQuery(this).siblings('ul').hasClass('open')) {
            jQuery(this).siblings('ul').removeClass('open').slideToggle();
        } else {
            jQuery(this).siblings('ul').addClass('open').slideToggle();
        }
    });
    if (jQuery(window).width() > 990) {
        jQuery(this).find('ul li ul').show();
    }
    if (jQuery(window).width() <= 990) {
        jQuery(this).find('ul li ul').hide();
    }
});

// Toggle Topbar
jQuery(document).ready(function() {
    jQuery('.tp-head-toggle').click(function() {
        jQuery('.top-header').slideToggle('slow');
    });
});

// skill bar script
jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});

jQuery(document).ready(function() {
    // hide #back-top first
    jQuery("#back-top").hide();
    // fade in #back-top
    jQuery(function() {
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 50) {
                jQuery('#back-top').fadeIn();
            } else {
                jQuery('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        jQuery('#back-top').click(function() {
            jQuery('body,html').animate({
                scrollTop: 00
            }, 800);
            return false;
        });
    });

});

//Counter jquery
jQuery(document).ready(function() {
    jQuery('.counter').counterUp({
        delay: 20,
        time: 5000
    });
});

// Remove empty p tag
jQuery(document).ready(function() {
    jQuery('p:empty').remove();
});

//Fancybox
jQuery(document).ready(function() {
    jQuery('.pop-gallery').fancybox({
        loop: true,
        protect: true,
        thumbs: {
            autoStart: true, // Display thumbnails on opening
            hideOnClose: true, // Hide thumbnail grid when closing animation starts
            parentEl: '.fancybox-container', // Container is injected into this element
            axis: 'y' // Vertical (y) or horizontal (x) scrolling
        },
        transitionEffect: "zoom-in-out",
        transitionDuration: 1000,
    });
    jQuery('.port-gallery').fancybox({
        loop: true,
        protect: true,
        thumbs: {
            autoStart: true, // Display thumbnails on opening
            hideOnClose: true, // Hide thumbnail grid when closing animation starts
            parentEl: '.fancybox-container', // Container is injected into this element
            axis: 'y' // Vertical (y) or horizontal (x) scrolling
        },
        transitionEffect: "zoom-in-out",
        transitionDuration: 1000,
    });
    jQuery('[data-fancybox="images"]').fancybox({
        loop: true,
        protect: true,
        thumbs: {
            autoStart: true, // Display thumbnails on opening
            hideOnClose: true, // Hide thumbnail grid when closing animation starts
            parentEl: '.fancybox-container', // Container is injected into this element
            axis: 'y' // Vertical (y) or horizontal (x) scrolling
        },
        transitionEffect: "zoom-in-out",
        transitionDuration: 1000,
    });
});

// Testimonials
jQuery(document).ready(function() {
    var owl = jQuery('.clienttestiminials');
    owl.owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: true,
        autoHeight: true,
        responsive: {
            0: {
                mouseDrag: false,
                touchDrag: true
            },
            768: {
                mouseDrag: false,
                touchDrag: true
            }
        }
    })
});

// Testimonials sidebar rotator
jQuery(document).ready(function() {
    var owl1 = jQuery('.quotes');
    owl1.owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: true
    })
});

// Client Logo Rotator
jQuery(document).ready(function() {
    var owl2 = jQuery('.partners');
    owl2.owlCarousel({
        items: 6,
        margin: 80,
        dots: false,
        nav: true,
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                mouseDrag: false,
                touchDrag: true
            },
            768: {
                items: 4,
                nav: false,
                mouseDrag: false,
                touchDrag: true
            },
            991: {
                items: 6,
                nav: false
            },
        }
    })
});

//Image Carousel / PORTFOLIO GALLERY
jQuery(document).ready(function() {
    var owl3 = jQuery('#image-slider');
    owl3.owlCarousel({
        items: 1,
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    })
});

// Extra Sliders
//Gallery Rotator
jQuery(document).ready(function() {
    var owl4 = jQuery('.gal-rotator');
    owl4.owlCarousel({
        margin: 25,
        center: true,
        dots: false,
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                mouseDrag: false,
                touchDrag: true
            },
            768: {
                items: 2,
                nav: true,
                mouseDrag: false,
                touchDrag: true
            },
            991: {
                items: 2,
                nav: true
            },
        }
    })
});
// Team Member Rotator
jQuery(document).ready(function() {
    var owl5 = jQuery('.team-rotator');
    owl5.owlCarousel({
        margin: 30,
        dots: true,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: false,
        responsive: {
            0: {
                items: 1,
                mouseDrag: false,
                touchDrag: true
            },
            768: {
                items: 2,
                mouseDrag: false,
                touchDrag: true
            },
            1024: {
                items: 4,
            },
        }
    })
});
// Latest News
jQuery(document).ready(function() {
    var owl6 = jQuery('.latestpost');
    owl6.owlCarousel({
        margin: 30,
        dots: false,
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                mouseDrag: false,
                touchDrag: true
            },
            768: {
                items: 2,
                nav: true,
                mouseDrag: true,
                touchDrag: false,
            },
            991: {
                items: 3,
                nav: true,
                mouseDrag: true,
                touchDrag: false,
            },
        }
    })
});

//Portfolio Rotator
jQuery(document).ready(function() {
    var owl7 = jQuery('.portf-rotator');
    owl7.owlCarousel({
        margin: 25,
        center: true,
        dots: false,
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                mouseDrag: false,
                touchDrag: true
            },
            768: {
                items: 2,
                nav: true,
                mouseDrag: false,
                touchDrag: true
            },
            991: {
                items: 3,
                nav: true
            },
        }
    })
});

// Add class to footer menu
jQuery(document).ready(function() {
    jQuery('#footer-wrapper .widget_nav_menu ul').addClass('footer-nav');
});

jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 300) {
        jQuery(".sticky-header").addClass("show");
    } else {
        jQuery(".sticky-header").removeClass("show");
    }
});
jQuery(document).ready(function() {
    window.onorientationchange = function() {
        window.location.reload();
    };
});