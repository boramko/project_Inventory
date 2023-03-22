import FormLayout from '../../common/Layout/FormLayout';
import LoginButton from '../../common/Button/login';
import styled from 'styled-components';
import LoginText from './LoginText/LoginText';

const LoginForm = ()  => {
  return(
    <>
      
      <LoginButton/>
      <LoginText/>
      <FormLayout/>
    </>
  )
};
export default LoginForm;

