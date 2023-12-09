
let namesHTML ='';
namesOfSurah.forEach((name)=>{
    namesHTML +=`<div class="item">
    <div class="sequence-ayahs">
        ${name.number}
    </div>
    <div class="surah-name-english">
        <div class="heading">${name.firstname}</div>
        <div class="subtitle">${name.subname}</div>
    </div>
    <div class="surah-name-arabic">
        <div class="heading">
            ${name.image}
        </div>
        <div class="subtitle">
            ${name.ayahs}
        </div>
    </div>
</div>`
});
document.querySelector(".container").innerHTML=namesHTML;

