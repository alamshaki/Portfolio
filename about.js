window.addEventListener('scroll', ()=>{
    let section = document.querySelector(".navbar");
    let sectionTop = section.getBoundingClientRect().top;

    if(sectionTop === 0){
        section.style.backdropFilter = 'blur(10px)'
    }
    else{
        section.style.backdropFilter = 'blur(0px)'
    }
})


window.addEventListener("load", ()=>{
    setTimeout(() => {
      const preloader = document.querySelector(".pre-loader");
      preloader.style.display = "none";
      let footer = document.querySelector("footer");
      footer.style.display = "flex";
      let navbar = document.querySelector(".navbar");
      navbar.style.display = "flex";
    }, 300);
  })  