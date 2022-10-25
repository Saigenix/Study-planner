// Functions ---

// List of all created Sections (For validation)
let sectionsList = [];

// Generate Dynamic Cards
const createSection = (sectionName) => {
  const div = document.createElement('div');
  div.classList.add(sectionName);

  const html = `
    <button
      id="delete-section"
      onclick="deleteSection(event, '${sectionName}')"
    >
      Delete Section
    </button>
    <br/>
    <label for="subject-name">Subject Name:</label>
    <textarea
      id="subject-name"
      name="subject-name"
      disabled=true
      placeholder="Write your subject name">${sectionName}</textarea>
    <textarea
      id="subject-description"
      name="subject-description"
      placeholder="Write here today's targeted study of that subject" style="height:200px"></textarea>

    <label for="study-type">Study Type:</label>
    <select id="study-type" name="study-type">
      <option value="Practice">Practice</option>
      <option value="Learn/Revise">Learn/Revise</option>
      <option value="Practice and Revise">Both</option>
    </select>
    
    <label for="time-from">Time From</label>
    <input type="time" id="time-from" name="time-from">
    <label for="time-to">time To</label>
    <input type="time" id="time-to" name="time-to">`;
  div.innerHTML = html;

  const sections = document.getElementById('insert-sections');
  sections.appendChild(div);
  sectionsList.push(sectionName);
}

// Delete Section
const deleteSection = (e, subjectName) => {
  e.preventDefault();
  const section = document.getElementById("insert-sections").getElementsByClassName(subjectName)[0];
  document.getElementById('insert-sections').removeChild(section);
  sectionsList = sectionsList.filter(section => section !== subjectName);
}

// Save Plan
const savePlan = () => {  
  const date = document.getElementById("date").value;
  const reward = document.getElementById("reward").value;
  let response = '';

  response += `date: ${date} <br><br>`;

  // Get all sections
  sectionsList.map((section) => {
    const subject = document.getElementById('insert-sections').getElementsByClassName(section)[0];
    const inputs = [];
   
    if (!subject) return;

    // Get all inputs for each section
    inputs.push(
      ...subject.getElementsByTagName('textarea'),
      ...subject.getElementsByTagName('input'),
      ...subject.getElementsByTagName('select')
    );
  
    // Add values to response string
    inputs.map((input, index) => {
      response += `${input.name}: ${input.value} <br>${index === inputs.length - 1 ? '<br>': ''}`;
    })

    // Delete section once values are added
    deleteSection(event, section);
  })
  
  response += `reward: ${reward} <br>`;
  // Update response to localstorage
  updateLocalStorage(response);
}

// Update Local Storage
const updateLocalStorage = (response) => {
  let notes = localStorage.getItem("notes");
  let notesObj = [];
  if (notes) notesObj = JSON.parse(notes);
  notesObj.push(response);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showPlan();
}

// Show Plan
const showPlan = () => {
  let notes = localStorage.getItem("notes");
  let notesObj = [];
  if (notes) {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.map((note, index) => {
    html += `
    <div class="card">
      <h2 class="head"> 📓 plan ${index+1} </h2>
      <hr />
      <p id='text'class="p"> 🧾 ${note}</p>
      <button id="${index}" onclick="markAsDone(this.id)" class="Del">
        Mark completed ✅
      </button>
      <button id="${index}" class="Del" onclick="saveForFuture(this.id)">
        Save For future ❕
      </button>
    </div>`;
  })

  let notesElm = document.getElementById("details");

  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show!! 
    `;
  }
}

// Mark Plan as Done
const markAsDone = (index) => {
  const notes = localStorage.getItem("notes");
  let notesObj = [];
  if (notes) {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showPlan();
}

// Save Plan for Future
const saveForFuture = (id) => {
  alert('plan successfully saved ! click \"view saved plans\" to see plans');
  let savedNotes = localStorage.getItem("notesave");
  let allNotes = localStorage.getItem("notes");
  if (savedNotes) savedNotes = JSON.parse(savedNotes);
  else savedNotes = [];

  if (!allNotes) return;
  allNotes = JSON.parse(allNotes);
  savedNotes.push(allNotes[id]);
  localStorage.setItem("notesave", JSON.stringify(savedNotes));
}

// Event Listeners ---

// Generate Sections
document.querySelector("#generate-sections").addEventListener('click', (e) => {
  e.preventDefault();
  const sectionName = document.getElementsByName('section-name')[0].value;

  if (sectionsList.includes(sectionName)) {
    alert('Section already exists! Try another name');
    return;
  }
  createSection(sectionName);
  
})

// Save Plan
document.querySelector("#btn1").addEventListener('click', (e) => {
  e.preventDefault();
  savePlan();
});

// On Load ---
window.onload = showPlan();
