class Countries {
  constructor(root) {
    root = document.querySelector(root)
  }
}

export class CountriesView extends Countries {
  constructor(root) {
    super(root)

    this.removeButton()
  }

  update() {
    removeItems()
  }

  removeItems() {
    const tbody = document.querySelector('table tbody')
    tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }

  removeButton() {
    const removeButton = document.querySelector('table tbody tr td:nth-child(4)')

    console.log(removeButton)

    removeButton.onclick = () => this.removeItems()
    
  }
}
