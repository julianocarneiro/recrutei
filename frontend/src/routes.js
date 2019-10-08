import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Clientes = React.lazy(() => import('./views/Clientes'));
const Tickets = React.lazy(() => import('./views/Tickets'));
const Usuarios = React.lazy(() => import('./views/Usuarios'));
const TiposSuporte = React.lazy(() => import('./views/TiposSuporte'));
const TiposStatus = React.lazy(() => import('./views/TiposStatus'));
const Perfil = React.lazy(() => import('./views/Perfil'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/clientes', name: 'Clientes', component: Clientes },
  { path: '/tickets', name: 'Tickets', component: Tickets },
  { path: '/usuarios', name: 'Usuarios', component: Usuarios },
  { path: '/tipos-suporte', name: 'Tipos Suporte', component: TiposSuporte },
  { path: '/tipos-status', name: 'Tipos Status', component: TiposStatus },
  { path: '/perfil', name: 'Perfil', component: Perfil },
];

export default routes;
