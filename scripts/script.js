function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName('input');
    for (i = 0; i < ele.length; i++) {
      if (ele[i].type = "radio") {
        if (ele[i].checked){
          document.getElementById("result").innerHTML
          += ele[i].name + " نمره: "
          + ele[i].value + "<br>";
        }
      }
    }
}

function emtiaz(){
    let elle = document.getElementsByTagName('input')
    let aa = []
    for (i = 0; i < elle.length; i++){
      if (elle[i].type = "radio"){
        if (elle[i].checked){
          aa.push(parseInt(elle[i].value))
            console.log(aa)
        }
      }
    }
      
    let sum = 0
    for (var i = 0; i < aa.length; i++) {
      sum += aa[i]
    }
    console.log(sum)
    document.getElementById("result2").innerHTML = `نمره کل آزمون ${sum}`;

}

function rahnama(){
  alert("برای مشاهده نتایج مربوط به هر سوال بر روی دکمه نمره هر سوال و برای مشاهده نمره آزمون بر روی نمره کل کلیک کنید. هر سوال یک نمره دارد. نتایج در پایین همین صفحه چاپ می شوند و برای مشاهده آن بعد از کلیک بر روی دکمه های مربوطه باید اسکرول را به سمت پایین بکشید.")
}