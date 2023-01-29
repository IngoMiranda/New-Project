function toggleModel(){
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector("#profile img");

    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/avata-Light mode.png");
        img.setAttribute("alt", "ainda continua a minha foto");

    }else{

        img.setAttribute("src", "./assets/avatar01.png");
        img.setAttribute("alt", "Foto de Ingo");
    }

    
    
}