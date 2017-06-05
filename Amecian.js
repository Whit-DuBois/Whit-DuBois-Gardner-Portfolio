<script type="text/javascript">
    jQuery(document).ready(function(){
        console.log("Ready")
        jQuery(window).scroll(function() {
            var offset = jQuery("#post-57123").offset().top -50;

            if (jQuery(window).scrollTop() > offset) {
                jQuery(".logo-image img").hide();
                jQuery('.logo-image').append('<img class="black-logo" src="http://theamericankc.com/test/wp-content/uploads/2017/05/TheAmerican_BW.png" />');
                
                jQuery(".mobile-menu-button-light .lines").attr("id","new-mobile-menu");
                
                jQuery("#logo-container-mobile").addClass("logo-bg");
                
            }  

            if (jQuery(window).scrollTop() < offset) {
                jQuery(".logo-image img").show();
                jQuery('.black-logo').remove();
                
                jQuery("#logo-container-mobile").removeClass("logo-bg");
                
                jQuery(".mobile-menu-button-light .lines").removeClass("new-mobile-menu");
                
                jQuery(".mobile-menu-button-light .lines").removeAttr("id","new-mobile-menu");
                
                jQuery(".mobile-menu-button").addClass("remove-bg");
            }
            
        });
    
        jQuery("div.mobile-menu-button").click(function() {
            console.log("Menu Click");
                
            if (jQuery("div").hasClass("close")) {
                console.log("Close Div");
            } 
        });
    });
</script>

</body>
</html>