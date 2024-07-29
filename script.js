let songIndex=1;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let backward=document.getElementById('backward');

let songsName=[
    "Tere Vaaste","5 Taara","Diamond","Do Gallan","Duniyaa","Excuses","No Competition","Sorry Song","Phir Aur Kya Chahiye","Waalian"
]
// play and pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
     audioElement.play();
     masterPlay.classList.remove('bx-play-circle');
     masterPlay.classList.add('bx-pause-circle');
     gif.style.opacity=1;
     document.getElementById(songIndex).classList.remove('bx-play-circle');
     document.getElementById(songIndex).classList.add('bx-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('bx-pause-circle');
        masterPlay.classList.add('bx-play-circle');
        document.getElementById(songIndex).classList.remove('bx-pause-circle');
    document.getElementById(songIndex).classList.add('bx-play-circle');
        gif.style.opacity=0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100 ;
})


const  makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('bx-pause-circle');
        element.classList.add('bx-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
     makeAllPlays();
     if(audioElement.paused ){
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('bx-play-circle');
        e.target.classList.add('bx-pause-circle');
        audioElement.src='songs/' + songIndex +'.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('bx-play-circle');
        masterPlay.classList.add('bx-pause-circle'); 
        gif.style.opacity=1;
        document.getElementById('songtitle').innerText=songsName[songIndex-1];
     }
     else{
        audioElement.pause();
        e.target.classList.remove('bx-pause-circle');
        e.target.classList.add('bx-play-circle');
        masterPlay.classList.remove('bx-pause-circle');
        masterPlay.classList.add('bx-play-circle');
        gif.style.opacity=0;
     }
    
    })
   
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex==10){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src='songs/' + songIndex +'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    makeAllPlays();
    document.getElementById(songIndex).classList.remove('bx-play-circle');
    document.getElementById(songIndex).classList.add('bx-pause-circle');
    masterPlay.classList.remove('bx-play-circle');
    masterPlay.classList.add('bx-pause-circle'); 
    gif.style.opacity=1;
    document.getElementById('songtitle').innerHTML=songsName[songIndex-1];
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex-=1;
    }
    audioElement.src='songs/' + songIndex +'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    makeAllPlays();
    document.getElementById(songIndex).classList.remove('bx-play-circle');
    document.getElementById(songIndex).classList.add('bx-pause-circle');
    masterPlay.classList.remove('bx-play-circle');
    masterPlay.classList.add('bx-pause-circle'); 
    gif.style.opacity=1;
    document.getElementById('songtitle').innerText=songsName[songIndex-1];
})