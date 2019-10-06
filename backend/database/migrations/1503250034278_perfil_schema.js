'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerfilSchema extends Schema {
  up () {
    this.create('perfis', (table) => {
      table.increments()
      table.string('perfil', 60)
      table.boolean('tecnico').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('perfis')
  }
}

module.exports = PerfilSchema
