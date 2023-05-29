import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadAns, loadBackSpace, loadButtons, loadClear } from "../store/calculator.slice";
import { logout } from "../store/user.slice";

const CalculatorApp = () => {
  const dispatch = useDispatch();

  //view store
  const viewCalculator = useSelector((state) => state.calculate);
  console.log(viewCalculator, "ADASDSAFSFSF");
  const logOutFunc = () => {
    dispatch(logout());
  };

  return (
    <>
      <SectionStyled>
        <Container>
          <IconAndTegP></IconAndTegP>

          {/* экран */}

          {/* <Block> */}
          <InputCalc
            type="text"
            placeholder="0"
            value={
              viewCalculator.answer.length === 0
                ? viewCalculator.number
                : viewCalculator.answer
            }
          />
          {/* </Block> */}

          {/* ключевая часть */}
          <ButtonTable>
            <ButtonStyle onClick={() => dispatch(loadClear())}>AC</ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadBackSpace())}>
              C
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons("/"))}>
              /
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons("+"))}>
              +
            </ButtonStyle>

            <ButtonStyle onClick={() => dispatch(loadButtons(7))}>
              7
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons(8))}>
              8
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons(9))}>
              9
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons("-"))}>
              -
            </ButtonStyle>

            <ButtonStyle onClick={() => dispatch(loadButtons(4))}>
              4
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons(5))}>
              5
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons(6))}>
              6
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons("*"))}>
              x
            </ButtonStyle>

            <ButtonStyle onClick={() => dispatch(loadButtons(1))}>
              1
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons(2))}>
              2
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons(3))}>
              3
            </ButtonStyle>

            <ButtonStyle onClick={() => dispatch(loadButtons("."))}>
              .
            </ButtonStyle>
            <ButtonStyle onClick={() => dispatch(loadButtons(0))}>
              0
            </ButtonStyle>

            <ButtonStyle onClick={() => dispatch(loadAns())}>=</ButtonStyle>
          </ButtonTable>
        </Container>
      </SectionStyled>
      <LogOut onClick={logOutFunc}>Log Out</LogOut>
    </>
  );
};

const Container = styled.div`
  background-color: #040404;
  width: 400px;
  height: 550px;
  border-radius: 20px;
  margin-top: 5rem;
`;

const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
`;

const IconAndTegP = styled.div`
  color: rgb(186, 213, 222);
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 100%;
  padding: 10px;
  line-height: 0px;
  gap: 4px;
`;

const InputCalc = styled.input`
  width: 396px;
  height: 70px;
  background-color: black;
  border: none;
  font-size: 40px;
  text-align: right;
  color: #fff;
  gap: 10px;
`;

const ButtonStyle = styled.button`
  background-color: #343434;
  color: #fff;
  border: none;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: orange;
  }
`;

const ButtonTable = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 25px;
  margin-right: 0.5rem;
  margin-left: 1rem;
`;

const LogOut = styled.button`
  padding: 0;
  width: 150px;
  height: 50px;
  font-size: 1.5rem;
  background-color: #d3d7e7;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 32px 39px 37px 36px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 32px 39px 37px 36px rgba(34, 60, 80, 0.2);
  box-shadow: 32px 39px 37px 36px rgba(34, 60, 80, 0.2);
  border: none;
  color: #221831;
  &:hover {
    background-color: #99b3c6;
  }
`;

export default CalculatorApp;
