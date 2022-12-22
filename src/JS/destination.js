const moon = {
    image: document.querySelector("main .image-area .moon-img"),
    infos: document.querySelector("main .destination-infos-area .destination-infos-container.moon-infos")
}

const mars = {
    image: document.querySelector("main .image-area .mars-img"),
    infos: document.querySelector("main .destination-infos-area .destination-infos-container.mars-infos")
}

const europa = {
    image: document.querySelector("main .image-area .europa-img"),
    infos: document.querySelector("main .destination-infos-area .destination-infos-container.europa-infos")
}

const titan = {
    image: document.querySelector("main .image-area .titan-img"),
    infos: document.querySelector("main .destination-infos-area .destination-infos-container.titan-infos")
}

let destinations = [moon, mars, europa, titan];

// const moonImage = document.querySelector("main .image-area .moon-img");
// const marsImage = document.querySelector("main .image-area .mars-img");
// const europaImage = document.querySelector("main .image-area .europa-img");
// const titanImage = document.querySelector("main .image-area .titan-img");

const navButtons = document.querySelectorAll("main .destination-infos-area nav ul li");
// const navButtonMars
// const navButtonEuropa
// const navButtonTitan

// const destinationsInfos = document.querySelectorAll("main .destination-infos-area .destination-infos-container");

// Implementar código que espera (uma Promise, provavelmente) tirar o display dos MediaElementAudioSourceNode, para só depois disso aparecer os elementos desejados

for(i=0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click",
        () => {
            for(j=0; j < navButtons.length; j++) {
                destinations[j].image.style.display = "none";
                destinations[j].infos.style.display = "none";
            }

            destinations[i].image.style.display = "block";
            destinations[i].infos.style.display = "block"; 
        }
    )
}