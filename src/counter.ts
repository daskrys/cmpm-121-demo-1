export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  let ghostCounter: number = 0;
  let zombieCounter: number = 0;
  let pumpCount: number = 0;
  let ghostPrice: number = 1000; // the pricing for this doesn't make sense except to me
  let zombiePrice: number = 10;
  const ghostButton = document.querySelector<HTMLButtonElement>("#btn2")!;
  const zombieButton = document.querySelector<HTMLButtonElement>("#btn3")!;
  const ghostLabel =
    document.querySelector<HTMLParagraphElement>("#GhostLabel")!;
  const zombieLabel =
    document.querySelector<HTMLParagraphElement>("#ZombieLabel")!;

  function animate() {
    counter++;

    if (counter >= ghostPrice) {
      ghostButton.disabled = false;
    } else {
      ghostButton.disabled = true;
    }

    if (ghostCounter >= zombiePrice) {
      zombieButton.disabled = false;
    } else {
      zombieButton.disabled = true;
    }

    pumpCount = counter / 100;
    ghostButton.innerHTML = `${ghostCounter} 👻's`;
    zombieButton.innerHTML = `${zombieCounter} 🧟's`;
    element.innerHTML = `${pumpCount.toFixed(1)} 🎃's`;
    requestAnimationFrame(animate);
  }

  element.addEventListener("click", () => {
    counter++;
    window.requestAnimationFrame(animate);
  });

  ghostButton.addEventListener("click", () => {
    counter -= ghostPrice;
    ghostPrice *= 1.15;
    ghostCounter++;
    ghostLabel.innerHTML = `1 👻 / ${(ghostPrice / 100).toFixed(2)} 🎃's`;
    ghostButton.innerHTML = `${ghostCounter} 👻's`;
  });

  zombieButton.addEventListener("click", () => {
    ghostCounter -= zombiePrice;
    zombiePrice *= 1.15;
    zombieCounter++;
    zombieLabel.innerHTML = `$ 🧟 / ${zombiePrice.toFixed(2)} 👻's`;
    zombieButton.innerHTML = `${zombieCounter} 🧟's`;
  });
}
