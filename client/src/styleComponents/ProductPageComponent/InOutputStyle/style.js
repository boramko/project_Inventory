import styled from 'styled-components';
import { Title } from '../productDetail/ProductDetailLayout';

export const TitleBox = styled(Title)`
  position: absolute;
  z-index: 20;
  top: 120px;
  left: 320px;
  //color: #50a4fa;
`
export const Choose = styled(TitleBox)`
  top: 210px;
  font-size: 18px;
`
export const OutProducts = styled(Choose)`
  top: 210px;
  left: 870px;
`
export const NumberText = styled.div`
  width: 300px;
  height: 30px;
  background-color: white;
  position: absolute;
  z-index: 40;
  top: 350px;
  left: 960px;
  font-weight: 600;
`

export const InOutButton = styled.button`
  position: relative;
  z-index: 10;
  background-color: #4f67ff;
  color: white;
  border: solid 1px #4f67ff;
  width: 70px;
  height: 35px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
`

export const InOutButtonBox = styled.div`
  width: 80px;
  height: 40px;
  position:absolute;
  top: 660px; 
  left: 320px;
`