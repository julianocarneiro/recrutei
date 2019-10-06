'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AutorizacaoSchema extends Schema {
  up () {
    this.create('autorizacoes', (table) => {
      table.increments()
      table.string('nome', 60)
      table.string('url', 60)
      table.string('menu', 60)
      table.timestamps()
    })
  }

  down () {
    this.drop('autorizacoes')
  }
}

module.exports = AutorizacaoSchema
