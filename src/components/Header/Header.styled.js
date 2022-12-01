import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 12px;

    .button-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        background-color: #518fd8;
        border: none;
        width: 70px;
        height: 50px;
        margin: 0 4px;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(.9);
        }
        

    
}
    .cart-btn {
        position: relative;

    }
    .cart-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 10%;
        right: 10%;
        margin-left:4px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: white;

    }
    `
