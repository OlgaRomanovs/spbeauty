import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: 1px;
    border-radius: 24px;
    color: #666787;
`;

function ListElement(props) {
    return (
        <div className='d-inline-flex flex-row align-items-center align-self-stretch gap-4'>
            <Option className='flex-grow-1 py-2'>{props.children}</Option>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        </div>
    );
}
export default ListElement;