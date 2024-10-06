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

nextQuoteBtn.addEventListener('click', function () {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentQuoteIndex];
});

document.querySelectorAll('.activity-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const activity = event.target.textContent.trim();

        if (activity === '🍕 Pizza') {
            window.open('https://www.google.com/maps/search/pizzerije+u+Sarajevu/', '_blank');
        }
        if (activity === '🎥 Kino') {
            window.open('https://www.blitz-cinestar-bh.ba', '_blank');
        }

        if (activity === '🚶‍♀️ Šetati') {
            window.open('https://www.google.com/maps/search/places+to+walk+in+Sarajevo', '_blank');
        }

        if (activity === '🎭 Pozorište') {
            window.open('https://pozorista.ba', '_blank');
        }
        if (activity === '🛌 Krevet') {
            window.open('https://www.24sata.hr/lifestyle/uskladite-pozu-za-spavanje-za-vise-bliskosti-i-ugode-u-krevetu-830811', '_blank');
        }

        if (activity === '🛍️ Shopping') {
            window.open('https://www.google.com/search?client=opera-gx&hs=zCD&sca_esv=a88d17ea90427281&tbs=lf:1,lf_ui:10&tbm=lcl&sxsrf=ADLYWIJ0RqS6t83k3Nn3xoBTuGg4oOsSnQ:1727990586183&q=sarajevo+shopping&rflfq=1&num=10&sa=X&ved=2ahUKEwi58cHIkvOIAxUWxwIHHTZ2Dv8QjGp6BAgiEAE&biw=1495&bih=763&dpr=1.25#rlfi=hd:;si:;mv:[[43.8617558,18.439216],[43.82153230000001,18.3036621]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10', '_blank');
        }

        if (activity === '🥞 Palačinke') {
            window.open('https://krenizdravo.dnevnik.hr/prehrana/zdravi-recepti/palacinke-od-heljde-zdrave-palacinke-bez-glutena-od-heljdinog-brasna', '_blank');
        }
        if (activity === '🍉 Piknik') {
            window.open('https://sarajevo.travel/ba/sta-raditi/obilazak/priroda-u-sarajevu', '_blank');
        }

        if (activity === '🏛️ Muzej') {
            window.open('https://www.sarajevo.ba/bs/article/5775/muzeji', '_blank');
        }

        if (activity === '🌌 Zvijezde') {
            window.open('https://adorion.ba', '_blank');
        }

        if (activity === '💆‍♂️ Spa') {
            window.open('https://www.google.com/search?client=opera-gx&hs=bwX&sca_esv=a88d17ea90427281&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ADLYWIKMgGEmqegF2pBOwGEOLermqRL5Wg:1727990853479&q=spa+sarajevo&rflfq=1&num=10&sa=X&ved=2ahUKEwiUs_zHk_OIAxVRxQIHHRJAPXEQjGp6BAgmEAE&biw=1495&bih=763&dpr=1.25#rlfi=hd:;si:;mv:[[43.870041,18.474366399999997],[43.7833908,18.0837915]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2', '_blank');
        }

        if (activity === '🍳 Kuhati') {
            window.open('https://www.coolinarika.com', '_blank');
        }

        if (activity === '🎵 Muzika') {
            alert('Idi na Gmail/\nEmail: jasariajla1005@gmail.com\nPassword: JasarAjla10.05\nKada se uspješno prijaviš, javi mi da bih popravila kod!\nAko ti je lakše, pošaljem ti podatke u chatu!');
        }

        if (activity === '🍿 Film') {
            alert('Idi na Gmail/\nAko si se već prijavio na Google account, samo se prijavi sa njim!\nKada se uspješno prijaviš, javi mi da bih popravila kod!\nAko ti je lakše, pošaljem ti podatke u chatu!');
        }

        if (activity === '📋 Bucket List') {
            alert('Idi na ovaj link: https://www.bucketlist.net/\nEmail: jasariajla1005@gmail.com\nPassword: JasarAjla10.05\nKada se uspješno prijaviš, javi mi da bih popravila kod!\nAko ti je lakše, pošaljem ti podatke u chatu!');
        }

        if (activity === '☕ Kafa') {
            window.open('https://www.google.com/search?client=opera-gx&hs=yfo&sca_esv=a5db118e05c2ad26&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=ADLYWIJuh0lDsIqp6-T4_XTd91b5W7Yo-Q:1728214050618&q=coffee+sarajevo&rflfq=1&num=10&sa=X&ved=2ahUKEwisydSE0_mIAxVchv0HHbSnPGMQjGp6BAgkEAE&biw=1495&bih=763&dpr=1.25#rlfi=hd:;si:;mv:[[43.861583499999995,18.4423486],[43.849895,18.3721547]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!2m1!1e2!2m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:9', '_blank');
        }

        if (activity === '🎧 Koncert') {
            window.open('https://www.kupikartu.ba/karte/kategorija/2', '_blank');
        }
        if (activity === '🍻 Svirka') {
            window.open('https://sarajevo.travel/ba/sta-raditi/aktivnosti/izlazak', '_blank');
        }

        if (activity === '❓ Prijedlog?') {
            const email = "ajlabrdarevic@gmail.com";
            const subject = "Moj prijedlog";
            const body = `Želim: `;

            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }

    });
});
