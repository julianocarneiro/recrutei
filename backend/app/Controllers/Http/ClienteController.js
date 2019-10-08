'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */

const Model = use('App/Models/Cliente')

class ClienteController {
  async index ({ request }) {
    const { page } = request.get()
    const model = await Model.query()
      .paginate(page)

    return model
  }

  async store ({ request }) {
    const data = request.only(['nome', 'email', 'telefone'])
    const model = await Model.create({ ...data })

    return model
  }

  async show ({ params }) {
    const model = await Model.findOrFail(params.id)
    return model
  }


  async update ({ params, request }) {
    const model = await Model.findOrFail(params.id)
    const data = request.only(['nome', 'email', 'telefone'])

    model.merge(data)
    await model.save()

    return model
  }

  async destroy ({ params }) {
    const model = await Model.findOrFail(params.id)

    await model.delete()
  }
}

module.exports = ClienteController
