var input = document.querySelector('#task');
var btn = document.querySelector('#liveToastBtn');
var list = document.querySelector('#list');

// add item 
btn.addEventListener('click', newElement);
function newElement() {
    var text = input.value;
    if(text === "") {
        $(document).ready(function(){
            $('.error').toast('show');
        });
        return;
    }
    if(text != ""){
        saveValue(text);
        var li = document.createElement('li');
        li.innerHTML = text;
        var a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute("style", "float: right; color: black;");
        a.innerHTML = '<i class="fas fa-trash-alt"></i>';
        li.appendChild(a);
        list.appendChild(li);
        $(document).ready(function(){
            $('.success').toast('show');
        });
        input.value = "";
    }
}

// delete item
list.addEventListener('click', deleteItem);
function deleteItem(e) {
    if(e.target.className === 'fas fa-trash-alt') {
        e.target.parentElement.parentElement.remove();
        removeFromLocal();
    }
    if(list.length === 0) {
        list.setAttribute("style", "display: none;");
    }
}

// checked item
list.addEventListener('click', checked);
function checked(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}

// save local
function saveValue(text) {
    let todos;
    if(localStorage.getItem('key') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('key'));
    }

    todos.push(text);
    localStorage.setItem('key', JSON.stringify(todos));
}

// get data from local
document.addEventListener('DOMContentLoaded', getToDo);
function getToDo() {
    let todos;
    if(localStorage.getItem('key') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('key'));
    }

    todos.forEach(function(text){
        var li = document.createElement('li');
        li.innerHTML = text;
        var a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute("style", "float: right; color: black;");
        a.innerHTML = '<i class="fas fa-trash-alt"></i>';
        li.appendChild(a);
        list.appendChild(li);
    })
}

// remove data from local
function removeFromLocal(text) {
    let todos;
    if(localStorage.getItem('key') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('key'));
    }

    const data = text;
    todos.splice(todos.indexOf(data),1);
    localStorage.setItem('key', JSON.stringify(todos));
}