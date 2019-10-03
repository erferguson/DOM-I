const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");

logo.setAttribute('src', siteContent["nav"]["img-src"])



//Navigation
let navLinks = document.querySelectorAll("a")

navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

//CTA - text 
let newText = document.querySelector(".cta-text h1")

newText.textContent = siteContent['cta']['h1'];

//CTA - button
let newButton = document.querySelector('.cta-text button')

newButton.textContent = siteContent['cta']['button']

//CTA - image
let newImage = document.getElementById('cta-img')

newImage.src = siteContent['cta']['img-src']

//MAIN CONTENT - header
let newMainText = document.querySelectorAll(".main-content h4"); // SELECTED

newMainText[0].textContent = siteContent['main-content']['features-h4']
newMainText[1].textContent = siteContent ['main-content']['about-h4']
newMainText[2].textContent = siteContent['main-content']['services-h4']
newMainText[3].textContent = siteContent ['main-content']['product-h4']
newMainText[4].textContent = siteContent['main-content']['vision-h4']


//MAIN CONTENT - p
let newMainP = document.querySelectorAll(".main-content p");

newMainP[0].textContent = siteContent['main-content']['features-content'];
newMainP[1].textContent = siteContent['main-content']['about-content'];
newMainP[2].textContent = siteContent['main-content']['services-content'];
newMainP[3].textContent = siteContent['main-content']['product-content'];
newMainP[4].textContent = siteContent['main-content']['vision-content'];

//MAIN CONTENT - img
let newMainIMG = document.getElementById('middle-img'); // SELECTED
newMainIMG.src = siteContent['main-content']['middle-img-src'];

