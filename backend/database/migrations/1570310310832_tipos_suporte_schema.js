'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TiposSuporteSchema extends Schema {
  up () {
    this.create('tipos_suporte', (table) => {
      table.increments()
      table.string('tipo', 60)
      table.timestamps()
    })
  }

  down () {
    this.drop('tipos_suporte')
  }
}

module.exports = TiposSuporteSchema
