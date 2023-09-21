import IDefaultTheme from "@/style/Theme/ThemeType";

import styled from "styled-components";

type colors = "primary/main" | "primary/200" | "primary/300" |
    "blue" | "sky" | "black" | "white" | "danger";

interface Props {
    color?: colors
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
    align?: "center" | "end" | "start" | "justify",
    transform?: "capitalize" | "uppercase" | "lowercase"
    margin?: string
}

const getColorsFromTheme = (color: colors, theme: IDefaultTheme) => {
    if (color === "primary/main") return theme.colors.primary.main;
    if (color === "primary/200") return theme.colors.primary.primary200;
    if (color === "primary/300") return theme.colors.primary.primary300;

    if (color === "blue") return theme.colors.blue;
    if (color === "sky") return theme.colors.sky;
    if (color === "black") return theme.colors.black;
    if (color === "white") return theme.colors.white;
    if (color === "danger") return theme.colors.danger;
}

const Typography = (theme: IDefaultTheme, props: Props) => {
    const result = `
        color: ${props.color ? getColorsFromTheme(props.color, theme) : theme.colors.black};};
        ${props.align ? "text-align: " + props.align + ";" : ""}
        ${props.weight ? "font-weight: " + props.weight + ";" : ""}
        ${props.transform ? "text-transform: " + props.transform + ";" : ""}
        ${props.margin ? "margin: " + props.margin + ";" : ""}
        `
    return result;
}

export const H1 = styled.h1<Props>`
    ${props => props.theme.typography.h1}
    font-weight: ${props => props.weight ? props.weight : 700};
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin,
})}
`

export const H2 = styled.h2<Props>`
    ${props => props.theme.typography.h2}
    font-weight: ${props => props.weight ? props.weight : 600};
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin,
})}
`

export const H3 = styled.h4<Props>`
    ${props => props.theme.typography.h3}
    font-weight: ${props => props.weight ? props.weight : 600};
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin,
})}
`

export const H4 = styled.h4<Props>`
    ${props => props.theme.typography.h4}
    font-weight: ${props => props.weight ? props.weight : 500};
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin,
})}
`


export const Body1 = styled.p<Props>`
    ${props => props.theme.typography.body1}
    font-weight: ${props => props.weight ? props.weight : 500};
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin,
})}
`

export const Span = styled.span<Props>`
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin,
})}
`