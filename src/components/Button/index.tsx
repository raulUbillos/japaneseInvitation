import {Button, ButtonProps} from '@chakra-ui/react';

interface IProps extends ButtonProps{

}

const StyledButton = (props: IProps) => {
    return <Button {...props}/>
}

export default StyledButton;