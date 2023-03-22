import styled from 'styled-components';
import LayoutText from './layouttext';
import React from 'react';
import { CommonLayoutAll } from '../../../../styles/common';
import { ThirdContainer, ThirdBox } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import SecondPage from '../2_btnSliderImageCom/index';

const ThirdPage = () => {
  return(
    <>
    <SecondPage/>
      <ThirdContainer>
        <ThirdBox>
          <Box1>
            <img alt='logoimg' src='./img/balimg.png'/>
          </Box1>
            <Box2>
              <LayoutText/>
            </Box2>
        </ThirdBox>
      </ThirdContainer>
    </>
  )
};
export default ThirdPage;

const Box1 = styled.image`
  width: 400px;
  height: 500px;
  position: relative;
  right: 100px;
  margin-top: 150px;
  //background-color: aqua;
`
const Box2 = styled.div`
  width: 580px;
  height: 500px;
  margin-left: 200px;
  margin-top: 50px;
`