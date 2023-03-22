
import styled from 'styled-components';
import {CommonLayout3, InnerText, CommonLayoutAll,Background} from '../../../../styles/common'
import { TextContainer } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import { fontsize, fontWeight } from '../../../../styles/theme';
import TryJoin from './button/button';
import ThirdPage from '../3_processImageCom/layout';

const FourPage = () => {
  return(
    <>
    <ThirdPage/>
    <TextContainer>
      <TextInerBox>
        <P1>실무자가 뽑은 1등 재고관리 앱</P1>
      </TextInerBox>
      <InnerTextBox2>
        <P2>재고관리, 이보다 편할수 없어요.</P2>
      </InnerTextBox2>
        <TryJoin/>
    </TextContainer>
    </>
  )
};
export default FourPage;

const TextInerBox = styled.div`
  ${CommonLayout3}
  top: 60px;
  left: 320px;
  & P1{
      ${InnerText}
  }
`
const P1 = styled.div`
  width: 300px;
  ${Background}
  top: 200px;
  left: 50px;
`
const P2 = styled.div`
  width: 300px;
  ${Background}
  top: 200px;
  left: 50px;
`

const InnerTextBox2 = styled.div`
  width: 500px;
  height: 60px;
  top: 180px;
  right: 100px;
  ${CommonLayoutAll}

  & P2{
      width: 400px;
      height: 30px;
      margin-top: 10px;
      margin-left: 70px;
      font-size: ${fontsize[4]};
      font-weight: ${fontWeight[1]}; 
  }
  
`

