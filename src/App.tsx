import React from 'react';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Sidebar />
    </AppProvider>
  );
};

export default App;
