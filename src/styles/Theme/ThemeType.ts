import { DefaultTheme } from "styled-components";

export default interface IDefaultTheme extends DefaultTheme {
    colors: {
        primary: {
            main: string;
            primary200: string;
            primary300: string;
        };
        gray: {
            gray1: string;
            gray2: string;
            gray3: string;
            gray4: string;
            gray5: string;
            gray6: string;
            gray7: string;
        };
        blue: string;
        sky: string;
        black: string;
        white: string;
        danger: string;
    };
    typography: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        body1: string
    };
    shadow: {
        pop: string
    };
    border: {
        base: string
        form: string
    };
    transition: {
        main: string
    };
    breakpoints: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    }
}






