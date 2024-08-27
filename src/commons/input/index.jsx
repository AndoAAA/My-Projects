import * as S from "./styled.js";



const Input = ({type, placeholder, onChange, value, checked}) => {


    return (
        <S.Input type={type} placeholder={placeholder} onChange={onChange} value={value} checked={checked}/>
    )
};

export default Input;