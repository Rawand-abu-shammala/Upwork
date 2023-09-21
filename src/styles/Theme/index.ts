import IDefaultTheme from "./ThemeType";

const colors = {
    primary: {
        main: "#14a800",
        primary200: "#3c8224",
        primary300: "#95df00",
    },
    gray: {
        gray1: "#5e6d55",
        gray2: "#9aaa97",
        gray3: "#beccbe",
        gray4: "#d5e0d5",
        gray5: "#e4ebe4",
        gray6: "#f2f7f2",
        gray7: "#f7faf7",
    },
    blue: "#1f57c3",
    sky: "#01cdbe",
    black: "#001e00",
    white: "#FFFFFF",
    danger: "#9b211b",
}

const typography = {
    h1: "font-size:26px; line-height:32px",
    h2: "font-size:22px; line-height:28px",
    h3: "font-size:20px; line-height:24",
    h4: "font-size:18px; line-height:22px",
    body1: "font-size:16px; line-height:22px",
}

const shadow = {
    pop: "0 0 10px 2px rgba(0,30,0,0.15);"
}

const border = {
    base: "1px solid #d5e0d5",
    form: "2px solid #d5e0d5",
}

const transition = {
    main: "0.3s all ease-in-out;",
}

const breakpoints = {
    xs: "0px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
}

export const defaultTheme: IDefaultTheme = {
    colors,
    typography,
    shadow,
    border,
    transition,
    breakpoints,
}
