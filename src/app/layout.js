'use client'
import React from 'react';
import Header from '../components/Header';
import './styles.css';

export const SoundEnabledContext = React.createContext();

const SoundEnabledContextProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  return (
    <SoundEnabledContext.Provider value={{soundEnabled, setSoundEnabled}}>
      {children}
    </SoundEnabledContext.Provider>
  )
}

export function useSoundEnabled() {
  const data = React.useContext(
    SoundEnabledContext
  );

  if (!data) {
    throw new Error(
      'Cannot consume SoundEnabled context without a SoundEnabledProvider'
    );
  }

  return data;
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundEnabledContextProvider>
          <Header />
        {children}
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
        </SoundEnabledContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
