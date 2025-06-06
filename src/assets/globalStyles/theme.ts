export interface StyleClosetTheme {
    colors: {
        main: string;
        content: string;
        helper: string;
        mobile: string;
    };
    fontFamily: {
        mainFont: string;
        specialFont: string;
    };
    fontType: {
        serif: string;
        cursive: string;
    };
    fontWeight: {
        XS: number;
        S: number;
        XM: number;
        M: number;
        XL: number;
        L: number;
    };
    fontSize: {
        XXS: string;
        XS: string;
        S: string;
        M: string;
    };
}

export const theme: StyleClosetTheme = {
    colors: {
        main: 'rgba(0, 197, 66, 0.7)',
        mobile: 'rgb(27, 209, 81)',
        content: '#F8FBFF',
        helper: '#4caf50',
    },
    fontFamily: {
        mainFont: `'Space Grotesk', sans-serif`,
        specialFont: `'Shadows Into Light', cursive`,
    },

    fontType: {
        serif: 'sans-serif',
        cursive: 'cursive',
    },
    fontWeight: {
        XS: 300,
        S: 400,
        XM: 500,
        M: 600,
        XL: 700,
        L: 800,
    },
    fontSize: {
        XXS: '0.7em',
        XS: '1em',
        S: '1.6em',
        M: '2em',
    },
};
