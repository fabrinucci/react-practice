import { Route } from 'wouter';
import { AdvancedPage } from '../pages/AdvancedPage';
import { UseTransition } from '../pages/avanzado/UseTransition';

export const AdvancedRouter = () => {
  return (
    <>
      <Route path='/advanced' component={AdvancedPage} />

      <Route path='/advanced/useTransition' component={UseTransition} />
    </>
  );
};
