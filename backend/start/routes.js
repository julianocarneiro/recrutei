'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

Route.group(() => {
  Route.get('/', 'DashboardController.index')
  Route.get('/dashboard', 'DashboardController.index')

  Route.resource('tipo-suporte', 'TipoSuporteController').apiOnly()
  Route.resource('tipo-status', 'TipoStatusController').apiOnly()

  Route.resource('autorizacao', 'AutorizacaoController').apiOnly()
  Route.resource('cliente', 'ClienteController').apiOnly()
  Route.resource('perfil-autorizacao', 'PerfilAutorizacaoController').apiOnly()
  Route.resource('perfil', 'PerfilController').apiOnly()
  Route.resource('status', 'StatusController').apiOnly()
  Route.resource('ticket', 'TicketController').apiOnly()


})
