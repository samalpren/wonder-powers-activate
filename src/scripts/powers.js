let flight = document.querySelector("#flight")

const flightHandlerFunction = (enabled) => {
  flight.classList.replace("disabled", enabled);
}

document.querySelector("#activate-flight").addEventListener("click", function() {
  flightHandlerFunction("enabled");
});

let mind = document.querySelector("#mindreading")
let xRay = document.querySelector("#xray")

const mindHandlerFunction = (enabled) => {
  mind.classList.replace("disabled", enabled);
}
document.querySelector("#activate-mindreading").addEventListener("click", function() {
  mindHandlerFunction("enabled");
});

const xRayHandlerFunction = (enabled) => {
  xRay.classList.replace("disabled", enabled);
}
document.querySelector("#activate-xray").addEventListener("click", function() {
  xRayHandlerFunction("enabled");
});

