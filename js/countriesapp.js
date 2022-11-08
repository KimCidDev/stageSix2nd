class Countries {
  constructor(root) {
    root = document.querySelector(root)
  }
}

export class CountriesView extends Countries {
  constructor(root) {
    super(root)
  }

  removeItems() {
    const tbody = document.querySelector('table tbody')
    tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}
