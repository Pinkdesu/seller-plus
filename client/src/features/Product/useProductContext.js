import { useContext, createContext } from 'react';

const CounterContext = createContext(undefined);

const CounterProvider = (props) => {
  const { children, value } = props;

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a CounterProvider');
  }
  return context;
};

export { CounterProvider, useProductContext };
