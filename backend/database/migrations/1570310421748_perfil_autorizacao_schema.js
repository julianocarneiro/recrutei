'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerfilAutorizacaoSchema extends Schema {
  up () {
    this.create('perfil_autorizacoes', (table) => {
      table.increments()
      table
        .integer('perfil_id')
        .unsigned()
        .references('id')
        .inTable('perfis')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('autorizacao_id')
        .unsigned()
        .references('id')
        .inTable('autorizacoes')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.boolean('liberado').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('perfil_autorizacoes')
  }
}

module.exports = PerfilAutorizacaoSchema
