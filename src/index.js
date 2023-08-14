import React from 'react';
import ReactDOM from 'react-dom';
import AppContent from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// Hard-coded values
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <AppContent />
    </Auth0Provider>
  );
}

// Render the App component into the root DOM element
ReactDOM.render(<App />, document.getElementById('root'));
