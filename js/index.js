// class Livro {
//   constructor(nome, editora, paginas) {
//     this.nome = nome
//     this.editora = editora
//     this.paginas = paginas
//   }

//   anunciarTitulo() {
//     console.log(`Título: ${this.nome}`)
//   }

//   descreverTitulo() {
//     console.log(
//       `${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`
//     )
//   }
// }

// const kim = new Livro('o vermelho e o negro', 'cia de letras', 192)

// kim.descreverTitulo()
// kim.anunciarTitulo()
import Wardrobe from './fav.js'

const kimswardrobe = new Wardrobe(
  'blue shirt',
  'just socks',
  'weird symbols',
  'weed'
)

kimswardrobe.Inventory()
kimswardrobe.WhatILikeMost()
