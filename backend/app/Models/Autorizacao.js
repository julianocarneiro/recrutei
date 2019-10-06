'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Autorizacao extends Model {
  static get table () {
    return 'autorizacoes'
  }
}

module.exports = Autorizacao
