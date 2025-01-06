import React, {
  createContext, ReactNode, useCallback, useState, useMemo
} from 'react';
import { USER } from '../../constants/userRoles';
import { ThemeLoader } from '../../components/design/themeLoader/ThemeLoader';

export interface UserContextValue {
  userContext: USER | undefined;
  applyThemeChange: (newTheme: string) => void;
}

export const UserContext = createContext<UserContextValue | undefined>(undefined);

export interface UserContextProviderProps {
  userConfig?: USER;
  themePreferences?: {
    useMin: boolean;
    forceProd: boolean;
    publicLibraryFolder: string;
  };
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = (
  {
    children,
    userConfig,
    themePreferences = {
      useMin: false,
      forceProd: false,
      publicLibraryFolder: ''
    }
  }
) => {
  const [userContext, setUserContext] = useState<USER | undefined>(userConfig);

  const applyThemeChange = useCallback((newTheme: string) => {
    const newUserContext = {
      ...userContext,
      theme: newTheme
    };
    setUserContext(newUserContext);
  }, [userContext]);

  const providerValue = useMemo(
    () => (
      { userContext, applyThemeChange }
    ),
    [userContext, applyThemeChange]
  );

  return (
    <UserContext.Provider value={ providerValue }>
      <ThemeLoader { ...themePreferences } userTheme={ userContext?.theme } />
      { children }
    </UserContext.Provider>
  );
};

export default UserContextProvider;
