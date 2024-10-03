// Poruke koje se automatski mijenjaju
const messages = [
    "Volim te odavdje do Mjeseca - 384,400 km",
    "Volim te odavdje do Sunca - 149,600,000 km",
    "Volim te odavdje do svih zvijezda i nazad",
    "Volim te beskonačno!",
    "Volim te od Zenice do Sarajeva - 54.93 km",
    "Volim te od Moskve do New Yorka - 7,501.47 km",
    "Volim te odavdje do Marsa - 225,000,000 km",
    "Volim te odavdje do Plutona - 4,280,000,000 km",
    "Volim te više od svih zvijezda na nebu - procenjeno na 100 milijardi!",
    "Volim te do najdublje tačke okeana - 10,994 metara (Marijanska brazda)",
    "Volim te odavdje do najdalje poznate galaksije - 13,8 milijardi svjetlosnih godina",
    "Volim te do kraja svijeta - 40,075 km (obim Zemlje)",
    "Volim te kao što Sunce voli Zemlju - 149,600,000 km",
    "Volim te više nego kilometara koliko smo zajedno prošli - svaki korak je vrijedan",
    "Volim te kao što kiša voli zemlju - uvijek se vraća",
    "Volim te toliko koliko ima zraka u ovoj sobi - nevidljivo ali svuda oko nas"
];

let currentMessageIndex = 0;
const loveMessageElement = document.getElementById('loveMessage');

function changeMessage() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    loveMessageElement.textContent = messages[currentMessageIndex];
}

setInterval(changeMessage, 5000); // Mijenja poruke svakih 5 sekundi

// Citati koji se mijenjaju kada klikneš na dugme
const quotes = [
    "\"Tvoj smijeh - Kad se nasmiješ moj svijet postaje ljepše mjesto\"",
    "\"Svaki trenutak s tobom je moj razlog da sutra ustanem\"",
    "\"Ti si moj danas i svi moji sutra.\"",
    "\"Iako nisam vjerovala u Boga, znam da ga ima čim je tebe poslao meni\"",
    "\"Ti si svaki moj san, i sve što sanjam je s tobom\""
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById('quote');
const nextQuoteBtn = document.getElementById('nextQuoteBtn');

nextQuoteBtn.addEventListener('click', function() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentQuoteIndex];
});

document.querySelectorAll('.activity-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const activity = event.target.textContent.trim();
        
        if (activity === '🍕 Jesti pizzu') {
            window.open('https://www.google.com/maps/search/pizzerije+u+Sarajevu/', '_blank');
        } 
        if (activity === '🎥 Ići u kino') {
            window.open('https://www.blitz-cinestar-bh.ba', '_blank');
        } 

        if (activity === '🚶‍♂️ Šetati') {
            window.open('https://www.google.com/maps/search/places+to+walk+in+Sarajevo', '_blank');
        } 

        if (activity === '🎭 U pozorište') {
            window.open('https://pozorista.ba', '_blank');
        } 
        if (activity === '🛌 U krevet') {
            window.open('https://www.bbc.com/serbian/lat/svet-51622970', '_blank');
        } 

        if (activity === '🛍️ U shopping') {
            window.open('https://www.google.com/search?client=opera-gx&hs=zCD&sca_esv=a88d17ea90427281&tbs=lf:1,lf_ui:10&tbm=lcl&sxsrf=ADLYWIJ0RqS6t83k3Nn3xoBTuGg4oOsSnQ:1727990586183&q=sarajevo+shopping&rflfq=1&num=10&sa=X&ved=2ahUKEwi58cHIkvOIAxUWxwIHHTZ2Dv8QjGp6BAgiEAE&biw=1495&bih=763&dpr=1.25#rlfi=hd:;si:;mv:[[43.8617558,18.439216],[43.82153230000001,18.3036621]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10', '_blank');
        } 

        if (activity === '🥞 Praviti palačinke') {
            window.open('https://krenizdravo.dnevnik.hr/prehrana/zdravi-recepti/palacinke-od-heljde-zdrave-palacinke-bez-glutena-od-heljdinog-brasna', '_blank');
        } 
        if (activity === '🍉 Na piknik') {
            window.open('https://sarajevo.travel/ba/sta-raditi/obilazak/priroda-u-sarajevu', '_blank');
        } 

        if (activity === '🏛️ Ići u muzej') {
            window.open('https://www.sarajevo.ba/bs/article/5775/muzeji', '_blank');
        } 

        if (activity === '🌌 Gledati zvijezde') {
            window.open('https://adorion.ba', '_blank');
        } 
        if (activity === '💆‍♂️ Spa') {
            window.open('https://www.google.com/search?client=opera-gx&hs=bwX&sca_esv=a88d17ea90427281&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ADLYWIKMgGEmqegF2pBOwGEOLermqRL5Wg:1727990853479&q=spa+sarajevo&rflfq=1&num=10&sa=X&ved=2ahUKEwiUs_zHk_OIAxVRxQIHHRJAPXEQjGp6BAgmEAE&biw=1495&bih=763&dpr=1.25#rlfi=hd:;si:;mv:[[43.870041,18.474366399999997],[43.7833908,18.0837915]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2', '_blank');
        } 

        if (activity === '❓ Tvoj prijedlog?') {
            const email = "ajlabrdarevic@gmail.com"; 
        const subject = "Moj prijedlog";
        const body = `Želim: `;
        
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } 
       
    });
});
