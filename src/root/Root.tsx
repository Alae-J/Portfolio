
import { FC, useEffect, useState } from 'react';
import AppRoutes from '../routes/routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/globalStyles/globalStyles';
import { theme } from '../assets/globalStyles/theme';
import AppContext from '../context';

const Root: FC = () => {
    const [store, setStore] = useState({
        mobileNav: false,
        actualScreenWidth: window.innerWidth,
    });

    const getWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
        useEffect(() => {
        const resizeListener = () => {
            setStore((prev) => {
            return { mobileNav: prev.mobileNav, actualScreenWidth: getWidth() };
            });
        };
        window.addEventListener('resize', resizeListener);
        }, []);
        return (
        <AppContext.Provider
            value={{
                store,
                setStore,
            }}
        >
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <AppRoutes />
            </ThemeProvider>
        </AppContext.Provider>
    );
};

export default Root;
