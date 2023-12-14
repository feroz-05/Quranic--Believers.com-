//import {attribute} from "../javascript/main.js";
//console.log("pk",attribute);

import {surahs} from "../data/fullsurahdata.js";
export let attributevalue=[];

const surahNumber = (JSON.parse(localStorage.getItem('attribute')));

let surahHtml='';
    const data = surahs[surahNumber-1].eng;
    surahHtml = `<ol>
    <h5>Bismillaahir Rahmaanir Raheem</h5>
        ${data}
    </ol>`
    document.querySelector(".surah").innerHTML = surahHtml;

    //function to delete the local storage value;
function deleteStorage() {
        localStorage.removeItem('attribute');
    };
    //deleteStorage();
    
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
    surahHtml = `<ol>
    <h4>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h4>
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





