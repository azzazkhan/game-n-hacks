      $(document).ready(function (){
        $("#login-btn").click(function (){
          $("#popOut").fadeIn(1000);
          $("#loginOut").fadeIn(1000);
        });
        $("#login-cancel").click(function (){
          $("#loginOut").fadeOut(1000);
          $("#popOut").slideUp(2500);
        });
        $("body").css("overflow", "hidden");
        $("#hideOut").fadeIn(1000);
        $("#hideOut .content").fadeIn(1000);
        $("#notice-dismiss").click(function (){
          $("#hideOut .content").fadeOut(1000);
          $("#hideOut").slideUp(2500);
          $("body").css("overflow", "auto");
        });
        $(".back-to-top").click(function (){
          $(window).scrollTop(0);
            $(".button-set").fadeOut(1000);
        });
        $(".button-set").hide();
        $(window).scroll(function (){
          if ($(this).scrollTop() > /*400*/ 100) {
            if ($("#header-slide").css("position") == "relative") {
              $("#header-slide").css("position", "fixed");
              $("#header-slide").fadeOut(0).css("border-bottom", "1px solid #A8A8A8");
              $("#header-slide").slideDown(1000);
            }
            $(".button-set").slideDown(1000);
          }
          else {
            $("#header-slide").css("position", "relative");
            $("#header-slide").css("border", "0");
            $(".button-set").hide(1000);
          }
        });
      });