import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons"
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { DELETE_TOKEN } from '../../../../redux/Auth';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import user, { userSlice } from '../../../../redux/user';


const Profile = () => {
  const [isModal, setIsModal] = useState(false);
   const [users, setUsers] = useState({
      //user_img : ""
   });
   const navigate = useNavigate();

  const dispatch = useDispatch();

  const ModalHandler = () => {
    if(!isModal){
      setIsModal(true);
    }else{
      CloseMadal();
    }
  }
  const CloseMadal = () => {
    setIsModal(false);
  }

  const Logout = () => {
    if(window.confirm("로그아웃 할꺼냐?")){
      // dispatch(DELETE_TOKEN());
      // navigate('/')
      axios.post('http://localhost:3001/api/user/logout',{}, {withCredentials : true})
      .then(res => {
        //navigate('/');
        window.location.href="/";
      });
    }
  }

  useEffect(() =>{
  const headers = {
    'authorization' : localStorage.getItem('accessToken')
  }
  axios.post('http://localhost:3001/api/user/userinfo',{}, {headers
  }).then(res => {
    //console.log(JSON.stringify(res.data));
    setUsers(res.data.result);
  });
  },[]);
  
  
  return(
    <>
       { users && <Wrapper>
          <OpenModal onClick={ModalHandler} images={users.user_img}></OpenModal>
          {isModal ? 
           <ModalBackground>
            <ModalBox>
              <UserName>
                {/* {users.user_id.substring(0,users.user_id.lastIndexOf("@"))} */}
                {users.user_name}
                {/* {users.user_id} */}
              </UserName>
              <ModalBtn onClick={CloseMadal}>X</ModalBtn>
            </ModalBox>
            <Setting>
              <FontAwesomeIcon
                icon={faGear}/>
              <SettingText>정보설정</SettingText>
            </Setting>
            <LogoutBox>
              <FontAwesomeIcon
                icon={faGear}/>
              <LogoutText onClick={Logout}>로그아웃</LogoutText>
            </LogoutBox>
          </ModalBackground>
        : null}
      </Wrapper>
      }
    </>
  )
};
export default Profile;

const Wrapper = styled.div`
  width: 50px;
  height: 40px;
  position: absolute;
  z-index: 30;
  top: 15px;
  left: 250px;
  /* background-color: yellow; */
`
const OpenModal = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f1f1f4;
  background-image : url(${props => props.images});
  position: relative;
  border-radius: 50px;
`

const ModalBtn = styled.div`
  width: 10px;
  height: 20px;
  position: absolute;
  left: 180px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  bottom: 20px;  
`

const ModalBackground = styled.div`
  width: 200px;
  height: 130px;
  border-radius: 6px;
  right: 13px;
  top: 50px;
  position: absolute;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  
`
const ModalBox = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  border-radius: 6px 6px 0px 0px;
  background-color: #50a4fa;
`
const UserName = styled.div`
  width: 80px;
  height: 20px;
  position: relative;
  top: 8px;
  left: 10px;
  font-weight: 600;
  color: white;
`
const Setting = styled.div`
  width: 100px;
  height: 20px;
  margin-top: 60px;
  margin-left: 20px;
  background-color: white;
`
const SettingText = styled.div`
  width: 70px;
  height: 20px;
  //background-color: yellow;
  position: absolute;
  left: 47px;
  bottom: 50px;
  color: #434242;
  font-weight: 600;
  font-size: 14px;
`
const LogoutBox = styled(Setting)`
  bottom: 50px;
  position: relative;
`

const LogoutText = styled(SettingText)`
  position: absolute;
  top: 1px;
  left: 28px;
`