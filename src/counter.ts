/*
export function setupCounter(element: HTMLButtonElement) {
    let counter = 0
    const setCounter = (count: number) => {
      counter = count
      element.innerHTML = `Christian's count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
  }
  */

export function setupCounter(element: HTMLButtonElement) 
{
    let counter = 0;

    let setCounter = (count: number) => {
        counter = count;
        element.innerHTML = `👻 Count: ${counter}`
    }

    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}