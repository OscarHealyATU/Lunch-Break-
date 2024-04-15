function isActive(){
    if(location.href == "https://gray-ground-0d7964d03.4.azurestaticapps.net/index.html") return "text-success";
    else if(location.href == "https://gray-ground-0d7964d03.4.azurestaticapps.net/services.html") return "text-success";
    else if(location.href == "https://gray-ground-0d7964d03.4.azurestaticapps.net/faq.html") return "text-success";
    else if(location.href == "https://gray-ground-0d7964d03.4.azurestaticapps.net/About.html") return "text-success";
    else if(location.href == "https://gray-ground-0d7964d03.4.azurestaticapps.net/Contact.html") return "text-success";
    else return "text-danger";  
}
document.write(`<div class="sprocket"></div><div class="sticky-top">
<header class="p-1 text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div class="logoRing3">
                <div class="logoRing2">
                    <div class="logoRing1"></div>
                </div>
                <img src="assets/animatedLogo.png" alt="logo" class="logo">
            </div>                  
            
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="index.html" class="nav-link px-2 ` + isActive() + `" id="homeLink">Home</a></li>
                <li><a href="services.html" class="nav-link px-2 ` + isActive() + `" id="serviceLink">Services</a></li>
                <li><a href="faq.html" class="nav-link px-2 ` + isActive() + `" id="faqLink">FAQs</a></li>
                <li><a href="About.html" class="nav-link px-2  ` + isActive() + `" id="aboutLink">About</a></li>
                <li><a href="Contact.html" class="nav-link px-2  ` + isActive() + `" id="contactLink">Contact</a></li>
                <button type="button" class="btn btn-outline-secondary" id="toggleCursor">Toggle Cursor</button>     
            </ul>
            

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" class="form-control form-control-dark" placeholder="Search..."
                    aria-label="Search">
            </form>

            <div class="text-end">
            
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                <button type="button" class="btn btn-warning">Sign-up</button>     
                
            </div>
        </div>
    </div>
</header>
<div class="sprocket sticky-top"></div></div>`);

