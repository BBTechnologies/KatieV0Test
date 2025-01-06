import React, {
  createContext, ReactNode, useState, useMemo
} from 'react';

export type APP_CONFIG = {
  publicLibraryFolder: string;
  theme?: string;
};

export interface AppContextValue {
  appContext?: APP_CONFIG;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);

export interface AppContextProviderProps {
  appConfig: APP_CONFIG;
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ appConfig, children }) => {
  const [appContext, changeAppContext] = useState<APP_CONFIG | undefined>(appConfig);

  const providerValue = useMemo(() => ({ appContext, changeAppContext }), [appContext, changeAppContext]);

  return (
    <AppContext.Provider value={ providerValue }>
      { children }
    </AppContext.Provider>
  );
};

export default AppContextProvider;
