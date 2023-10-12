interface Item {
  name: string;
  price: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "Ghost", price: 1000, rate: 1.15 },
  { name: "Zombie", price: 10, rate: 1.15 },
];

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;

  let ghostCounter: number = 0;
  let zombieCounter: number = 0;
  let pumpCount: number = 0;

  const ghostButton = document.querySelector<HTMLButtonElement>("#btn2")!;
  const zombieButton = document.querySelector<HTMLButtonElement>("#btn3")!;
  const ghostLabel =
    document.querySelector<HTMLParagraphElement>("#GhostLabel")!;
  const zombieLabel =
    document.querySelector<HTMLParagraphElement>("#ZombieLabel")!;

  function animate() {
    counter++;

    if (counter >= availableItems[0].price) {
      ghostButton.disabled = false;
    } else {
      ghostButton.disabled = true;
    }

    if (ghostCounter >= availableItems[1].price) {
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
    counter -= availableItems[0].price;
    availableItems[0].price *= availableItems[0].rate;
    ghostCounter++;
    ghostLabel.innerHTML = `1 👻 / ${(availableItems[0].price / 100).toFixed(
      2,
    )} 🎃's`;
    ghostButton.innerHTML = `${ghostCounter} 👻's`;
  });

  zombieButton.addEventListener("click", () => {
    ghostCounter -= availableItems[1].price;
    availableItems[1].price *= availableItems[1].rate;
    zombieCounter++;
    zombieLabel.innerHTML = `$ 🧟 / ${availableItems[1].price.toFixed(2)} 👻's`;
    zombieButton.innerHTML = `${zombieCounter} 🧟's`;
  });
}
