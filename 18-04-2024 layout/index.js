let header = document.getElementById("header");
let curCount = document.getElementById("curCount");
let prevEnt = document.getElementById("prevEntries");
let count = 0;
let saveCount;
function increment(){
    count += 1;
    curCount.textContent = count;
}

function save(){
    saveCount = count + " - ";

    count = 0;
    curCount.textContent = count;

    prevEnt.textContent += saveCount

}