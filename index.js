function num(k){
    let num=document.getElementById("res-disp");

    if(num.innerText=="result here"){
        num.innerText="";
    }
    num.append(k);
}
function equ(){
    let c=document.getElementById("res-disp").innerText;
    let d=document.getElementById("res-disp");
    let str=c;
    console.log(str.replace(/x/g,"*"));
    c=str.replace(/x/g,"*");
    d.innerText=eval(c);
}
function cle(){
    let e=document.getElementById("res-disp");
    e.innerText="";
}
function bs(){
    let e=document.getElementById("res-disp");
    let str=e.innerText;
    let newstr=[];
    let len=str.length;
    for(let i=0;i<len-1;i++){
        newstr.push(str[i]);
    }
    e.innerText=newstr.join("");
    
}



function calculate(e){
    console.log("in",e)
    if(e.key>=0||e.key=="+"||e.key=="-"||e.key=="*"||e.key=="/"){
    num(e.key)
    }else if(e.key=="=" || e.key=="Enter"){
        equ()
    }else if(e.key=="c" || e.key=="C"){
        cle()
    }else if(e.key=="Backspace"){
        bs()
    }
}

window.addEventListener("keydown",(e)=>calculate(e))
