
import { namesOfSurah } from "../data/namesofsurah.js";
import{arabicAudio} from "../audio/audio.js";

let namesHTML ='';

//Generating Html code for the Each Button in container

function generateHtml(){
    namesOfSurah.forEach((name)=>{
        namesHTML +=`<button class="button-item" 
        data-surah-no='${name.number}' data-surah-firstname='${name.firstname}'
        data-surah-subname='${name.subname}'>
        <div class="item">
            <div class="sequence-ayahs">
                ${name.number}
            </div>
            <div class="surah-name-english">
                <div class="heading">${name.firstname}</div>
                <div class="subtitle">${name.subname}</div>
            </div>
            <div class="surah-name-arabic">
                <div class="heading-arabic">
                    ${name.image}
                </div>
                <div class="subtitle-arabic">
                    ${name.ayahs}
                </div>
            </div>
        </div>
        </button>`
})};
generateHtml();
document.querySelector(".container").innerHTML=namesHTML;

//Ends generating;

let data='';
document.querySelectorAll(".button-item")
    .forEach((item)=>{
        item.addEventListener('click', ()=>{
            const  attribute = item.dataset.surahNo;
            const  firstname = item.dataset.surahFirstname;
            const  subname = item.dataset.surahSubname;

            localStorage.setItem('attribute',JSON.stringify(attribute));
            localStorage.setItem('firstname',JSON.stringify(firstname));
            localStorage.setItem('subname',JSON.stringify(subname));
            window.location.href="/html/surahpage.html";
        })
});

let value = true;
setInterval(()=>{
    const data = document.querySelector('.logo-image');
    if(value == true){
        data.classList.add('blink-logo');
        value=false;
    }else{
        data.classList.remove('blink-logo');
        value=true;
    }
},2000);


//searchbox code;

const resultbox=document.querySelector('.search-display');
const inputbox=document.querySelector('.input-search');

let surahArray=[];
namesOfSurah.forEach((data)=>{
    surahArray.push(data.firstname);
});

console.log(surahArray);
inputbox.onkeyup = function(){
    let result= [];
    let resultHtml='';
    let input = inputbox.value;
    if(input.length){
        result = surahArray.filter((keyword)=>{
            return keyword.includes(input);
        });
    }
    result.forEach((data)=>{
        resultHtml += `<li>${data}</li>`;
    })
resultbox.innerHTML=resultHtml ;   
}






