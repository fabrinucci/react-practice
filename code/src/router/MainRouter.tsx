import { Route, Switch } from 'wouter';
import { Home } from '../pages/Home';
import { AdvancedRouter } from './AdvancedRouter';
import { BasicPage } from '../pages/BasicPage';
import { IntermediatePage } from '../pages/IntermediatePage';

export const MainRouter = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />

      <Route path='/basic' component={BasicPage} />
      <Route path='/intermediate' component={IntermediatePage} />

      <AdvancedRouter />

      <Route>404 - Page not found</Route>
    </Switch>
  );
};
