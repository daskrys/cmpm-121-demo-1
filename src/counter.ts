interface Monster {
  name: string;
  cost: number;
  count: number;
  description: string;
}

const Halloween: Monster[] = [
  {
    name: "👻",
    cost: 10,
    count: 0,
    description: "Prince Boo",
  },
  {
    name: "🧟",
    cost: 100,
    count: 0,
    description: "Count Zombula",
  },
  {
    name: "🐺",
    cost: 1000,
    count: 0,
    description: "Dire Wolfenstein",
  },
  {
    name: "🤖",
    cost: 10000,
    count: 0,
    description: "Artificial Hyperintelligence",
  },
];

export function setupCounter(pumpkinButton: HTMLButtonElement) {
  const buttons: HTMLButtonElement[] = [
    document.querySelector<HTMLButtonElement>("#btn2")!,
    document.querySelector<HTMLButtonElement>("#btn3")!,
    document.querySelector<HTMLButtonElement>("#btn4")!,
    document.querySelector<HTMLButtonElement>("#btn5")!,
  ];

  const labels: HTMLParagraphElement[] = [
    document.querySelector<HTMLParagraphElement>("#GhostLabel")!,
    document.querySelector<HTMLParagraphElement>("#ZombieLabel")!,
    document.querySelector<HTMLParagraphElement>("#WolfLabel")!,
    document.querySelector<HTMLParagraphElement>("#RobotLabel")!,
  ];

  let counter: number = 0;
  let pumpkinCounter: number = 0;
  let HalloweenLength: number = Halloween.length;
  let firstClick: boolean = false; // flag to check if animation is running
  //let pumpkinLabel = document.querySelector<HTMLParagraphElement>("#PumpkinLabel")!;

  let lastTime: number = 0;

  function animate() {
    let newTime: number = performance.now();
    const delta: number = newTime - lastTime;
    lastTime = newTime;
    let fps: number = 1000 / delta;

    counter += 1 / fps;

    requestAnimationFrame(animate);
  }

  function pumpkin() {
    pumpkinCounter = counter;
    pumpkinButton.innerHTML = `${pumpkinCounter.toFixed(2)} 🎃's`;

    for (let i = 0; i < HalloweenLength; i++) {
      if (counter >= Halloween[i].cost) {
        buttons[i].disabled = false;
      } else {
        buttons[i].disabled = true;
      }
    }
  }

  function updatePumpkins() {
    pumpkinCounter = counter;
    pumpkinButton.innerHTML = `${pumpkinCounter.toFixed(2)} 🎃's`;
  }

  pumpkinButton.addEventListener("click", () => {
    if (!firstClick) {
      firstClick = true;
      lastTime = performance.now();
      window.requestAnimationFrame(animate);
    } else {
      counter++;
      pumpkin();
    }
  });

  for (let i = 0; i < HalloweenLength; i++) {
    buttons[i].addEventListener("click", () => {
      counter -= Halloween[i].cost;
      updatePumpkins();
      Halloween[i].cost *= 1.15;
      Halloween[i].count++;
      buttons[i].innerHTML = `${Halloween[i].count} ${Halloween[i].name}'s`;
      labels[i].innerHTML = `1 ${Halloween[i].name} / ${Halloween[
        i
      ].cost.toFixed(2)} 🎃's`;
    });
  }
}
