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
                <li><a href="index.html" class="nav-link px-2" id="homeLink">Home</a></li>
                <li><a href="services.html" class="nav-link px-2" id="serviceLink">Services</a></li>
                <li><a href="faq.html" class="nav-link px-2 " id="faqLink">FAQs</a></li>
                <li><a href="About.html" class="nav-link px-2" id="aboutLink">About</a></li>
                <li><a href="Contact.html" class="nav-link px-2 " id="contactLink">Contact</a></li>
                <button type="button" class="btn btn-outline-secondary" id="toggleCursor">Toggle Cursor</button>     
            </ul>
            

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
               
                        
            </form>

            <div class="text-end">
            
                <button type="button" class="btn btn-outline-light me-2" id="cartBtn"  onclick="toCart()" >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height = "32" viewbox="0 0 32 32" id="cart"><path fill="white" d="M27.854 7.273a1.671 1.671 0 0 0-1.371-.702H9.832c-.012 0-.021.006-.033.007L9.206 4.27A1.69 1.69 0 0 0 7.568 3H4.325a.5.5 0 0 0 0 1h3.243a.69.69 0 0 1 .669.519l4.418 17.208a1.69 1.69 0 0 0 1.637 1.271h10.764a.5.5 0 0 0 0-1H14.292a.69.69 0 0 1-.668-.519l-.82-3.193h10.901a1.69 1.69 0 0 0 1.604-1.156l2.778-8.333a1.673 1.673 0 0 0-.233-1.524zm-4.148 10.013H12.547l-2.494-9.715h16.43a.68.68 0 0 1 .56.287.685.685 0 0 1 .095.622l-.554 1.663H17.42a.5.5 0 0 0 0 1h8.831l-.857 2.571h-6.783a.5.5 0 0 0 0 1h6.449l-.7 2.099a.687.687 0 0 1-.654.473zm-9.262 7.143a2.288 2.288 0 0 0-2.286 2.285c0 1.261 1.025 2.286 2.286 2.286s2.286-1.025 2.286-2.286a2.288 2.288 0 0 0-2.286-2.285zm0 3.571a1.287 1.287 0 1 1 1.286-1.286c0 .709-.577 1.286-1.286 1.286zm9.524-3.571a2.288 2.288 0 0 0-2.286 2.285c0 1.261 1.025 2.286 2.286 2.286s2.286-1.025 2.286-2.286a2.288 2.288 0 0 0-2.286-2.285zm0 3.571a1.287 1.287 0 1 1 1.286-1.286c0 .709-.577 1.286-1.286 1.286z"></path></svg>    
                </button>
                <button type="button" class="btn btn-warning">Check-out</button>     
                
            </div>
        </div>
    </div>
</header>
<div class="sprocket sticky-top"></div></div>`);
var url = location.href;
document.getElementById("homeLink").style.color = "white";
document.getElementById("serviceLink").style.color = "white";
document.getElementById("faqLink").style.color = "white";
document.getElementById("aboutLink").style.color = "white";
document.getElementById("contactLink").style.color = "white";

if (document.getElementById("homeLink").href == url) {
    document.getElementById("homeLink").style.color = "grey";
}
if (document.getElementById("serviceLink").href == url) {
    document.getElementById("serviceLink").style.color = "grey";
}
if (document.getElementById("faqLink").href == url) {
    document.getElementById("faqLink").style.color = "grey";
}
if (document.getElementById("aboutLink").href == url) {
    document.getElementById("aboutLink").style.color = "grey";
}
if (document.getElementById("contactLink").href == url) {
    document.getElementById("contactLink").style.color = "grey";
}

function toCart() {
    // if statement for development purposes
    // checks if current page has local host url and changes redirect path if it is. 
    if (location.href.includes("//127.0.0.1:5500/Lunch-Break")) {
        location.href = "http://127.0.0.1:5500/Lunch-Break-/cart.html";   
    }else{
        location.href = "https://gray-ground-0d7964d03.4.azurestaticapps.net/cart.html";
    }
    
}
