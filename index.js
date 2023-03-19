function num(k){
    let num=document.getElementById("res-disp");
    num.append(k);
}
function equ(){
    let c=document.getElementById("res-disp").innerText;
    let d=document.getElementById("res-disp");
    
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
    console.log(str[0]);
}
function show(){
    let e=document.getElementById("buttons");
    e.style.display="block";
    let h=document.getElementById("lock");
    h.style.display="none"
}