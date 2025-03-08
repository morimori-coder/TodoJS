/**
 * 引数で受け取った要素をクリックするとカウントアップするカウンターをセットアップする
 * @param {HTMLElement} element クリック時にカウントアップする要素
 */
export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
