$(document).ready(function () {
    var $sidebar = $("#sidebar");
    var $contentPane = $("#content-pane");
    $sidebar.css({
        "min-height": $contentPane.outerHeight()
    });
    
    
    $("#db-select").change(function (){
        var selectedValue = $(this).val();
        if(selectedValue == 'selectValue'){
            $(".isDBSelected").fadeOut('fast');   
        }else{
            $(".isDBSelected").fadeIn('fast');
        }
    });
});
