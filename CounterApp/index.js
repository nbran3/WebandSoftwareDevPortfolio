const decBut = document.getElementById('decBut');
const incBut = document.getElementById('incBut');
const resetBut = document.getElementById('resetBut');
const counterLabel = document.getElementById('counterLabel');

let count = 0;

incBut.onclick = function(){
    count++;
    counterLabel.textContent = count;
}

decBut.onclick = function(){
    count--;
    counterLabel.textContent = count;
}

resetBut.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}
