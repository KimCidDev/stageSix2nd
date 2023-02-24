// Classe para buscar dados da API

export class ImportCountry {
  static search(countryName) {
    const endpoint = `https://restcountries.com/v2/name/${countryName}?fullText=true`

    return fetch(endpoint)
      .then(data => data.json())
      .then(data => ({
        name: data[0].name,
        subregion: data[0].subregion,
        population: data[0].population,
        gini: data[0].gini
      }))
  }
}
