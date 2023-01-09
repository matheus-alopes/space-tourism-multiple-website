import { adicionarAcaoDeClick } from "./main.js";

const vehicle = {
    image: document.querySelector("main .img-container .vehicle-img"),
    infos: document.querySelector("main .text-container .technologies-infos .vehicle-infos")
};

const spaceport = {
    image: document.querySelector("main .img-container .spaceport-img"),
    infos: document.querySelector("main .text-container .technologies-infos .spaceport-infos")
};

const capsule = {
    image: document.querySelector("main .img-container .capsule-img"),
    infos: document.querySelector("main .text-container .technologies-infos .capsule-infos")
};

let technologies = [vehicle, spaceport, capsule];

const navigationButtons = document.querySelectorAll("main .navigation-buttons div");

adicionarAcaoDeClick(navigationButtons, technologies);

console.log(technologies);