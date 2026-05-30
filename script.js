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
        this.maxIndex = 0;
        this.autoSlideInterval = null;
        
        this.init();
    }
    
    init() {
        setTimeout(() => {
            this.calculateDimensions();
            this.createIndicators();
            this.attachEventListeners();
            this.updateSlider();
            this.triggerProgressAnimations();
        }, 100);
        
        window.addEventListener('resize', () => {
            this.calculateDimensions();
            this.createIndicators();
            this.updateSlider();
        });
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

// Initialize slider and bind DOM-dependent behavior when ready
document.addEventListener('DOMContentLoaded', () => {
    new SkillsSlider();

    // Safe DOM queries and scroll-triggered animations
    const menu = document.querySelector('.skills');
    const about = document.querySelector('.about-us');
    const css = document.querySelector('.css');
    const html = document.querySelector('.html');
    const php = document.querySelector('.php');
    const javascript = document.querySelector('.javascript');
    const cpp = document.querySelector('.cpp');
    const mysql = document.querySelector('.mysql');
    const mongodb = document.querySelector('.mongodb');
    const git = document.querySelector('.git');
    const bootstrap = document.querySelector('.bootstrap');
    const wordpress = document.querySelector('.wordpress');
    const AboutImage = document.querySelector('.about-image');

    function handleScrollAnimations() {
        if (menu && css && html) {
            const menuTop = menu.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if ((menuTop >= viewportHeight * 0.5 - menu.offsetHeight / 2 && menuTop <= viewportHeight * 0.5 + menu.offsetHeight / 2 && window.innerWidth >= 768) ||
                (menuTop >= viewportHeight * 0.1 - menu.offsetHeight / 2 && menuTop <= viewportHeight * 0.1 + menu.offsetHeight / 2)) {
                css.style.animation = 'css .5s ease-in-out forwards';
                html.style.animation = 'html .5s ease-in-out forwards';
                if (javascript) javascript.style.animation = 'javascript .5s ease-in-out forwards';
                if (php) php.style.animation = 'php .5s ease-in-out forwards';
                if (cpp) cpp.style.animation = 'cpp .5s ease-in-out forwards';
                if (mysql) mysql.style.animation = 'mysql .5s ease-in-out forwards';
                if (mongodb) mongodb.style.animation = 'mongodb .5s ease-in-out forwards';
                if (git) git.style.animation = 'git .5s ease-in-out forwards';
                if (bootstrap) bootstrap.style.animation = 'bootstrap .5s ease-in-out forwards';
                if (wordpress) wordpress.style.animation = 'wordpress .5s ease-in-out forwards';
            }
        }

        if (about && AboutImage) {
            const aboutTop = about.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            if ((aboutTop >= viewportHeight * (-0.5) - about.offsetHeight / 2 && aboutTop <= viewportHeight * (-0.5) + about.offsetHeight / 2 && innerWidth >= 768) ||
                (aboutTop >= viewportHeight * (-1.4) - about.offsetHeight / 2 && aboutTop <= viewportHeight * (-1.4) + about.offsetHeight / 2)) {
                AboutImage.style.animation = 'fadeleft 1s linear forwards';
            }
        }
    }

    // Run once and on scroll
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);
});

 

  let resume = document.querySelector("#cv");

  resume?.addEventListener('click', () =>{
    let v = document.createElement("a");
    v.href = "Shakib Resume.pdf";
    v.download = "Shakib Resume.pdf";
    v.click();
  })
  
  window.addEventListener("scroll", ()=>{
    let exp = document.querySelector(".experience-card");
    let expImg = document.querySelector(".experience-card-image img")

    if (!exp || !expImg) return;
    let expTop = exp.getBoundingClientRect().top;

    if(expTop <= 180){
      expImg.style.animation = "faderight 1s linear forwards"
    }
  })


  function sendEmail() {
    var params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      number: document.getElementById("number").value,
      message: document.getElementById("message").value
    };
        // ensure the email goes to your address; template should accept `to_email` or `to_name`
        params.to_email = "alamshakib332@gmail.com";
        params.to_name = "Shakib";

        emailjs.send("service_pu7lza9", "template_4sw0yiq", params)
            .then(function(response) {
                alert("Success! Your email was sent successfully.");
            })
            .catch(function(error) {
                alert("Failed to send email. Please try again later.");
                console.error("Error:", error);
            });
}

function showThankYouModal() {
  const modal = document.getElementById('thankYouModal');
  if (!modal) return;
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
}

function hideThankYouModal() {
  const modal = document.getElementById('thankYouModal');
  if (!modal) return;
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
}

function initHeroForm() {
  const form = document.getElementById('hero-form');
  const closeBtn = document.getElementById('thankYouCloseBtn');
  const modal = document.getElementById('thankYouModal');

  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('hero-name').value.trim();
    const email = document.getElementById('hero-email').value.trim();
    const service = document.getElementById('hero-service').value;
    const message = document.getElementById('hero-message').value.trim();

    if (!name || !email || !service || !message) {
      alert('Please complete all fields before submitting.');
      return;
    }

    const params = {
      from_name: name,
      email_id: email,
      service: service,
      message: message,
      to_email: 'alamashakib332@gmail.com',
      to_name: 'Shakib'
    };

    emailjs.send('service_pu7lza9', 'template_4sw0yiq', params)
      .then(function () {
        form.reset();
        showThankYouModal();
      })
      .catch(function (error) {
        alert('Oops! Something went wrong. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  });

  closeBtn?.addEventListener('click', hideThankYouModal);
  modal?.addEventListener('click', function (event) {
    if (event.target === modal) hideThankYouModal();
  });
}

document.addEventListener('DOMContentLoaded', initHeroForm);

document.querySelectorAll('.faq-title').forEach(item => {
  item.addEventListener('click', function () {
      let parent = this.parentElement;
      document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
      parent.classList.add('active');
  });
});
