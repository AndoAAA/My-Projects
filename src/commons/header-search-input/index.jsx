import * as S from "./styled.js";

const HeaderSearchInput = ({ type, placeholder, onChange, value }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <S.Form action="" onSubmit={onSubmit}>
      <S.Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <S.Button>Search</S.Button>
    </S.Form>
  );
};


export default HeaderSearchInput;
