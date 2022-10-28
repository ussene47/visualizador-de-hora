function carregar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data= new Date();
   var hora = data.getHours();
  
    msg.innerHTML=`São ${hora} horas`;

    if(hora >= 0 && hora < 12){
      img.src="img/manha.jpg";
    document.body.style.background="#e2cd9f";
    
    }else if(hora >=12 && hora < 18){
      
        img.src="img/tarde.jpg";
        document.body.style.background="#e2c09f";
    }else{
        img.src="img/noite.jpg";
        document.body.style.background="#y2c09f";
    }



}