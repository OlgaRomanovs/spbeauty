import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        border: 1px solid #DFDFDF;
        border-radius: 24px;
        min-width: ${minWidth};
        color: #152842;
        &:hover {
            background: #F9FAFC;
        }
        &:active {
            background: #DFDFDF;
        }
    `;
    return (
        <Clickable >
            <Button className='p-1 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;