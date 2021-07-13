import React from 'react';
import HomepageBanner from './app/HomepageBanner';
import PageHeader from './app/PageHeader';
import { UserProvider } from './app/UserContext';

const App = () => (
  <UserProvider>
    <PageHeader />
    <HomepageBanner />
  </UserProvider>
);

export default App;
