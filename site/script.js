var ris=["img/rock.png", "img/scissors.jpg", "img/paper.jpg"];
var comppp=0;
var polz=0;
function start(){


}
function gener(num){
polz=num;
comppp=Math.floor(Math.random()*3);
igrok.src=ris[polz];
comp.src=ris[comppp];
sravn();
}
function sravn(){
    if((polz==0 & comppp==0) || (polz==1 & comppp==1) || (polz==2 & comppp==2)){
        res.innerHTML="Ничья";
    }
    if((polz==0 & comppp==2)){
        res.innerHTML="Поражение";
    }
    if((polz==0 & comppp==1)){
        res.innerHTML="Победа";
    }
    if((polz==1 & comppp==0)){
        res.innerHTML="Поражение";
    }
    if((polz==1 & comppp==2)){
        res.innerHTML="Победа";
    }
    if((polz==2 & comppp==1)){
        res.innerHTML="Поражение";
    }
    if((polz==2 & comppp==0)){
        res.innerHTML="Победа";
    }
    
}
