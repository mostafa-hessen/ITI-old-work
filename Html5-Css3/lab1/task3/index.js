let audio = document.getElementById("audio");
let PlayBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let shuffleBtn=document.getElementById('shuffle')
let repeatBtn = document.getElementById("repeat");
let musicListBtns=document.querySelectorAll('.listAudioBtn')
let theSouerceAudio=document.getElementById('theSourc')
// console.log(musicListBtns);
let listAudioObj = [
    "dream.mp3", 
    "hero.mp3", 
    "mombasa.mp3",
    "swan-lake.mp3"];




// 1)functions => play - pause - repeat - shuffle 
function playFun() {
  audio.play();
}

function pauseFun() {
  audio.pause();
  console.log("d");
}

function repeatFun() {
  audio.currentTime = 0;
  audio.play();
}
 
function shuffleFun( ) {
    theSouerceAudio.setAttribute('src',`./Audio Samples/${listAudioObj[Math.trunc(Math.random()*4)]}`)
    audio.load();
   audio.play()
}

// 1) events => play -  pause - repeat 
PlayBtn.addEventListener("click", playFun);
pauseBtn.addEventListener("click", pauseFun);
repeatBtn.addEventListener("click", repeatFun);
shuffleBtn.addEventListener("click", shuffleFun);



// 2) chosen audio
for (const key of musicListBtns) {
    console.log(key);
    key.addEventListener('click',()=>{
        theSouerceAudio.setAttribute('src',`./Audio Samples/${listAudioObj[+key.getAttribute('data-index')]}`)
         audio.load();
        audio.play()

  
    })
 }
    
 


//  3) shuffle f


 