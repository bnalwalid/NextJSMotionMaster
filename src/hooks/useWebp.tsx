import { createContext, useContext, useState, useMemo, useEffect } from 'react';

import { checkWebPSupport } from 'supports-webp-sync';

interface IWebpContextData {
  enabled: boolean;
}

interface IWebProvider {
  children: React.ReactNode;
}

const WebpContext = createContext<IWebpContextData>({} as IWebpContextData);

const WebpProvider: React.FC<IWebProvider> = ({ children }) => {
  const [enabled, setEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (!checkWebPSupport()) {
      setEnabled(false);
    }
  }, []);

  const contextValue = useMemo(() => ({ enabled }), [enabled]);

  return <WebpContext.Provider value={contextValue}>{children}</WebpContext.Provider>;
};

const useWebp = (): IWebpContextData => {
  const context = useContext(WebpContext);
  if (!context) throw new Error('useWebp must be used within an WebpProvider');
  return context;
};

export { WebpProvider, useWebp };
