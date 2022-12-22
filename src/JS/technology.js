import { adicionarAcaoDeClick } from "./menu.js";

const vehicle = {
    image: document.querySelector("main .main-container .img-container .vehicle-img"),
    infos: document.querySelector("main .main-container .text-container .technologies-infos .vehicle-infos")
};

const spaceport = {
    image: document.querySelector("main .main-container .img-container .spaceport-img"),
    infos: document.querySelector("main .main-container .text-container .technologies-infos .spaceport-infos")
};

const capsule = {
    image: document.querySelector("main .main-container .img-container .capsule-img"),
    infos: document.querySelector("main .main-container .text-container .technologies-infos .capsule-infos")
};

let technologies = [vehicle, spaceport, capsule];

const navigationButtons = document.querySelectorAll("main .main-container .navigation-buttons div");

adicionarAcaoDeClick(navigationButtons, technologies);