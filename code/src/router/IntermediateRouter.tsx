import { Route } from 'wouter';
import { IntermediatePage } from '../pages';
import { BasicUseEffect, EventSuscribe } from '../pages/intermediate/useEffect';

export const IntermediateRouter = () => {
  return (
    <>
      <Route path='/intermediate' component={IntermediatePage} />
    </>
  );
};
