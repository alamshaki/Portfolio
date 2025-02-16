
const CloseMobileMenuByBody = () => {
  let MobileMenu = document.querySelector(".mobile-navbar");
  let MenuToggle = document.querySelector(".openmenu-icon");
  let CloseButton = document.querySelector(".close-menu-icon");
  MenuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    MobileMenu.style.display = "flex";
  });
  CloseButton.addEventListener("click", (event) => {
    event.stopPropagation();
    MobileMenu.style.display = "none";
  });
  document.body.addEventListener("click", (event) => {
    if (MobileMenu.style.display === "flex" && !MobileMenu.contains(event.target) && !MenuToggle.contains(event.target)) {
      MobileMenu.style.display = "none";
    }
  });
};
document.addEventListener("DOMContentLoaded", CloseMobileMenuByBody);

let MobileNavItem = document.querySelectorAll("#mob-nav-item");
MobileNavItem.forEach((MobNavItem) =>{
  MobNavItem.addEventListener("click", () =>{
    CloseMobileMenu();
  })
})

const ChangeBackground = () =>{
    let body = document.querySelector("body");
    let anchor = document.querySelectorAll('a');
    let currentBg = window.getComputedStyle(body).backgroundColor;
    let icon = document.querySelectorAll(".icon");
   
    if(currentBg === "rgb(0, 0, 0)"){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        anchor.forEach((navItem) =>{
            navItem.style.color = "black";
            navItem.addEventListener('mousemove',() =>{
                navItem.style.color = "orangered";
            })
            navItem.addEventListener('mouseout',()=>{
                navItem.style.color = "black";
            })
        })
        icon.forEach((iconItem) =>{
            iconItem.style.backgroundColor = "Black";
            iconItem.style.padding = "8px";
            iconItem.style.borderRadius = "5px";
        })
    }
    else if(currentBg === "rgb(255, 255, 255)"){
        body.style.backgroundColor = "black";
        body.style.color = "White";
        anchor.forEach((navItem) =>{
            navItem.style.color = "white";
            navItem.addEventListener('mouseout',()=>{
                navItem.style.color = "White";
            })
        })
        
        icon.forEach((iconItem) =>{
            iconItem.style.backgroundColor = "transparent";
            iconItem.style.padding = "8px";
            iconItem.style.borderRadius = "5px";
        })
    }

    else {

    }
}

