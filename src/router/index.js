import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'; // [npm install react-router-dom]

import AsyncImport from '../components/AsyncImport';

const routes = [
  {
    tag: 'Redirect',
    from: '/',
    to: '/home',
    exact: true,
  },
  {
    path: '/home',
    component: AsyncImport(() => import('../pages/Home')),
  },
  {
    path: '/refs',
    component: AsyncImport(() => import('../pages/refs/RefParent')),
  },
  {
    path: '/redux/about/:id',
    component: AsyncImport(() => import('../pages/redux/About')),
    routes: [
      {
        tag: 'Route',
        path: '/redux/about/notfound',
        component: AsyncImport(() => '../pages/NotFound'),
      },
    ]
  },
  {
    path: '/react_grid_layout/first_grid',
    component: AsyncImport(() => import('../pages/react_grid_layout/FirstGrid'))
  },
  {
    path: '/react_rnd/first_rnd',
    component: AsyncImport(() => import('../pages/react_rnd/FirstRND'))
  },
  {
    path: '/react_rnd/grid_rnd',
    component: AsyncImport(() => import('../pages/react_rnd/GridAndRND'))
  },
  {
    path: '/jquery/drag_box',
    component: AsyncImport(() => import('../pages/jquery/DragBox'))
  },

  {
    path: '/ant_design/form',
    component: AsyncImport(() => import('../pages/ant_design/FormComponent'))
  },
  {
    path: '/ant_design/icon',
    component: AsyncImport(() => import('../pages/ant_design/IconDelete'))
  },
  {
    path: '/ant_design/table',
    component: AsyncImport(() => import( '../pages/ant_design/TableExercise'))
  },
  {
    path: '/ant_design/tabs',
    component: AsyncImport(() => import('../pages/ant_design/TabsComponent'))
  },
];

const SingleRoute = (route) => (
  route.tag === 'Redirect' ?
    <Redirect {...route} render={props => (<route.component {...props} routes={route.routes}/>)}/> :
    <Route path={route.path} exact={route.exact}
           render={props => (<route.component {...props} routes={route.routes}/>)}/>
);

// const SingleRoute = (route) => (
//   route.tag === 'Redirect' ?
//     <Redirect from={route.from}
//               to={route.to}
//               exact={route.exact}
//               render={props => (<route.component {...props} routes={route.routes}/>)}
//     /> :
//     <Route path={route.path}
//            exact={route.exact}
//            render={props => (<route.component {...props} routes={route.routes}/>)}
//     />
// );

export default () => <Switch>{routes.map((route, i) => <SingleRoute key={i} {...route}/>)}</Switch>