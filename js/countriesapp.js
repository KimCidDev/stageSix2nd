import { ImportCountry } from './fetchapi.js'

// Classe para conter a lógica dos dados

export class Countries {
  constructor(data) {
    this.pageHTML = document.querySelector(data)

    this.load()

    ImportCountry.search('uruguay').then(country => console.log(country))

    this.tbodyAddUser = this.pageHTML.querySelector('table tbody')
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('Where2Go:')) || []

    console.log(this.entries)
    console.log(typeof this.entries)
    console.log(this.entries === '[]')
    console.log(typeof this.entries)
  }

  save() {
    localStorage.setItem('@Where2Go', JSON.stringify(this.entries))
  }

  async addInputData(countryname) {
    try {
      const userExists = this.entries.find(entry => entry.name === countryname)

      if (userExists) {
        throw new Error('usuário já cadastrado')
      }

      const country = await ImportCountry.search(countryname)

      if (country.name === undefined) {
        throw new Error('teu cu')
      }
      this.entries = [country, ...this.entries]
      this.update()
      this.save()
    } catch (error) {
      console.log(error.message)
    }
  }

  deleteRow(user) {
    const afterDelete = this.entries.filter(entry => entry.name !== user.name)

    this.entries = afterDelete
    console.log(afterDelete)
    this.update()
    this.save()
  }
}

// Classe para eventos e modificações do HTML

export class CountriesView extends Countries {
  constructor(replicaData) {
    super(replicaData)
    console.log(this.pageHTML)
    this.update()
    this.onAdd()
  }

  onAdd() {
    const addButton = this.pageHTML.querySelector('#searchCountry')

    console.log(addButton)

    addButton.onclick = () => {
      const { value } = this.pageHTML.querySelector('#searchBar')

      console.log(value)

      this.addInputData(value)
    }
  }

  update() {
    this.removeItems()

    this.entries.forEach(country => {
      console.log(country)

      const row = this.newRow()

      row.querySelector('.countryInfo img').src = `${country.flag}`

      row.querySelector('.countryInfo img').alt = `${country.flagAlt}`

      row.querySelector('.countryInfo .countryNameContinent p').textContent =
        country.name

      row.querySelector('.countryInfo .countryNameContinent span').textContent =
        country.subregion

      row.querySelector('.population').textContent = country.population

      row.querySelector('.gini').textContent = country.gini

      row.querySelector('#remove').onclick = () => {
        const isOK = confirm('Are you sure you want to remove this?')

        if (isOK) {
          this.deleteRow(country)
        }
      }

      this.tbodyAddUser.append(row)

      return row
    })
  }

  /*

    


*/

  removeItems() {
    console.log(typeof this.addUser)

    this.tbodyAddUser.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }

  newRow() {
    const countryInfo = `<td class="countryInfo">
    <img
      src="https://vectorflags.s3-us-west-2.amazonaws.com/flags/de-square-01.png"
      alt="Country's flag"
    />
    <div class="countryNameContinent">
      <p>Germany<p>
      <span>Europe</span>
    </div>
  </td>
  <td><p class="population">12</p></td>
  <td><p class="gini">31</p></td>
  <td><p id="remove">Remove</p></td>`

    const newRow = document.createElement('tr')
    newRow.innerHTML = countryInfo

    return newRow
  }
}
