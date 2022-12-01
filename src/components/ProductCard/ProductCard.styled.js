import styled from "styled-components";

export const ProductCardContainer = styled.article`
    border: 1px solid black;
    margin: 8px 0;
    margin-right: 8px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    > div {
        padding: 8px;

    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;


    }

    .card-price-and-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        button {
            padding: 4px;
        }

    }

    .cart-card-delete {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #FF5C5C;
        color: white;
        border-radius: 5px;
        margin-top: 4px;
        margin-right: 4px;
        :hover{
            cursor: pointer;
            filter: brightness(.95);
        }
        :active{
            filter: brightness(.85)
        }
    }





`