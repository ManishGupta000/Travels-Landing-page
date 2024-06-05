$(document).ready(function (){

    $(".menu-btn").click(function (){
        $(".nav-links").css('height','600px')
        $(".menu-btn").css('display','none')
       $(".cross-btn").css('display','block')
       $(".cros-m").css('backgroundColor', 'rgba(241, 165, 1, 1)')

    })

    $(".cross-btn").click( ()=>{
        $(".nav-links").css('height','0')
        $(".menu-btn").css('display','block')
       $(".cross-btn").css('display','none')
       $(".cros-m").css('backgroundColor', 'transparent')

    })

   
  
});