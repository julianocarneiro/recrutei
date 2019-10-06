'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PerfilAutorizacao extends Model {
  static get table () {
    return 'perfil_autorizacoes'
  }
}

module.exports = PerfilAutorizacao
