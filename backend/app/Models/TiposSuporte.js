'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TiposSuporte extends Model {
  static get table () {
    return 'tipos_suporte'
  }
}

module.exports = TiposSuporte
