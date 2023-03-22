import styled from 'styled-components';

export const FormButtonBox = styled.div`
  width: 100px;
  height: 45px;
  background-color: white;
  display: flex;
  position: relative;
  top: 8px;
  right: 50px;
  border-radius: 6px;
  border: solid 1px black;
`
export const FormText = styled.div`
   font-size:15px;
   font-weight: 600;
   width: 60px;
   height: 30px;
   display: flex;
   align-items: center;
   position: relative;
   top: 8px;
   margin-left: 20px;
`
export const LogintextBox = styled.div`
  width: 300px;
  height: 300px;
  //background-color: aliceblue;
  position: absolute;
  z-index: 10;
  top: 320px;
  left: 598px;
`

export const EasyBox = styled.div`
  width: 100px;
  height: 30px;
  //background-color: blueviolet;
  position: relative;
  left: 110px;
  top: 20px;
  //background-color: pink;
  font-weight: 600;
`
export const FirstBox = styled.div`
  width: 290px;
  height: 30px;
  display: flex;
  position: absolute;
  bottom: 40px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 13px;
  //background-color: aqua;

`

export const LinkBox = styled.div`
  display: flex;
  width: 60px; 
  font-size: 14px;
  font-weight: 600;
  color:#4f67ff;
  margin-left: 10px;
  
`



export const LogoimgsBox = styled.div`
  width: 220px;
  height: 60px;
  display: flex;
  position: absolute;
  z-index: 100;
  top: 70px;
  margin-left:75px;
  z-index: 10;

  & img{
    width: 50px;
    height: 50px;
    margin-left: 20px;  
  }
`
export const ButtonBox = styled.div`
  width: 270px;
  height: 60px;
  //background-color: green;
  position:absolute;
  top: 480px; 
  left: 610px;
` 
export const Button = styled.button`
  position: relative;
  z-index: 10;
  background-color: white;
  border: solid 1px #cbccd3;
  width: 270px;
  height: 50px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
`