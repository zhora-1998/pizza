let inp=document.getElementById("inp");
let modal=document.getElementById('mymodal');
let span =document.getElementsByClassName('close')[0];

let mail='none';

inp.oninput=function(){
    let but=document.getElementById("but");
    but.style.display="block";
};

function fun2(){
    mail=inp.value;
    inp.value="";
    but.style.display="none";
    modal.style.display="block";
    console.log(mail);
}


span.onclick=function(){
    modal.style.display='none';
}