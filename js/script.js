/*=========================================
            WEBSITE LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


/*=========================================
            AOS
=========================================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 900,

        once: true,

        easing: "ease-in-out"

    });

}


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});


/*=========================================
        BACK TO TOP
=========================================*/

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop?.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*=========================================
        CONTACT FORM
=========================================*/

const form=document.querySelector(".contact-form form");

form?.addEventListener("submit",(e)=>{

    e.preventDefault();

    const button=form.querySelector("button");

    button.innerHTML="Sending...";

    button.disabled=true;

    setTimeout(()=>{

        alert("Thank you! We will contact you shortly.");

        form.reset();

        button.innerHTML="Book Free Inspection";

        button.disabled=false;

    },1500);

});


/*=========================================
        IMAGE LAZY LOAD
=========================================*/

const images=document.querySelectorAll("img");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const img=entry.target;

            img.classList.add("loaded");

            observer.unobserve(img);

        }

    });

});

images.forEach(img=>observer.observe(img));


/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const height=document.documentElement.scrollHeight-window.innerHeight;

    const scrolled=(window.scrollY/height)*100;

    progress.style.width=scrolled+"%";

});


/*=========================================
        NUMBER ANIMATION
=========================================*/

document.querySelectorAll(".counter").forEach(counter=>{

    const target=+counter.dataset.target;

    let count=0;

    const speed=target/120;

    const update=()=>{

        if(count<target){

            count+=speed;

            counter.innerHTML=Math.ceil(count);

            requestAnimationFrame(update);

        }

        else{

            counter.innerHTML=target;

        }

    };

    update();

});


/*=========================================
        CURRENT YEAR
=========================================*/

const year=document.getElementById("year");

if(year){

    year.innerHTML=new Date().getFullYear();

}

console.log("✅ Grace Enterprises Website Loaded Successfully");

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});