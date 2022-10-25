const showNotes = (e) => {
  let notesave = localStorage.getItem("notesave");
  if (notesave == null) {
    notesO = [];
  } else {
    notesO = JSON.parse(notesave);
    // console.log(notesObj);
  }
  let html = "";
  for (var i = 0; i < notesO.length; i++) {
    html += `  <div class="card">
        <h2 class="head">plan ${i+1} </h2>
        <hr />
        <p id='text'class="p">${notesO[i]}
        </p>
        </div>
         `;
  }
  let notesElm = document.getElementById("savedetails");

  if (notesO.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show!`;
  }
}
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
 showNotes();
});
// to search function

let search = document.getElementById('searchTxt');
search.addEventListener("input", function() {

  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName('card');
  Array.from(noteCards).forEach(function(element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
     
    }
    // console.log(cardTxt);
  })
})
