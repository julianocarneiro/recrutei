'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AutorizacaoSchema extends Schema {
  up () {
    this.create('autorizacoes', (table) => {
      table.increments()
      table.string('nome', 60)
      table.string('url', 60)
      table.string('method', 60)
      table.string('controller', 60)
      table.string('action', 60)
      table.string('menu', 60)
      table.string('icon', 20)
      table.timestamps()
    })
  }

  down () {
    this.drop('autorizacoes')
  }
}

module.exports = AutorizacaoSchema
