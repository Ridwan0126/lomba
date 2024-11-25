// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './component/layout/UserContext'; // Import UserProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider> {/* Bungkus App dengan UserProvider */}
      <App />
    </UserProvider>
  </StrictMode>
);
