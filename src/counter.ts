export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  let pumpkinCounter = 0;
  const pumpkinButton = document.querySelector<HTMLButtonElement>("#btn2")!;

  function animate() {
    counter++;

    if (counter >= 100) {
      pumpkinButton.disabled = false;
    } else {
      pumpkinButton.disabled = true;
    }

    let ghostCount: number = Math.round(counter / 100);
    element.innerHTML = `👻 Count: ${ghostCount}`;
    requestAnimationFrame(animate);
  }

  element.addEventListener("click", () => {
    counter++;
    window.requestAnimationFrame(animate);
  });

  pumpkinButton.addEventListener("click", () => {
    counter -= 200;
    pumpkinCounter++;
    pumpkinButton.innerHTML = `${pumpkinCounter} 🎃's`;
  });
}
