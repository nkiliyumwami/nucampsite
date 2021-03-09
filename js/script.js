/*Custom jQuery for play and pause buttons
    
        //Set carousel sliding intervals
        $(function (){
            $('.carousel').carousel({interval: 2000, pause:'false'}); //"pause:false" for screentouch only
            //Functions to empower play and pause button(see jQuery & bootstrap documentation)
            $('#carouselPause').click(function() {
                $('.carousel').carousel('pause');
            });
            $('#carouselPlay').click(function() {
                $('.carousel').carousel('cycle');//See Bootstrap doc for "cycle"
            });
        });

        */
       
    //Upgrading from two buttons and two functions to one button/function(see code above to one button)
        $(function() {
            //Set carousel sliding intervals
            $('.carousel').carousel({interval: 2000, pause:'false'});
            //Function to empower the button
            $('#carouselButton').click(function() {
                //Check if the button has a class of pause, the pause, remove it and add play class
                if ($('#carouselButton').children('i').hasClass('fa-pause')) {
                    $('.carousel').carousel('pause');
                    $('#carouselButton').children('i').removeClass('fa-pause');
                    $('#carouselButton').children('i').addClass('fa-play');
                    //Add else to do the opposite to empower the play button
                } else {
                    $('.carousel').carousel('cycle');
                    $('#carouselButton').children('i').removeClass('fa-play');
                    $('#carouselButton').children('i').addClass('fa-pause');
                }
            });
        });
    