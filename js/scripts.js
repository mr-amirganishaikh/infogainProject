$(document).ready(function () {
    var $sidebar = $("#sidebar");
    var $contentPane = $("#content-pane");
    $sidebar.css({
        "min-height": $contentPane.outerHeight()
    });
});
