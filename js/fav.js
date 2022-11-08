class Favourites {
  constructor(root) {
    root = document.querySelector('root')
  }
}

class FavouritesGitHub extends Favourites {
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
