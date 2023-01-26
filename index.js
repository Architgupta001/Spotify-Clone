console.log("Welcome to Spotify");

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let audioElement = new Audio("songs/Wo Ladki.mp3"); 
let songItem = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songItemPlay = document.getElementsByClassName("songItemPlay");

let songs = [
    {songName:"Wo-ladki - Arijit Singh" , filePath:"songs/Wo Ladki.mp3" , coverPath: "covers/wo-ladki.jpg"},
    {songName:"Mareez-E-Ishq - Arijit Singh" , filePath:"songs/Mareez-E-Ishq - Arijit Singh.mp3" , coverPath: "covers/Mareez - E - Ishq.jpg"},
    {songName:"Pehli Mohabbat - Darshan Raval" , filePath:"songs/Pehli Mohabbat-Darshan Raval.mp3" , coverPath: "covers/pehli mohabbat.jpg"},
    {songName:"Abhi Kuch Dino Se - Mohit Chauhan" , filePath:"songs/Abhi Kuch Dino Se.mp3" , coverPath: "covers/abhi kuch dino se.jpg"},
    {songName:"Saari Ki Saari - Darshan Raval" , filePath:"songs/Saari Ki Saari 2.0 - Darshan Raval.mp3" , coverPath: "covers/saari-ki-saari.jpg"},
    {songName:"Crying In the Rain - Ali Gatie" , filePath:"songs/Crying_In_The_Rain_.mp3" , coverPath: "covers/crying in the rain.jpg"},
]

songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("songItemTime")[0].innerText = songs[i].filePath.duration;
});

//Handle Play/Pause Click

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
})

//Listen Events

audioElement.addEventListener("timeupdate", ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100 ;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{ 
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

// Listen Song Item Play events

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        songIndex = index;
        audioElement.src = songs[index].filePath;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            
        }
        else{
            audioElement.pause();
            gif.style.opacity = 0;
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
            
        }

    })
})

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex++ ;
    }

    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 5;
    }
    else{
        songIndex-- ;
    }

    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})