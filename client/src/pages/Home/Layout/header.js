import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderLoginButton  from '../Button/button';
//import { KAKAO_AUTH_URL }  from '../../../utils/OAuth'
import LogoutButton from '../Button/logoutboutton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { device } from '../../../styles/media';

const LayoutHeader = () => {
  //const dispatch = useDispatch();
  // console.log(props);
  // console.log("header");
   //const token = window.localStorage.getItem("accessToken");

  //  const [tokenKey, setToknkey] = useState();

  //   const token = window.localStorage.getItem("accessToken");
  ///state.authToken
      const { accessToken } = useSelector(state => state.authToken);
      console.log("accessToken",accessToken);

  // //console.log(token);

  // useEffect(() =>{
  //    console.log("APP");
 	// 	axios.post('http://localhost:3001/auth/silent-refresh',{}, {
 	// 		withCredentials : true
 	// 	}).then(res => {
 	// 	  console.log(JSON.stringify(res.data));
  //     if(res.data.accessToken){
  //         window.localStorage.setItem("accessToken",res.data.accessToken);
  //         axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken;
  //         setToknkey(res.data.accessToken);
  //        //setAccessToken(res.data.accessToken);
  //     }
 	//   });
  //  },[]);

  return(
    <>
      <HeaderContainer>
        <img alt='logoimg' src='./img/boxlog.png'/>
        <CategoryBox>
          <InnerBox>
          <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/product">서비스</Link>
          <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/service">요금안내</Link>
          <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/product">제품등록</Link>
          </InnerBox>
            {accessToken != null ? <LogoutButton/> : <HeaderLoginButton/>
          }
          
        </CategoryBox>
      </HeaderContainer>
    </>
  )
}
export default LayoutHeader

const HeaderContainer = styled.div`
  width: 1536px;
  height: 80px;
  background-color: white;
  //background-color: pink;
  display:flex;
  justify-content: space-between;
  position: fixed;
  top: -1px;
  
  @media screen and (min-width: 1536px) {
        width: 1856px;
    }

  & img{
    width: 130px;
    height: 130px;
    display: flex;
    position: relative;
    bottom:20px;
    margin-left: 200px;
  }
`
const CategoryBox = styled.div`
  width: 500px;
  height: 60px;
  background-color: white;
  display: flex;
  position: relative;
  right: 100px;
  margin-top: 10px;
`
const InnerBox = styled.div`
  width: 400px;
  height: 20px;
  gap: 60px;
  display: flex;
  position: relative;
  top: 20px;
`