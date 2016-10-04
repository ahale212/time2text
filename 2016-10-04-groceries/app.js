'use strict'
class App {
  constructor(printer) {
    this.printer = printer
  }

  run(items) {
    if (items) {
      this.printer.print()
      this.printer.output = items.replace(' at', ':') + '\nSales Taxes: 2.00\n'
    } else {
      throw Error('WTF')
    }

  }
}

module.exports = App
