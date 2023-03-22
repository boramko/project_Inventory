import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormButtonBox, FormText } from '../../../styleComponents/FormPageComponents/FormStyleDetail';
import { DELETE_TOKEN } from '../../../redux/Auth';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const LogoutButton = () => {
  
  const dispatch = useDispatch();

  const Logout = () => {
      if(window.confirm("로그아웃 할꺼냐?")){
        //dispatch(DELETE_TOKEN());
        axios.post('http://localhost:3001/api/user/logout',{}, {withCredentials : true})
        .then(res => {
          window.location.href="/";
        });
      }
    }

  return(
    <>
    <Link to="#" style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }}>
    <FormButtonBox>
      <FormText onClick={Logout}>로그아웃</FormText>
    </FormButtonBox>
    </Link>
    </>
  )
};
export default LogoutButton;

