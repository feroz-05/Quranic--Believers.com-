//import {attribute} from "../javascript/main.js";
//console.log("pk",attribute);

export let attributevalue=[];

const surahNumber = (JSON.parse(localStorage.getItem('attribute')));

const surahs=[{
        'arb':`1. بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ<br>
        2. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ<br>
        3. الرَّحْمَٰنِ الرَّحِيمِ<br>
        4. مَالِكِ يَوْمِ الدِّينِ<br>
        5. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ<br>
        6. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ<br>
        7. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
        `,
        //english
        'eng':`<li>Alhamdu lillaahi Rabbil 'aalameen
        <li>Ar-Rahmaanir-Raheem
        <li>Maaliki Yawmid-Deen
        <li>Iyyaaka na'budu wa lyyaaka nasta'een
        <li>Ihdinas-Siraatal-Mustaqeem
        <li>Siraatal-lazeena an'amta 'alaihim ghayril-maghdoobi 'alaihim wa lad-daaalleen`
        },
        {
        'arb':`1. قُلْ أَعُوذُ بِرَبِّ النَّاسِ<br>
        2. مَلِكِ النَّاسِ<br>
        3. إِلَٰهِ النَّاسِ<br>
        4. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ<br>
        5. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ<br>
        6. مِنَ الْجِنَّةِ وَالنَّاسِ`,

        //english
        'eng':
        `Qul a'oozu birabbin naas
        Malikin naas
        Ilaahin naas
        Min sharril waswaasil khannaas
        Allazee yuwaswisu fee sudoorin naas
        Minal jinnati wannaas`
}];

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





