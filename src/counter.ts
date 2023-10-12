export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  let ghostCounter: number = 0;
  let zombieCounter: number = 0;
  let pumpCount: number = 0;
  const ghostButton = document.querySelector<HTMLButtonElement>("#btn2")!;
  const zombieButton = document.querySelector<HTMLButtonElement>("#btn3")!;

  function animate() {
    counter++;

    if (counter >= 1000) {
      ghostButton.disabled = false;
    } else {
      ghostButton.disabled = true;
    }

    if(ghostCounter >= 10){
      zombieButton.disabled = false;
    } else {
      zombieButton.disabled = true;
    }

    pumpCount = Math.round(counter / 100);
    ghostButton.innerHTML = `${ghostCounter} 👻's`;
    zombieButton.innerHTML = `${zombieCounter} 🧟's`; 
    element.innerHTML = `${pumpCount} 🎃's`;
    requestAnimationFrame(animate);
  }

  element.addEventListener("click", () => {
    counter++;
    window.requestAnimationFrame(animate);
  });

  ghostButton.addEventListener("click", () => {
    counter -= 1000;
    ghostCounter++;
    ghostButton.innerHTML = `${ghostCounter} 👻's`;
  });

  zombieButton.addEventListener("click", () => {
      ghostCounter -= 10;
      zombieCounter++;
      zombieButton.innerHTML = `${zombieCounter} 🧟's`;
    });
}
