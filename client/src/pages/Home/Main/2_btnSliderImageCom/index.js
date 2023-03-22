import styled from 'styled-components';
import { Background, CommonLayoutAll } from '../../../../styles/common';
import { SecondContainer, SecondImgBox } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import { fontsize, fontWeight } from '../../../../styles/theme';
import React from 'react';
import MainStart from '../1_potoCom/start';

const SecondPage = () => {
  return(
    <>
    <MainStart/>
    <SecondContainer>
      <Stext>모든 업무 정보는 실시간으로!</Stext>
      <P2>📱모든 디바이스에서 간편한 입출고!</P2>
      <P3>📃재고 현황 조회는 언제 어디서나!</P3>
      <P4>👩🏼‍🤝‍👩🏻팀원별 권한 세팅으로 효율정인 팀플레이!</P4>
        <SecondImgBox>
        <img alt='logoimg' src='./img/mainimg1.png'/>
        </SecondImgBox>
    </SecondContainer>
    </>
  )
};
export default SecondPage;

const Stext = styled.div`
  width: 450px;
  height: 30px;
  top: 100px;
  left: 50px;
  ${CommonLayoutAll}
  font-size: ${fontsize[4]};
  font-weight: ${fontWeight[1]};
`
const P2 = styled.div`
  width: 300px;
  ${Background}
  top: 200px;
  left: 50px;
`
  const P3 = styled.div`
    width: 310px;
    ${Background}
    top: 300px;
    left:200px;
  `

  const P4 = styled.div`
   width: 330px;
   ${Background}
   top: 400px;
   left: 50px;

  `