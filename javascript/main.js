
import { namesOfSurah } from "../data/namesofsurah.js";
let namesHTML ='';

//Generating Html code for the Each Button in container

function generateHtml(){
    namesOfSurah.forEach((name)=>{
        namesHTML +=`<button class="button-item">
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

const elements = document.querySelectorAll(".button-item");

    elements.forEach((element)=>{
        element.addEventListener('click', ()=>{
            window.location.href="/html/surahpage.html";
            console.log("working");
    })
    
});







