// made to look like polaroids
// array for card title, for description of what customer wants done, and array for links to the picture uploaded`
var imgUrl = [  `WhatsApp Image 2024-02-16 at 14.52.45.jpeg`,
                `WhatsApp Image 2024-02-16 at 16.23.25.jpeg`,
                `WhatsApp Image 2024-02-16 at 16.23.25.jpeg`];
var title = [`[User entered name 1]`,`[User entered name 2]`,`[User entered name 3]`]; 
var description = [`Description 1`,`Description 2`,`Description 3`];

filesCount = 2; // hard coded till i find out how this works



for (let i = 0; i < 3; i++) {
  
  document.write(`<div class="col-lg mt-5">
  <div class="card bg-light shadow" style="width: 18rem;">
      <img src="images/${imgUrl[i]}" class="card-img-top pb-5 p-3" alt="...">
          <div class="card-body bg-body-secondary mt-4 custom-shadow">
          <h5 class="card-title text-black fw-bold">${title[i]}</h5>
          <p class="card-text">${description[i]}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-light btn-outline-warning text-secondary">confirm</a>
          </div>
      </div>  
</div>
  
`);
}