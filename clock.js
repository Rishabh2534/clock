const hourEl=document.getElementById("hour")
const min=document.getElementById("minutes")
const sec=document.getElementById("second")
const ampm=document.getElementById("ampm")
function showtm(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let ampm="AM";
    if(h>12){h=h-12
    ampm="PM"}
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
    hourEl.innerText=h;
    min.innerText=m;
    sec.innerText=s;
    ampm.innerText=ampm;
    setTimeout(showtm,1000)
}
showtm();