$(function() {

    var newHash      = "",
        $mainContent = $(".wrapper"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        $el;



    $(".section-info").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });

    $(window).bind('hashchange', function(){

        newHash = window.location.hash.substring(1);

        if (newHash) {
            $mainContent
                .find("#content")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #content ", function() {
                        $mainContent.fadeIn(200, function() {

                        });
                        $("nav a").removeClass("current");
                        $("nav a[href='"+newHash+"']").addClass("current");
                    });
                });
        };

    });

    $(window).trigger('hashchange');

});
