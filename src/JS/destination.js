import {adicionarAcaoDeClick} from "./menu.js"

const moon = {
    image: document.querySelector("main .image-area .moon-img"),
    infos: document.querySelector("main .destination-infos-area .destination-infos-container.moon-infos")
};

const mars = {
    image: document.querySelector("main .image-area .mars-img"),
    infos: document.querySelector("main .destination-infos-area .destination-infos-container.mars-infos")
};

const europa = {
    image: document.querySelector("main .image-area .europa-img"),
    infos: document.querySelector("main .destination-infos-area .destination-infos-container.europa-infos")
};

const titan = {
    image: document.querySelector("main .image-area .titan-img"),
    infos: document.querySelector("main .destination-infos-area .destination-infos-container.titan-infos")
};

let destinations = [moon, mars, europa, titan];

const navButtons = document.querySelectorAll("main .destination-infos-area nav ul li");

adicionarAcaoDeClick(navButtons, destinations);