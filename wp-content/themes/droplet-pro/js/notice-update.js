jQuery(document).on( 'click', '.droplet-acf-notice .notice-dismiss', function() {

    jQuery.ajax({
        url: ajaxurl,
        data: {
            action: 'study_dismiss_acf_notice'
        }
    })

})