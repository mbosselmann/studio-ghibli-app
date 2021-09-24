import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    p {
        font-size: 0.9rem;
    }

    strong {
        font-size: 0.8rem;
        margin-right: 5px;
    }
`;

export default GlobalStyles;
