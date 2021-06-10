console.log("Welcome to daily study planner app");

// user details add into the local storage 

let addBtn = document.getElementById('btn1')
let input = ['date', 'physics', 'Todayforphy', 'timefromphy', 'timetophy', 'chemistry', 'Todayforche', 'timefromche', 'timetoche', 'math', 'Todayformath', 'timefrommath'
  , 'timetomath', 'reward'
  ]
//  console.log(input);
addBtn.addEventListener("click", function(e) {
  let all ='';
  for (var i = 0; i < input.length; i++) {
    inputid = input[i];
    let addTxt = document.getElementById(inputid);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
   if (i==0) {
     all += " 📅 Date :- " + addTxt.value +'<br><br>'
   } else if(i==1) {
     all += '⚛️ your physics target is :- ' + addTxt.value +'<br><br>'
   } else if(i==2) {
     all += '🎴 What you doing in physics today:- ' + addTxt.value +'<br><br>'
   }else if (i == 3) {
     all += '⏳physics study from :- ' + addTxt.value + '<br><br>'
   }else if (i == 4) {
     all += '⌛ physics study To :- ' + addTxt.value + '<br><br>'
   }else if(i==5) {
     all += ' 👩‍🔬 your chemistry target is:- ' + addTxt.value +'<br><br>'
   }else if (i == 6) {
     all += '🔥 What you doing in chemistry today:- ' + addTxt.value + '<br><br>'
   }else if (i == 7) {
     all += '⏳chemistry study from :- ' + addTxt.value + '<br><br>'
   }else if (i == 8) {
     all += '⌛ chemistry study To :- ' + addTxt.value + '<br><br>'
   }else if(i==9) {
     all += '➕ your Math target is:- ' + addTxt.value +'<br><br>'
   }else if (i == 10) {
     all += '✨ What you doing in math today:- ' + addTxt.value + '<br><br>'
   }else if (i == 11) {
     all += '🕔 math study from :- ' + addTxt.value + '<br><br>'
   }else if (i == 12) {
     all += '🕕 math study To :- ' + addTxt.value + '<br><br>'
   }else if (i == 13) {
     all += '🍰 You will get this reward:- ' + addTxt.value + '<br><br>'
   }
   
    addTxt.value = '';
  }
    
    notesObj.push(all);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    
   // console.log(notesObj);
  
  showNotes();
});


// Function to show elements from localStorage
const showNotes = () => {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
   // console.log(notesObj);
  }
  let html = "";
  for (var i = 0; i < notesObj.length; i++) {
    html += `  <div class="card">
        <h2 class="head">plan ${i+1} </h2>
        <hr />
        <p id='text'class="p">${notesObj[i]}
        </p>
        <button id="${i}" onclick="deleteNote(this.id)" class="Del">Mark completed</button>
          </div>     `;
  }
  let notesElm = document.getElementById("details");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show!`;
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