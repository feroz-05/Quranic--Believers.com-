//import {attribute} from "../javascript/main.js";
//console.log("pk",attribute);


import { arabicAudio, englishAudio } from "../audio/audio.js";
import {surahs} from "../data/fullsurahdata.js";
import { namesOfSurah } from "../data/namesofsurah.js";
export let attributevalue=[];

const surahNumber = Number(JSON.parse(localStorage.getItem('attribute')));
//console.log(englishAudio);

// this codde is to display the surah;
let surahHtml='';
    const data = surahs[surahNumber-1].eng;
    surahHtml = `<ol>
    <h5>Bismillaahir Rahmaanir Raheem</h5>
        ${data}
    </ol>`
    document.querySelector(".surah").innerHTML = surahHtml;
//end

//this below code is used to display the names of surahFirstname;
let namesHtml =`<h3>${ namesOfSurah[surahNumber-1].number}. ${namesOfSurah[surahNumber-1].firstname}<br>
    <span>${namesOfSurah[surahNumber-1].subname}</span>
    </h3>`;
    document.querySelector(".heading-name").innerHTML=namesHtml;
//end 

    //function to delete the local storage value;
    function deleteStorage() {
        localStorage.removeItem('attribute');
    };
    //deleteStorage();



//this below code is to go prevous and next page;
    document.querySelector('.previous').addEventListener('click',()=>{
        deleteStorage();
        let attribute = '';

        if(surahNumber > 1){
            attribute = surahNumber-1;
        }
        else{
            attribute = 114;
        }
        localStorage.setItem('attribute',JSON.stringify(attribute));
        window.location.href="/html/surahpage.html";
    })
    document.querySelector('.next').addEventListener('click',()=>{
        deleteStorage();
        let attribute = '';

        if(surahNumber < 114){
            attribute = (surahNumber+1);
        }
        else{
            attribute = 1;
        }
        localStorage.setItem('attribute',JSON.stringify(attribute));
        window.location.href="/html/surahpage.html";
    })
    //end


    // code to addd audio;
    //1 arabic audio.
    const audioHtml =`<source src="${arabicAudio[surahNumber-1]}" 
    type="audio/mpeg">`;
    document.querySelector('.audio-arb').
        innerHTML=audioHtml;
    
    //2 english and arabic audio.
    const audioArbicEngHtml =`<source src="${englishAudio[surahNumber-1]}" 
    type="audio/mpeg">`;
    document.querySelector('.audio-eng-arb').
        innerHTML=audioArbicEngHtml;

    




// click on arabic and english
//this is for english button;
document.querySelector(".click-english")
    .addEventListener('click', ()=> {
        document.querySelector(".surah").classList.remove('surah-arabic');
        const data = surahs[surahNumber-1].eng;
    surahHtml = `<ol>
    <h5>Bismillaahir Rahmaanir Raheem</h5>
        ${data}
    </ol>`
    document.querySelector(".surah").innerHTML = surahHtml;
    });


// if you click Arabic button this code;
document.querySelector(".click-arabic")
    .addEventListener('click', ()=> {
        const data = surahs[surahNumber-1].arb;
    surahHtml = `<ol class="arabic-ol">
    <p>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        ${data}
    </ol>`
    document.querySelector(".surah").innerHTML = surahHtml;
    document.querySelector(".surah").classList.add('surah-arabic');
});

// if you click translation button this code;
document.querySelector(".click-translator")
    .addEventListener('click', ()=> {
        document.querySelector(".surah").classList.remove('surah-arabic');
        const data = surahs[surahNumber-1].translation;
    surahHtml = `<ol>
    <h5>In the name of Allah, Most Gracious, Most Merciful.</h5>
        ${data}
    </ol>`
    document.querySelector(".surah").innerHTML = surahHtml;
    });





