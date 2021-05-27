let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
  var clickCounter = 0;
  var section = document.createElement('section');
  var paragraph = document.createElement('p');
  var removebtn = document.createElement('button');
  var removeIcon = document.createElement('i');
  removeIcon.setAttribute('class', 'fas fa-trash-alt');
  var doneIcon = document.createElement('i');
  doneIcon.setAttribute('class', 'fas fa-check-circle');
  var donebtn = document.createElement('button');
  //removebtn.innerText = 'Remove';
  //donebtn.innerText = 'Mark Done';
  section.classList.add('section-styling');
  removebtn.classList.add('remove-button-styling');
  donebtn.classList.add('done-button-styling');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  removebtn.appendChild(removeIcon);
  donebtn.appendChild(doneIcon);
  section.appendChild(paragraph);
  section.appendChild(donebtn);
  section.appendChild(removebtn);
  toDoContainer.appendChild(section);
  inputField.value = '';

  donebtn.addEventListener('click', function(){
    if (clickCounter == 0) {
      paragraph.style.textDecoration = 'line-through';
      paragraph.style.textDecorationColor = 'red';
      paragraph.style.textDecorationThickness = '5px';
      clickCounter++;
    }
    else {
      paragraph.style.textDecoration = 'none';
      clickCounter = 0;
    }
  })

  removebtn.addEventListener('click', function(){
    toDoContainer.removeChild(section);
  })
})
