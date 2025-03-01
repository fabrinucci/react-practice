import { Route, Switch } from 'wouter';
import { AdvancedPage, Home, IntermediatePage } from '../pages';
import { BasicPage } from '../pages';

import {
  BasicUseEffect,
  CancelRequest,
  CleanUseEffect,
  EventSuscribe,
} from '../pages/intermediate/useEffect';

import { UseTransition } from '../pages/advanced';

export const MainRouter = () => {
  return (
    <Switch>
      {/* Home */}
      <Route path='/' component={Home} />

      {/* Basic */}
      <Route path='/basic' component={BasicPage} />

      {/* Intermediate */}
      <Route path='/intermediate' component={IntermediatePage} />
      <Route path='/intermediate/basic-useEffect' component={BasicUseEffect} />
      <Route path='/intermediate/event-suscribe' component={EventSuscribe} />
      <Route path='/intermediate/cancel-request' component={CancelRequest} />
      <Route path='/intermediate/clean-useEffect' component={CleanUseEffect} />

      {/* Advanced */}
      <Route path='/advanced' component={AdvancedPage} />
      <Route path='/advanced/useTransition' component={UseTransition} />

      {/* Not found */}
      <Route>404 - Page not found</Route>
    </Switch>
  );
};
