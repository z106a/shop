import React, { StrictMode } from 'react';
import { Provider } from 'react-tracked';
import { useRoutes } from 'hookrouter';
import { useValue } from './state';
import Main from './components/Main';
import style from './App.module.css';

const routes = {
  // '/overview/:aircraftId': ({ aircraftId }) => <Overview aircrafId={aircraftId} />, // TODO use nested route
  // '/overview/:aircraftId/:year/:month': ({ aircraftId, year, month }) => <Month aircrafId={aircraftId} year={year} month={month} />,
  // '/docs/:docType': ({ docType }) => <Docs docType={docType} />,
  '/': () => <Main />
};

const App = (({ children }) => (
  <div className={style.App}>
    {children}
  </div>
));

const AppContainer = () => {
  const routeResult = useRoutes(routes);

  return (
    <StrictMode>
      <Provider useValue={useValue}>
        <App>
          {routeResult || 404}
        </App>
      </Provider>
    </StrictMode>
  );
};

export default AppContainer;
