//import {attribute} from "../javascript/main.js";
//console.log("pk",attribute);

import {surahs} from "../data/fullsurahdata.js";
export let attributevalue=[];

const surahNumber = (JSON.parse(localStorage.getItem('attribute')));



function deleteStorage() {
    localStorage.removeItem('attribute');
};
//deleteStorage();

let surahHtml='';
function generateHtml(){
    const data = surahs[surahNumber-1].eng;
    surahHtml = `<ol>
    <h4>Bismillaahir Rahmaanir Raheem</h4>
        ${data}
    </ol>`
    document.querySelector(".surah").innerHTML = surahHtml;

};

generateHtml();

// click on arabic and english
//this is for english button;
document.querySelector(".click-english")
    .addEventListener('click', ()=> {
        document.querySelector(".surah").classList.remove('surah-arabic');
        generateHtml();
    });


// if you click Arabic button this code;
document.querySelector(".click-arabic")
    .addEventListener('click', ()=> {
        const data = surahs[surahNumber-1].arb;
    surahHtml = `<ol>
    <h5>Bismillaahir Rahmaanir Raheem</h5>
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
        ${data}
    </ol>`
    document.querySelector(".surah").innerHTML = surahHtml;

    });





