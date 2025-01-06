'use client';

import React, {
  createContext, ReactNode, useState, useMemo
} from 'react';
import { BubbleItem } from '../bubbleNavigator.interface';

// Define the shape of the context value
interface BubbleNavigatorContextType {
  bubbleNavigatorContext: BubbleItem[] | undefined;
  setBubbleNavigatorContext: React.Dispatch<React.SetStateAction<BubbleItem[] | undefined>>;
}

// Initialize context with the correct type
export const BubbleNavigatorContext = createContext<BubbleNavigatorContextType | undefined>(undefined);

export interface BubbleNavigatorContextProviderProps {
  bubblesData: BubbleItem[] | undefined;
  children: ReactNode;
}

export const BubbleNavigatorContextProvider: React.FC<BubbleNavigatorContextProviderProps> = ({
  bubblesData,
  children
}) => {
  const [bubbleNavigatorContext, setBubbleNavigatorContext] = useState<BubbleItem[] | undefined>(bubblesData);

  const bubbleContextProviderValue = useMemo(
    () => ({ bubbleNavigatorContext, setBubbleNavigatorContext }),
    [bubbleNavigatorContext, setBubbleNavigatorContext]
  );

  return (
    <BubbleNavigatorContext.Provider value={ bubbleContextProviderValue }>
      { children }
    </BubbleNavigatorContext.Provider>
  );
};
