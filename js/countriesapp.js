class Countries {
  constructor(root) {
    root = document.querySelector(root)
  }
}

export class CountriesView extends Countries {
  constructor(root) {
    super(root)

    this.removeButton()
    this.newRow()
  }

  update() {
    removeItems()
  }

  newRow() {
    const newRow = document.createElement('tr')
    const addButton = document.querySelector('.searchBox button')
    addButton.addEventListener('click', () => {
      document.querySelector('tbody').appendChild(newRow)
    })
    const newRowContent = `<td>
    <img
      src="https://vectorflags.s3-us-west-2.amazonaws.com/flags/de-square-01.png"
      alt="Kim's profile picture"
    />
    <div class="userinfo">
      <h3>Germany</h2>
      <span>Europe</span>
    </div>
  </td>
  <td><p>12</p></td>
  <td><p>31</p></td>
  <td><p>Remove</p></td>`

    newRow.innerHTML = newRowContent
  }

  removeItems() {
    const tbody = document.querySelector('table tbody')
    tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }

  removeButton() {
    const removeButton = document.querySelector(
      'table tbody tr td:nth-child(4)'
    )

    console.log(removeButton)

    removeButton.onclick = () => this.removeItems()
  }
}
