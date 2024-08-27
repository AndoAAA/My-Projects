import * as S from "./styled.js";


const Button = ({title, onClick}) => {


    return (
        <S.Button onClick={onClick}>{title}</S.Button>
    )
};

export default Button;