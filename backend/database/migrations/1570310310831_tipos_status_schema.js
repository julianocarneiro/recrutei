'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TiposStatusSchema extends Schema {
  up () {
    this.create('tipos_status', (table) => {
      table.increments()
      table.string('tipo', 60)
      table.timestamps()
    })
  }

  down () {
    this.drop('tipos_status')
  }
}

module.exports = TiposStatusSchema
