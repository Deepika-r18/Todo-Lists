const textBox = document.getElementById('text-box');
const listContainer =  document.getElementById('list-container');

function addTask(){
    if(textBox.value === ''){
        alert('You Can Add Some Todo-List');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);
    
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    textBox.value = '';
    saveData();
}

listContainer.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem('Data', listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem('Data');
}
showList();





// 

// listContainer.addEventListener('click' ,function(e){
//     if(e.target.tagName === 'LI'){
//         e.target.classList.toggle('checked');
//         saveData()
//     }
//     else if(e.target.tagName === 'SPAN'){
//         e.target.parentElement.remove();
//         saveData()
//     }
// },false);

// function saveData(){
//     localStorage.setItem('Data', listContainer.innerHTML);
// }
// function showList(){
//     listContainer.innerHTML = localStorage.getItem('Data');
// }
// showList();