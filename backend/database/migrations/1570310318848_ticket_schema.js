'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketSchema extends Schema {
  up () {
    this.create('tickets', (table) => {
      table.increments()
      table.text('problema')
      table.text('solucao')
      table.text('observacao')
      table
        .integer('tecnico_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('cliente_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('tipos_suporte_id')
        .unsigned()
        .references('id')
        .inTable('tipos_suporte')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.timestamps()
    })
  }

  down () {
    this.drop('tickets')
  }
}

module.exports = TicketSchema
