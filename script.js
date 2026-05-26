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

/* ========== Skills Slider Functionality ========== */
class SkillsSlider {
    constructor() {
        this.slider = document.getElementById('skillsSlider');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicatorsContainer = document.getElementById('sliderIndicators');
        
        if (!this.slider) return; // Exit if slider doesn't exist
        
        this.currentIndex = 0;
        this.cardWidth = 0;
        this.gap = 30;
        this.cardsPerView = 4;
        
        this.init();
    }
    
    init() {
        this.calculateDimensions();
        this.createIndicators();
        this.attachEventListeners();
        this.triggerProgressAnimations();
        window.addEventListener('resize', () => this.calculateDimensions());
    }
    
    calculateDimensions() {
        const cards = this.slider.querySelectorAll('.skill-card');
        if (cards.length === 0) return;
        
        const sliderWrapper = this.slider.parentElement;
        const wrapperWidth = sliderWrapper.offsetWidth;
        
        // Calculate responsive cards per view
        if (window.innerWidth < 768) {
            this.cardsPerView = 1;
        } else if (window.innerWidth < 1024) {
            this.cardsPerView = 2;
        } else if (window.innerWidth < 1400) {
            this.cardsPerView = 3;
        } else {
            this.cardsPerView = 4;
        }
        
        this.cardWidth = (wrapperWidth - (this.gap * (this.cardsPerView - 1))) / this.cardsPerView;
        this.maxIndex = Math.max(0, cards.length - this.cardsPerView);
    }
    
    createIndicators() {
        if (!this.indicatorsContainer) return;
        
        const cards = this.slider.querySelectorAll('.skill-card');
        const indicatorCount = Math.ceil(cards.length / this.cardsPerView);
        
        this.indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < indicatorCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'indicator-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => this.goToSlide(i * this.cardsPerView));
            this.indicatorsContainer.appendChild(dot);
        }
    }
    
    attachEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
    }
    
    triggerProgressAnimations() {
        const cards = this.slider.querySelectorAll('.skill-card');
        cards.forEach((card, index) => {
            const circles = card.querySelectorAll('.skill-circle-progress');
            circles.forEach(circle => {
                // Trigger animation by setting a small delay
                setTimeout(() => {
                    circle.style.animation = 'none';
                    setTimeout(() => {
                        circle.style.animation = '';
                    }, 10);
                }, index * 100);
            });
        });
    }
    
    updateSlider() {
        const offset = -this.currentIndex * (this.cardWidth + this.gap);
        this.slider.style.transform = `translateX(${offset}px)`;
        this.updateIndicators();
    }
    
    updateIndicators() {
        if (!this.indicatorsContainer) return;
        
        const dots = this.indicatorsContainer.querySelectorAll('.indicator-dot');
        const activeIndex = Math.floor(this.currentIndex / this.cardsPerView);
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlider();
        }
    }
    
    next() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.updateSlider();
        }
    }
    
    goToSlide(index) {
        this.currentIndex = Math.min(index, this.maxIndex);
        this.updateSlider();
        this.triggerProgressAnimations();
    }
}

// Initialize slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SkillsSlider();
});

// Also initialize on page load for compatibility
window.addEventListener('load', () => {
    new SkillsSlider();
});


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

  resume?.addEventListener('click', () =>{
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

document.querySelectorAll('.faq-title').forEach(item => {
  item.addEventListener('click', function () {
      let parent = this.parentElement;
      document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
      parent.classList.add('active');
  });
});
