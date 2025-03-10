import { Route, Switch } from 'wouter';
import { AdvancedPage, Home, IntermediatePage } from '../pages';
import { BasicPage } from '../pages';

import {
  BasicUseEffect,
  CancelRequest,
  CleanUseEffect,
  EventSuscribe,
} from '../pages/intermediate/useEffect';

import {
  ControlledComponent,
  HOC,
  RenderProps,
  UncontrolledComponent,
  UseCallback,
  UseMemo,
} from '../pages/intermediate';

import { UseTransition } from '../pages/advanced';

import {
  InterfaceSegregation,
  LiskovSubstitution,
  OpenClosed,
  SingleResposability,
} from '../pages/advanced/solid';

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
      <Route path='/intermediate/hocs' component={HOC} />
      <Route path='/intermediate/render-props' component={RenderProps} />
      <Route path='/intermediate/controlled-element' component={ControlledComponent} />
      <Route path='/intermediate/uncontrolled-element' component={UncontrolledComponent} />
      <Route path='/intermediate/useMemo' component={UseMemo} />
      <Route path='/intermediate/useCallback' component={UseCallback} />

      {/* Advanced */}
      <Route path='/advanced' component={AdvancedPage} />
      <Route path='/advanced/useTransition' component={UseTransition} />
      <Route path='/advanced/1-single-responsability' component={SingleResposability} />
      <Route path='/advanced/2-open-closed' component={OpenClosed} />
      <Route path='/advanced/3-liskov-substitution' component={LiskovSubstitution} />
      <Route path='/advanced/4-interface-segregation' component={InterfaceSegregation} />

      {/* Not found */}
      <Route>404 - Page not found</Route>
    </Switch>
  );
};
