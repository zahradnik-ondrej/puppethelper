function adjustWidth(element) {
  const length = Math.max(element.value.length, element.placeholder.length)
  element.style.width = Math.min(Math.max(length, 10), 30) + 'ch'
}

window.onload = function () {
  const input = document.querySelector('input[type="text"]')
  input.value = ''
  adjustWidth(input)
}
