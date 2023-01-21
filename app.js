const portao = document.getElementById('portao');
const click = document.getElementById('click');
const objeto = document.getElementById('objeto');

let move = true;
let trava = false;
let num = 0;
let clicking = false;

click.addEventListener('click',()=>{
    clicking=true
    trava=false
    if(num==0){move=true}
    if(num==5){move=false}
})
objeto.addEventListener('click',()=>{
    trava=true
})

setInterval(()=>{
    
    
if(clicking==true&&trava==false&&move==true){num++}
if(clicking==true&&trava==false&&move==false){num--}



if(num==0){portao.style.left='0px';}
if(num==1){portao.style.left='50px';}
if(num==2){portao.style.left='100px';}
if(num==3){portao.style.left='150px';}
if(num==4){portao.style.left='200px';}
if(num==5){portao.style.left='240px';clicking=false}
if(num>5){num=5};
if(num<0){num=0};
},1000)