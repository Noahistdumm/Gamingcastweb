'use scrict'
        const passwort2 = 190601;
        const Username2 = 1;
        let username='';
        let passwort='';
        username = prompt('UserName:', username);
        const Ablehnungstext1 = 'Falscher Username';
        passwort = prompt('Passwort:', passwort);
        const Ablehnungstext2 = 'Falsches Passwort';
    if (passwort == passwort2) {
       text= (`Hallo ${name}!`);
    }
    else {
        text= ('Falsches Passwort');
        username = prompt('Username:', username);
        passwort = prompt('Passwort:', username);
        if (passwort == passwort2) {
        text= (`Hallo ${name}!`);
        }
        else {
        text= ('Falsches Passwort');
        }
        alert(text);
    }


    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#ueber').addEventListener('click', Klickvaerarbeitung);
    function Klickvaerarbeitung () {
        document.querySelector('output').textContent +=  'Hi, ich bin Thomas und 13 Jahre alt. Ich lerne gerade Programmieren also wundert euch nicht wenn diese Seite so komisch undordentlich aufgebaut ist... Auf dieser Seite probiere ich einfach ein wenig rum und ja. Guckt euch gerne alles an! Falls es was zum angucken gibt. LG!';

        }
    }
)
document.addEventListener('DOMContentLoaded', function () {
const taskList = document.querySelector('#taskList');
const newtaskInput = document.querySelector('#newtask');
const addButton = document.querySelector('#add');
let taskIdCounter = 0;

addButton.addEventListener('click', function () {
    const task = newtaskInput.value.trim();
    if (!task) return;

    const taskId = `todo-${taskIdCounter}`;
    taskList.insertAdjacentHTML('beforeend',
        `
   <li>
    <input type="checkbox" id="${taskId}">
    <label for="${taskId}">
    <span class="text">${task}</span>
    </label>
    <button aria-label="Delete task: ${task}" class="delete-button">Kommentar Löschen</button>
   </li>
   `
    );
    newtaskInput.value = '';
});
    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-button')) {
        const taskItem = event.target.closest('li');
        taskItem.remove();
        }
       });
    });
