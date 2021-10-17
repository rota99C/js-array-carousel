// array forniti da Fabio
/*const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];*/
/*  const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]*/
/*const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]*/

// creo l'array delle immagini
let images = [];
images[0] = 'img/01.jpg';
images[1] = 'img/02.jpg';
images[2] = 'img/03.jpg';
images[3] = 'img/04.jpg';
images[4] = 'img/05.jpg';

//creo l'array dei luoghi
const places = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

//creo l'array delle descrizioni
const descriptions = [];
descriptions[0] = "La Svezia è un paese scandinavo che comprende migliaia di isole lungo la costa e laghi nell'entroterra, oltre a vaste foreste boreali e rilievi glaciali. Le città principali, la capitale Stoccolma a est e Göteborg e Malmö a sud-ovest, sono tutte costiere.";
descriptions[1] = "La Svizzera è un paese montuoso dell'Europa Centrale dove si trovano numerosi laghi, paesini e i picchi delle Alpi. Le sue città ospitano centri storici medievali, con monumenti come la Torre dell'orologio (Zytglogge) nella capitale Berna, e il ponte ricoperto di legno della cappella di Lucerna. Il paese è conosciuto anche per i resort sciistici e i sentieri escursionistici.";
descriptions[2] = "La Gran Bretagna è un'isola separata dal continente europeo dal canale della Manica e dal mare del Nord. L’isola comprende le nazioni di Inghilterra, Scozia e Galles. La sua lunga storia è visibile nei siti preistorici come Stonehenge, risalente al Neolitico, e nei castelli medievali, tra cui Warwick, Dover e Caernarfon.";
descriptions[3] = "La Germania è un Paese dell'Europa Occidentale con oltre due millenni di storia e un paesaggio caratterizzato da foreste, fiumi, catene montuose e spiagge affacciate sul Mare del Nord. Berlino, la capitale, ha una vivace scena artistica e notturna e ospita inoltre la Porta di Brandeburgo e numerosi siti risalenti alla seconda guerra mondiale.";
descriptions[4] = "I Caraibi sono una vasta regione geografica delle Americhe che comprende tutti i paesi bagnati dal Mare Caraibico, cioè tutte le isole delle Antille e i litorali di alcuni paesi continentali del centro e sud America che si affacciano su di questo mare.";



let btnDown = document.querySelector(".down")
let btnUp = document.querySelector(".up")
let img = document.getElementById("img-hero")
//let imgSide = document.querySelector(".img-side")
// console.log(imgSide);
//let imgSideSrc = imgSide.getAttribute("src")
// console.log(imgSideSrc);






for (let i = 0; i < images.length; i++) {

    btnDown.addEventListener("click", function () {

        document.querySelector(".description").innerHTML =
            "<h2>" + places[i] + "</h2>" + "<p>" + descriptions[i] + "</p>";
        img.getAttributeNode("src").value = "./assit/" + images[i];



    })

}

for (let i = images.length - 1; i >= 0; i--) {

    btnUp.addEventListener("click", function () {
        document.querySelector(".description").innerHTML =
            "<h2>" + places[i] + "</h2>" + "<p>" + descriptions[i] + "</p>";
        img.getAttributeNode("src").value = "./assit/" + images[i];

    })

}



// creo 3 array - images - places - descriptions