window.addEventListener("scroll", () => {
    const section = document.querySelector(".navbar");
    const menu = document.querySelector(".mobile-navbar");
  
    // Get the bounding box of the section
    const sectionTop = section.getBoundingClientRect().top;
  
    // Check if section is at the top (0 offset)
    if (sectionTop == 0) {
      menu.style.top = "65px"; // Set menu top to 21%
      section.style.backgroundColor="#80b4ff96";
      section.style.backdropFilter = "blur(10px)"
      
      
    } else {
      menu.style.top = "113px"; // Reset menu top when not at the top
      section.style.backgroundColor="#ffffff00";
      section.style.backdropFilter = "blur(0px)"
     
    }
});


  window.addEventListener("scroll", () => {
    const menu = document.querySelector(".skills");
    let about = document.querySelector(".about-us");
    let css = document.querySelector(".css")
    let html = document.querySelector(".html")
    let php = document.querySelector(".php")
    let javascript = document.querySelector(".javascript")
    let cpp = document.querySelector(".cpp")
    let mysql = document.querySelector(".mysql")
    let mongodb = document.querySelector(".mongodb")
    let git = document.querySelector(".git")
    let bootstrap = document.querySelector(".bootstrap")
    let wordpress = document.querySelector(".wordpress")
    let AboutImage = document.querySelector(".about-image");

    // Get the bounding rectangle of the menu
    const menuTop = menu.getBoundingClientRect().top;
    let aboutTop = about.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    
  
    // Check if menu is at 50% of the viewport height
    if (menuTop >= viewportHeight * 0.5 - menu.offsetHeight / 2 && 
        menuTop <= viewportHeight * 0.5 + menu.offsetHeight / 2 && window.innerWidth >= 768) {
        css.style.animation = "css .5s ease-in-out forwards";
        html.style.animation = "html .5s ease-in-out forwards";
        javascript.style.animation = "javascript .5s ease-in-out forwards"
        php.style.animation = "php .5s ease-in-out forwards"
        cpp.style.animation = "cpp .5s ease-in-out forwards"
        mysql.style.animation = "mysql .5s ease-in-out forwards"
        mongodb.style.animation = "mongodb .5s ease-in-out forwards"
        git.style.animation = "git .5s ease-in-out forwards"
        bootstrap.style.animation = "bootstrap .5s ease-in-out forwards"
        wordpress.style.animation = "wordpress .5s ease-in-out forwards"
        
    }
    else if(menuTop >= viewportHeight * 0.1 - menu.offsetHeight / 2 && 
      menuTop <= viewportHeight * 0.1 + menu.offsetHeight / 2){
        css.style.animation = "css .5s ease-in-out forwards";
        html.style.animation = "html .5s ease-in-out forwards";
        javascript.style.animation = "javascript .5s ease-in-out forwards"
        php.style.animation = "php .5s ease-in-out forwards"
        cpp.style.animation = "cpp .5s ease-in-out forwards"
        mysql.style.animation = "mysql .5s ease-in-out forwards"
        mongodb.style.animation = "mongodb .5s ease-in-out forwards"
        bootstrap.style.animation = "bootstrap .5s ease-in-out forwards"
        wordpress.style.animation = "wordpress .5s ease-in-out forwards"

      }

      else if(aboutTop >= viewportHeight * (-0.5) - about.offsetHeight / 2 && 
        aboutTop <= viewportHeight * (-0.5) + about.offsetHeight / 2 && innerWidth >= 768){
         AboutImage.style.animation = "fadeleft 1s linear forwards"
        }
      else if(aboutTop >= viewportHeight * (-1.4) - about.offsetHeight / 2 && 
        aboutTop <= viewportHeight * (-1.4) + about.offsetHeight / 2){
         AboutImage.style.animation = "fadeleft 1s linear forwards"
        }
    
     else {
     
      }
  });

 

  let resume = document.querySelector("#cv");

  resume.addEventListener('click', () =>{
    let v = document.createElement("a");
    v.href = "Shakib Resume.pdf";
    v.download = "Shakib Resume.pdf";
    v.click();
  })
  
  window.addEventListener("scroll", ()=>{
    let exp = document.querySelector(".experince");
    let expImg = document.querySelector(".experience-image")
  
    let expTop = exp.getBoundingClientRect().top;
  
    if(expTop <= 180){
    expImg.style.animation = "faderight 1s linear forwards"
    }
   else{
  
    }
  })
  window.addEventListener("scroll", ()=>{
    let exp = document.querySelector(".experince1");
    let expImg = document.querySelector(".experience-image1")
  
    let expTop = exp.getBoundingClientRect().top;
  
    if(expTop <= 180){
    expImg.style.animation = "fadeleft 1s linear forwards"
    }
   else{
  
    }
  })


  function sendEmail() {
    var params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      number: document.getElementById("number").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_pu7lza9", "template_4sw0yiq", params)
      .then(function(response) {
      alert("Success! Your email was sent successfully.");
    })
    .catch(function(error) {
      alert("Failed to send email. Please try again later.");
      console.error("Error:", error);
    });
  
  
  var autoReplyParams = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value
  };

  emailjs.send("YOUR_SERVICE_ID", "auto_reply_template", autoReplyParams)
    .then(function(response) {
      console.log("Auto-reply sent!", response.status, response.text);
    })
    .catch(function(error) {
      console.error("Auto-reply Error:", error);
    });
}

window.addEventListener("load", ()=>{
  setTimeout(() => {
    const preloader = document.querySelector(".pre-loader");
    preloader.style.display = "none";
    let footer = document.querySelector("footer");
    footer.style.display = "flex";
    let navbar = document.querySelector(".navbar");
    navbar.style.display = "flex";
  }, 50);
})


