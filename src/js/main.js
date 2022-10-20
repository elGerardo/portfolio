function init(){
    document.addEventListener("scroll", (e) => {
        //console.log(window.pageYOffset)
        if( window.pageYOffset > 260 )
        {
            let footerContent = document.getElementById("footer_content");
            footerContent.style.marginTop = 0;
        }else{
            let footerContent = document.getElementById("footer_content");
            footerContent.style.marginTop = "4rem";
        }
    })
}

init();
