$(window).on('load', function(){
    $("#loading-spinner").remove();
    $(".container").addClass("load");

    var orderedTabs = ["about", "resume", "portfolio"];
    var bindScroll = function () {
        var lastMove = 0;
        $('.w').on('DOMMouseScroll', function (e) {
            if (Date.now() - lastMove > 500) {
                var activeTab = $(".active")[1].id;
                if(e.originalEvent.detail > 0) {
                    //scroll down
                    orderedTabs.forEach(function (name, idx) {
                        if (activeTab === name && idx !== orderedTabs.length) {
                            var nextTab = idx + 1;
                            $("#myTab li:eq(" + nextTab + ") a").tab("show");   
                        }
                    });
                } else {
                    //scroll up
                    orderedTabs.forEach(function (name, idx) {
                        if (activeTab === name && idx !== 0) {
                            var nextTab = idx - 1;
                            $("#myTab li:eq(" + nextTab + ") a").tab("show");   
                        }
                    });
                }
                lastMove = Date.now();
            } 
            //prevent page fom scrolling
            return false;
        });

         //IE, Opera, Safari
        $('.w').on('mousewheel', function (e) {
            if (Date.now() - lastMove > 500) {
                var activeTab = $(".active")[1].id;
                if (e.originalEvent.wheelDelta < 0) {
                    orderedTabs.forEach(function (name, idx) {
                        if (activeTab === name && idx !== orderedTabs.length) {
                            var nextTab = idx + 1;
                            $("#myTab li:eq(" + nextTab + ") a").tab("show");   
                        }
                    });
                } else {
                    //scroll up
                    orderedTabs.forEach(function (name, idx) {
                        if (activeTab === name && idx !== 0) {
                            var nextTab = idx - 1;
                            $("#myTab li:eq(" + nextTab + ") a").tab("show");   
                        }
                    });
                }
                lastMove = Date.now();
            } 
            //prevent page fom scrolling
            return false;
        });

    };
    bindScroll();
     //Firefox
    $('a[opentab]').click(function (e) {
        e.preventDefault();
        $('a[href="#' + e.target.attributes[0].value + '"]').tab("show");   
    });

    $(window).resize(function () {
        if ($(window).width() > 992) {
            bindScroll();
        } else {
            $('.w').off();
        }
    });


    $('#myTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });
});