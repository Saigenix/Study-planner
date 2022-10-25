console.log("Welcome to daily study planner app");

// user details add into the local storage 

let addBtn = document.getElementById('btn1')
let input = ['date', 'subname1','physics','Todayforphy','timefromphy', 'timetophy', 'subname2', 'chemistry', 'Todayforche', 'timefromche', 'timetoche', 'subname2', 'math', 'Todayformath', 'timefrommath'
  , 'timetomath', 'reward'
  ]
//  console.log(input);
addBtn.addEventListener("click", function(e) {
  let all = '';
  for (var i = 0; i < input.length; i++) {
    inputid = input[i];
    let addTxt = document.getElementById(inputid);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    if (i == 0) {
      all += " 📅 Date :- " + addTxt.value + '<br><br>'
    } else if (i == 1) {
      all += `Subject Name : ${addTxt.value}` + '<br><br>'
    } else if (i == 2) {
      all += `⚛️ Topics of Study :- ` + addTxt.value + '<br><br>'
    } else if (i == 3) {
      all +=  '🎴 Type of Study:- ' + addTxt.value + '<br><br>'
    } else if (i == 4) {
      all += '⏳Study from :- ' + addTxt.value + '<br><br>'
    } else if (i == 5) {
      all += '⏳Study to :- ' + addTxt.value + '<br><br>'
    } else if (i == 6) {
      all += `Subject Name : ${addTxt.value}` + '<br><br>'
    } else if (i == 7) {
      all += `⚛️ Topics of Study :- ` + addTxt.value + '<br><br>'
    } else if (i == 8) {
      all += '🎴 Type of Study:- ' + addTxt.value + '<br><br>'
    } else if (i == 9) {
      all += '⏳Study from :- ' + addTxt.value + '<br><br>'
    } else if (i == 10) {
      all += '⏳Study to :- ' + addTxt.value + '<br><br>'
    } else if (i == 11) {
      all += `Subject Name : ${addTxt.value}` + '<br><br>'
    } else if (i == 12) {
      all += `⚛️ Topics of Study :- ` + addTxt.value + '<br><br>'
    } else if (i == 13) {
      all += '🎴 Type of Study:- ' + addTxt.value + '<br><br>'
    } else if (i == 14) {
      all += '⏳Study from :- ' + addTxt.value + '<br><br>'
    } else if (i == 15) {
      all += '⏳Study to :- ' + addTxt.value + '<br><br>'
    } else if (i == 16) {
      all += '🍰 You will get this reward:- ' + addTxt.value + '<br><br>'
    }

    addTxt.value = '';
  }

  notesObj.push(all);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  console.log(notesObj);

  showNotes();
});


// Function to show elements from localStorage
const showNotes = () => {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
    console.log(notesObj);
  }
  let html = "";
  for (var i = 0; i < notesObj.length; i++) {
    html += `  <div class="card">
        <h2 class="head">plan ${i+1} </h2>
        <hr />
        <p id='text'class="p">${notesObj[i]}
        </p>
        <button id="${i}" onclick="deleteNote(this.id)" class="Del">Mark completed</button>
       <button id="${i}" class="Del" onclick="save(this.id)"> Save For future </button>
          </div>     `;
  }
  let notesElm = document.getElementById("details");

  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show!! 
    `;
  }
}
showNotes();


// Function to delete a note
function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// console.log(document.getElementById("text").innerHTML);

const save = (i) => {

   // window.location.pathname = "save.html";
   alert('plan successfully saved !     click \"view saved plans\" to see plans')
  // console.log(notesObj[i]);
  let nots = localStorage.getItem("notesave");
  if (nots == null) {
    Add = [];
  } else {
    Add = JSON.parse(nots);
  }
  //for (var i = 0; i < notesObj.length; i++) {
    Add.push(notesObj[i]);
  //}
  
  localStorage.setItem("notesave", JSON.stringify(Add));


}
const show = () => {
  
  window.location.pathname = "Study-planner/save.html";
  // use this in local machine
  //window.location.pathname = "/save.html";
  
  
  
}