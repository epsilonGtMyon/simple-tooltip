class Tooltip {
  static _tooltip(element, text, type) {
    element.classList.add('tooltip')

    const div = document.createElement('div')
    div.classList.add('tooltip-content')
    if (type) {
      div.classList.add(type)
    }
    div.textContent = text
    element.appendChild(div)
  }

  static danger(element, text) {
    Tooltip._tooltip(element, text, 'is-danger')
  }

  static warning(element, text) {
    Tooltip._tooltip(element, text, 'is-warning')
  }
  
  static info(element, text) {
    Tooltip._tooltip(element, text, 'is-info')
  }
}
