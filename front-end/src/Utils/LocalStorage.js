
export function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  const getResult = localStorage.getItem(key) || '[]';
  return JSON.parse(getResult);
}

export function fillCart() {
  const cart = getLocalStorage('cart')
  if(cart.length === 0) saveLocalStorage('cart', [])
}

fillCart()

export function saveItem(product) {
  const cart = getLocalStorage('cart')

  const exist = cart.some((item) => item.name === product.name)

  if(!exist) {
    cart.push(product)

    saveLocalStorage('cart', cart)
  }
}