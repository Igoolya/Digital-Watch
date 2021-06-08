 function showTime() {
     let date = new Date();
     let h = date.getHours(); // 0 - 23
     let m = date.getMinutes(); // 0 - 59
     let s = date.getSeconds(); // 0 - 59
     let day = date.getDay();
     let currentDay = date.getDate();
     console.log(currentDay);
     let year = date.getFullYear();
     let month = date.getMonth();

     let month1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
     'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     let days = ['Sun', 'Mon', 'Tue','Wed', 'Thu', 'Fri', 'Sat']
     
     let session = "AM";
     if(h == 0){
         h = 12;
     }
    
     if(h > 12){
         h = h - 12;
         session = "PM";
     }
    
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;

     let time = h + ":" + m + ":" + s + " " + session;
     console.log(time);
     document.getElementById("MyClockDisplay").innerText = time;

    document.getElementById('watch').innerHTML = `${month1[month]}-${currentDay}-${year},${days[day]}`
    setTimeout('showTime()', 1000);
}
showTime();