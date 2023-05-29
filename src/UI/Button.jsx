import { useDispatch } from "react-redux";
import { styled } from "styled-components";

const Button = ({ onClick, text }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(onClick());
  };

  return <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  background-color: aquamarine;
  color: #fff;
  border: none;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
