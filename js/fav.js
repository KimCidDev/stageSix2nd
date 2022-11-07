export default class Wardrobe {
  constructor(hanger, drawer, shelf, hidden) {
    this.hanger = hanger
    this.drawer = drawer
    this.shelf = shelf
    this.hidden = hidden
  }

  Inventory() {
    console.log(
      `Here's what I own: ${this.hanger}, ${this.drawer}, ${this.shelf} e ${this.hidden}`
    )
  }

  WhatILikeMost() {
    if (this.hanger === 'blue shirt') {
      console.log('My beloved blue shirt')
    } else if (this.hidden === 'weed') {
      console.log('roll one, smoke one')
    } else {
      console.log('ok, time for some icecream')
    }
  }
}
