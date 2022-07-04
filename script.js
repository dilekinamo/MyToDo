var count=0;
function addNewItem(e){
    const pp=document.createElement("p");
    pp.addEventListener("dragstart",drag);
    pp.id="newP"+count;count++;
    pp.appendChild(document.createTextNode(document.getElementById("inputField").value));
    pp.classList="newTasks";
    pp.draggable="true";
    waitingCol.appendChild(pp);

    const a = document.createElement("a");
    a.classList = 'delete-item float-end';
    a.setAttribute('href', '#');
    a.style.backgroundColor="white";
    a.addEventListener("click",beniSil);
    a.innerHTML = '<i class="bi bi-x-circle"></i>';
    pp.appendChild(a);

}
function beniSil(e){
e.preventDefault();
console.log("beniSil")
e.target.parentElement.parentElement.remove();
}

function deleteAll(e){
    while(waitingCol.firstChild){
        waitingCol.removeChild(waitingCol.firstChild);
    }
    while(processCol.firstChild){
        processCol.removeChild(processCol.firstChild);
    }
    while(readyCol.firstChild){
        readyCol.removeChild(readyCol.firstChild);
    }
}

function allowDrop(e) {
        e.preventDefault();
      }

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}