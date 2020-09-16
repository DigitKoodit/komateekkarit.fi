import React from 'react';

const Fuksipassi = () => (
    <div className="Fuksipassi">
    <h1>Fuksipassi 2020</h1>
    <p>Fuksipassi on teekkarifukseille opiskelun alkuvaiheessa jaettava passi, joka sisältää erilaisia vuoden aikana suoritettavia tehtäviä. Täytettyä fuksipassia vastaan saa vappuaattona painaa päähänsä teekkarilakin sekä teekkarin arvonimen.</p>
    <p>Fuksipassista on suoritettava kaikki pakolliset ja kolme kuudesta harrastepisteestä. Puuttuvien pisteiden korvaamista voi anella lisäpisteisiin vedoten.</p>
    <p>Oikeudet muutoksiin pidätetään ja ohjeistuksia voidaan tilanteen niin vaatiessa vielä muokata.</p>
    <h2 id="pakolliset-pisteet">Pakolliset pisteet</h2>
    <h4 id="virallinen-teekkaripiste">Virallinen teekkaripiste</h4>
    <p>Osallistu oman kiltasi syys- tai kevätkokoukseen.</p>
    <h4 id="iso-tapahtumapiste">Iso tapahtumapiste</h4>
    <p>Osallistu isompaan teekkaritapahtumaan, kuten TiTeenien taistot, RekomBIOnaatio, vuosijuhlat, teekkariexcursiot jne.</p>
    <h4 id="tapahtumapiste-3-">Tapahtumapiste (3)</h4>
    <p>Mikä tahansa turkulainen teekkaritapahtuma.</p>
    <h4 id="teekkarilaulupiste">Teekkarilaulupiste</h4>
    <p>Ikuisen teekkarin laulun sekä Teekkarihymnin sanojen muistaminen, esitetään tuutorille tai teekkarikillan/TKn hallituslaiselle.</p>
    <h4 id="haalaripiste">Haalaripiste</h4>
    <p>Edusta oman kiltasi haalareissa.</p>
    <h4 id="hankintapiste">Hankintapiste</h4>
    <p>Osallistu kiltasi irtaimiston hankintaan tai palvelujen pystyttämiseen.</p>
    <h4 id="opintopiste">Opintopiste</h4>
    <p>Nettiopsussa näkyy noppia.</p>
    <h4 id="wappulehtipiste">Wappulehtipiste</h4>
    <p>Juttu/grafiikka/sisältöä HYVÄKSYTYSTI lehteen + 5 lehden myynti TAI 15 lehden myynti</p>
    <h2 id="harrastepisteet-suoritettava-3-6">Harrastepisteet, suoritettava 3 / 6</h2>
    <h4 id="nakkipiste">Nakkipiste</h4>
    <p>Tarjoileminen sitseillä/vuosijuhlilla, siivoaminen tapahtuman jälkeen, lipunmyynti bileissä, askartelu, roudaus…</p>
    <h4 id="teekkarikulttuuripiste">Teekkarikulttuuripiste</h4>
    <p>Teekkarikulttuuriteko. Tee jäynä, tuo oman alasi teekkarikulttuuria Turkuun, jne.</p>
    <h4 id="urheilupiste">Urheilupiste</h4>
    <p>Urheilutapahtumaan osallistuminen: kyykkä, futis, mikä ikinä.</p>
    <h4 id="laulupiste">Laulupiste</h4>
    <p>Karaoken laulaminen, omatoiminen sooloesitys tai jokin muu yhtä yllätyksellinen ja mahtipontinen äänijänteiden käyttö. Laulupisteen voi myös tienata kehittelemällä oman käyttökelpoisen sitsilaulun.</p>
    <h4 id="ompelupiste">Ompelupiste</h4>
    <p>Pisteen saa, kun haalareissa on ITSE ommeltuna (ei liimattuna) vähintään 30 merkkiä.</p>
    <h4 id="kerhopiste">Kerhopiste</h4>
    <p>Osallistuminen jonkun killan jonkin kerhon tapahtumaan. Pisteen suorittaminen vaatii kolme (3) käyntikertaa.</p>
    <h4 id="lis-piste">Lisäpiste</h4>
    <p>Näiden pisteiden avulla voi tarvittaessa neuvotella puuttuvien pisteiden korvaamisesta.</p>
    </div>
    );
    
    const Link = ({ href, children }) => (
        <a target="_blank" href={href}>
        {children}
        </a>
        );
        
        export default Fuksipassi;
        