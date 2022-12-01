import styled from "styled-components";

export const Main = styled.main`
    section {
        display: flex;
        flex-wrap: wrap;

        h1, hr {
            flex-grow: 1;
            width: 100vw;
        }

        h1 {
            margin-top: 32px;
        }

        hr {
            margin-top: 16px;
            margin-bottom: 16px;
        }
    }
`

