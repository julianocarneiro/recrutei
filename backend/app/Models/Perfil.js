'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Perfil extends Model {
  static get table () {
    return 'perfis'
  }
}

module.exports = Perfil
