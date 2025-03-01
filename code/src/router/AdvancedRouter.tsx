import { Route } from 'wouter';
import { AdvancedPage } from '../pages/';
import { UseTransition } from '../pages/advanced';

export const AdvancedRouter = () => {
  return (
    <>
      <Route path='/advanced' component={AdvancedPage} />

      <Route path='/advanced/useTransition' component={UseTransition} />
    </>
  );
};
