var foto = document.getElementById("foto");
var knopVhod = document.getElementById("vhod");
var knopBibl = document.getElementById("bibl");
var knopVihod = document.getElementById("vihod");
var knopVerh = document.getElementById("verh");
var knopStolov = document.getElementById("stolov");
var knopVihod2 = document.getElementById("vihod2");
var knopVihod3 = document.getElementById("vihod3");
var knopVerh2 = document.getElementById("verh2");
var knopMuz = document.getElementById("muz");
var knopVihod4 = document.getElementById("vihod4");
var knopKab = document.getElementById("kab");
var knopVihod5 = document.getElementById("vihod5");
var knopVniz2 = document.getElementById("vniz2");
var knopVniz1e = document.getElementById("vniz1e");
var nazv = document.getElementById("nazv");

 knopVhod.onclick = function () {
    
    foto.src = 'img/razd.png';
    knopVhod.classList.toggle("show");
    knopBibl.classList.toggle("show");
    knopVihod.classList.toggle("show");
    knopVerh.classList.toggle("show");
    knopStolov.classList.toggle("show");
    nazv.innerHTML = 'Раздевалка';
    


}

knopVihod.onclick = function () {
    foto.src = 'img/vhod.png';
    knopVhod.classList.toggle("show");
    knopBibl.classList.toggle("show");
    knopVihod.classList.toggle("show");
    knopVerh.classList.toggle("show");
    knopStolov.classList.toggle("show");
    nazv.innerHTML = 'Вход в Колледж';
}

knopStolov.onclick = function () {
    foto.src = 'img/stolov.png';
    knopVihod.classList.toggle("show");
    knopVerh.classList.toggle("show");
    knopStolov.classList.toggle("show");
    knopVihod2.classList.toggle("show");
    nazv.innerHTML = 'Столовая';
}

knopVihod2.onclick = function () {
    foto.src = 'img/razd.png';
    knopVihod.classList.toggle("show");
    knopVerh.classList.toggle("show");
    knopStolov.classList.toggle("show");
    knopVihod2.classList.toggle("show");
    nazv.innerHTML = 'Раздевалка';
}

knopBibl.onclick = function () {
    foto.src = 'img/bibl.png';
    knopVhod.classList.toggle("show");
    knopBibl.classList.toggle("show");
    knopVihod3.classList.toggle("show");
    nazv.innerHTML = 'Библиотека';
    
}

knopVihod3.onclick = function () {
    foto.src = 'img/vhod.png';
    knopVhod.classList.toggle("show");
    knopBibl.classList.toggle("show");
    knopVihod3.classList.toggle("show");
    nazv.innerHTML = 'Вход в Колледж';
    
}

knopVerh.onclick = function () {
    foto.src = 'img/lest1.png';
    knopVihod.classList.toggle("show");
    knopVerh.classList.toggle("show");
    knopStolov.classList.toggle("show");
    knopVerh2.classList.toggle("show");
    knopMuz.classList.toggle("show");
    knopVniz1e.classList.toggle("show");
    nazv.innerHTML = 'Второй этаж';
    
}
knopVerh2.onclick = function () {
    foto.src = 'img/tre.png';
    knopVerh2.classList.toggle("show");
    knopMuz.classList.toggle("show");
    knopKab.classList.toggle("show");
    knopVniz2.classList.toggle("show");
    knopVniz1e.classList.toggle("show");
    nazv.innerHTML = 'Третий этаж';

}

knopMuz.onclick = function () {
    foto.src = 'img/muz.png';
    knopVerh2.classList.toggle("show");
    knopMuz.classList.toggle("show");
    knopVihod4.classList.toggle("show");
    knopVniz1e.classList.toggle("show");
    nazv.innerHTML = 'Музей';

}

knopVihod4.onclick = function () {
    foto.src = 'img/lest1.png';
    knopVerh2.classList.toggle("show");
    knopMuz.classList.toggle("show");
    knopVihod4.classList.toggle("show");
    knopVniz1e.classList.toggle("show");
    nazv.innerHTML = 'Второй этаж';
}

knopKab.onclick = function () {
    foto.src = 'img/kab.png';
    knopKab.classList.toggle("show");
    knopVihod5.classList.toggle("show");
    knopVniz2.classList.toggle("show");
    nazv.innerHTML = '26 кабинет';
}

knopVihod5.onclick = function () {
    foto.src = 'img/tre.png';
    knopKab.classList.toggle("show");
    knopVihod5.classList.toggle("show");
    knopVniz2.classList.toggle("show");
    nazv.innerHTML = 'Третий этаж';

}
knopVniz2.onclick = function () {
    foto.src = 'img/lest1.png';
    knopVerh2.classList.toggle("show");
    knopMuz.classList.toggle("show");
    knopKab.classList.toggle("show");
    knopVniz2.classList.toggle("show");
    knopVniz1e.classList.toggle("show");
    nazv.innerHTML = 'Второй этаж';
}

knopVniz1e.onclick = function () {
    foto.src = 'img/razd.png';
    knopVihod.classList.toggle("show");
    knopVerh.classList.toggle("show");
    knopStolov.classList.toggle("show");
    knopVerh2.classList.toggle("show");
    knopMuz.classList.toggle("show");
    knopVniz1e.classList.toggle("show");
    nazv.innerHTML = 'Раздевалка';
}