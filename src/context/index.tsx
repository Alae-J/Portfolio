import React from 'react';

interface ContextProps {
    store: { mobileNav: boolean; actualScreenWidth: number };
    setStore: React.Dispatch<React.SetStateAction<{ mobileNav: boolean; actualScreenWidth: number }>>;
}

const AppContext = React.createContext<ContextProps>({
    store: { mobileNav: false, actualScreenWidth: window.innerWidth },
    setStore: () => {},
});

export default AppContext;
