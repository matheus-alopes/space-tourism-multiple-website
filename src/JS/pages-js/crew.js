import {adicionarAcaoDeClick} from "../clickFunction" 

const commander = {
    image: document.querySelector("main .crew-image-area .commander-img"),
    infos: document.querySelector("main .text-area .text-area-container .crew-infos .commander-infos")
};

const specialist = {
    image: document.querySelector("main .crew-image-area .specialist-img"),
    infos: document.querySelector("main .text-area .text-area-container .crew-infos .specialist-infos")
};

const pilot = {
    image: document.querySelector("main .crew-image-area .pilot-img"),
    infos: document.querySelector("main .text-area .text-area-container .crew-infos .pilot-infos")
};

const engineer = {
    image: document.querySelector("main .crew-image-area .engineer-img"),
    infos: document.querySelector("main .text-area .text-area-container .crew-infos .engineer-infos")
};

let crew = [commander, specialist, pilot, engineer];

const navigationDots = document.querySelectorAll("main .text-area .navigation-dots div");

adicionarAcaoDeClick(navigationDots, crew);