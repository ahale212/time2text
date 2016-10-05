'use strict'
const chai = require('chai')
const expect = chai.expect;
chai.use(require('chai-string'));
const App = require('../app');
const sinon = require('sinon');

describe('Given Application', () => {
  describe('When given input of', () => {
    it('no items Then throw and error', () => {
      const app = new App()

      function runApp() {
        app.run('')
      }
      expect(runApp).to.throw(Error)
    });
    it('one book Then print item with price', () => {
      const printer = {
        print: function () {

        }
      }
      const app = new App(printer)
      app.run('1 book at 0.00')
      expect(printer.output).to.startsWith('1 book: 0.00')
    });
    it('one CD Then print item with price', () => {
      const printer = {
        print: function () {

        }
      }
      const app = new App(printer)
      app.run('1 CD at 10.00')
      expect(printer.output).to.startsWith('1 CD: 10.00')
    });
    it('one $20 CD item Then print item', () => {
      const printer = {
        print: function () {

        }
      }
      const app = new App(printer)
      app.run('1 CD at 20.00')
      expect(printer.output).to.startsWith('1 CD: 20.00')
    });

    it('one 1 item Then item and sales tax', () => {
      const printer = {
        print: function () {

        }
      }

      const mockConfiguration = sinon.mock(printer)
      mockConfiguration.expects("print").once()

      const app = new App(printer)
      app.run('1 CD at 20.00')
      expect(printer.output).to.startsWith('1 CD: 20.00\n')
      expect(printer.output).to.entriesCount('Sales Taxes: 2.00\n', 1)

      mockConfiguration.verify()
    });
  });
});
