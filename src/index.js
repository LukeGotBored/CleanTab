function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

  // what the fuck is this
function tabNameTime() {
    var Symbol;
    var today = new Date();
    var time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, "0");

    // Month - Day - Year
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var fulldate = monthNames[today.getMonth()] + " " +  getOrdinalNum(today.getDay()) + ", " + today.getFullYear()
    
    document.title = "New Tab | " + time;
    document.getElementById("clock").innerText = time;
    document.getElementById("date").innerText = fulldate
    
    setTimeout(tabNameTime, 1000);
}
tabNameTime()

// there must be a better way of doing this, will check later...
$('input[type="text"]').on('focus', function() {
    document.getElementById("bg").className = "background-hvr"
});

$('input[type="text"]').on('focusout', function() {
    document.getElementById("bg").className = "background"
});

// Focus on search bar whenever a key gets pressed
document.onkeypress = function (e) {
    document.getElementById("search").focus();
    console.log(document.getElementById("search").value.replace(/\s+/g,"").length)
   
}

// this way the images don't get mixed up, weeeee
$(function(){
    var bgimage = new Image();      
    bgimage.src="https://source.unsplash.com/1920x1080/?landscape";       
    $(".background").hide();
    $(".background-hvr").hide();
    $(bgimage).on('load',function(){
        $(".background").css("background-image","url("+$(this).attr("src")+")").show()                  
    });
});

function validateForm(){
    if(document.getElementById("search").value.replace(/\s+/g,"").length == 0)
    { 
      alert("validation failed false");
      return false;
    }
  
    alert("validations passed");
    return true;
  }
