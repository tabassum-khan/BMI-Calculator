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

        var weight = bmiForm.weight.value;
        var feet = bmiForm.feet.value;
        var inches = bmiForm.inches.value;

        var height =  ((feet*12) + inches) * 0.0254;
        var bmi = (weight/(height*height)) * 100;

        $("#result").val(bmi);

        console.log(bmi);
        
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