import { FC } from 'react';
import './style.scss';
import { iosVhFix } from './../shared/utils/ios-vh-fix';

import MainPage from '../pages/mainPage';

iosVhFix();

const App: FC = () => {
  return <MainPage />;
};

export default App;
