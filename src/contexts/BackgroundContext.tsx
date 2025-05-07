import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BackgroundContextType {
  background: string;
  setBackground: (value: string) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

interface BackgroundProviderProps {
  children: ReactNode;
  defaultBackground?: string;
}

export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({
  children,
  defaultBackground = '#ffffff',
  }) => {
  const [background, setBackground] = useState<string>(defaultBackground);

  useEffect(() => {
    document.body.style.backgroundColor = 'black';

    if (background.startsWith('url')) {
      document.body.style.backgroundImage = background;
    } else {
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundColor = background;
    }

    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center';
  }, [background]);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = (): BackgroundContextType => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};
