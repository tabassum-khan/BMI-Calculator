$(window).on("load", function(){
    var bmiForm = document.forms["bmi-form"];

    bmiForm.addEventListener("submit", function(e){
        e.preventDefault();

        

        if ($('.box').hasClass('active')){
          var activeBox = $('.box.active');
          activeBox.removeClass('active');
        }

        if ($('.box').hasClass('smallscreen trans')){
          var activeBox = $('.box.smallscreen.trans');
          activeBox.removeClass('smallscreen trans');
        }

        if (bmi < 18.5)
          addEffects('.yellow');
        else if (bmi >= 18.5 && bmi < 25)
            addEffects('.green');
        else if(bmi >=25 && bmi < 30)
          addEffects('.orange');
        else
          addEffects('.red');
    });

    function addEffects(obj){
      $(obj).addClass('active smallscreen');
      setTimeout(function(){
        $(obj).addClass('trans');
      }, 250);
    }
});
