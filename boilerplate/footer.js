var cursorToggleBtn = document.getElementById("toggleCursor");
var body = document.body;

cursorToggleBtn.addEventListener('click', function () {
  

  var isCursorOn = localStorage.getItem('cursor') === 'true';

  isCursorOn = !isCursorOn;
  localStorage.setItem('cursor', isCursorOn);

  if (!isCursorOn) {
    body.classList.add('cursor');
    document.getElementById("myCanvas").style.pointerEvents = "none";

  }else{
    body.classList.remove('cursor');
    document.getElementById("myCanvas").style.pointerEvents = "all";
  }

});

document.write(`<footer class="py-5 bg-white p-5">
<div class="row">
  <div class="col-6 col-md-2 mb-3">
    <h5>Section</h5>
    <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-muted">Home</a></li>
      <li class="nav-item mb-2"><a href="Contact.html" class="nav-link p-0 text-muted">Contact</a></li>
      <li class="nav-item mb-2"><a href="Pricing.html" class="nav-link p-0 text-muted">Pricing</a></li>
      <li class="nav-item mb-2"><a href="faq.html" class="nav-link p-0 text-muted">FAQs</a></li>
      <li class="nav-item mb-2"><a href="About.html" class="nav-link p-0 text-muted">About</a></li>
    </ul>
  </div>
  <div class="col-6 col-md-2 mb-3">
    <h5>Section</h5>
    <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-muted">Home</a></li>
      <li class="nav-item mb-2"><a href="Contact.html" class="nav-link p-0 text-muted">Contact</a></li>
      <li class="nav-item mb-2"><a href="Pricing.html" class="nav-link p-0 text-muted">Pricing</a></li>
      <li class="nav-item mb-2"><a href="faq.html" class="nav-link p-0 text-muted">FAQs</a></li>
      <li class="nav-item mb-2"><a href="About.html" class="nav-link p-0 text-muted">About</a></li>
    </ul>
  </div>
  <div class="col-6 col-md-2 mb-3">
    <h5>Section</h5>
    <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-muted">Home</a></li>
      <li class="nav-item mb-2"><a href="Contact.html" class="nav-link p-0 text-muted">Contact</a></li>
      <li class="nav-item mb-2"><a href="Pricing.html" class="nav-link p-0 text-muted">Pricing</a></li>
      <li class="nav-item mb-2"><a href="faq.html" class="nav-link p-0 text-muted">FAQs</a></li>
      <li class="nav-item mb-2"><a href="About.html" class="nav-link p-0 text-muted">About</a></li>
    </ul>
  </div>

  

  

<div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
  <p>© 2024 Company, Inc. All rights reserved.</p>
  <ul class="list-unstyled d-flex">
    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
  </ul>
</div>
</footer>`);