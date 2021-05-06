chrome.runtime.onInstalled.addListener(function() {
    // open a new tab after installing :)
    chrome.tabs.create({
        active: true
    })
})


function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
  }

  // what the fuck is this
  function tabNameTime() {
            	
    var today = new Date();
    
    if(today.getMinutes() < 10){
     var time = today.getHours() + ":0" + today.getMinutes()
    } else {
     var time = today.getHours() + ":" + today.getMinutes()
    }
    console.log(time)

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    var fulldate = monthNames[today.getMonth()] + " " +  getOrdinalNum(today.getDay()) + ", " + today.getFullYear()
    
    
    document.title = "New Tab | " + time;
    document.getElementById("clock").innerText = time;
    document.getElementById("date").innerText = fulldate
    
    setTimeout(tabNameTime, 1000);
}

tabNameTime()



$('input[type="text"]').on('focus', function() {
    document.getElementById("bg").className = "background-hvr"
});

$('input[type="text"]').on('focusout', function() {
    document.getElementById("bg").className = "background-hvr"
    document.getElementById("bg").className = "background"
});




document.onkeypress = function (e) {
    document.getElementById("search").focus();
};

function browse(){
    query = document.getElementById("search").innerText;
    if(query.length <= 0){
        return alert("[DEBUG] the query seems to be empty!")
    }
    window.open("http://www.google.com/search?q=","_self")
}


