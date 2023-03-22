import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({component:Component, status:Status}) => {
	let result = null;

	const { accessToken } = useSelector(state => state.authToken);

	if(accessToken != null ? true : false){
		result = Component;
	}else{
		result = <Navigate to='/' {...alert("접근할수 없음 페이지 입니다")}/>;
	}
	return result;
};
export default PrivateRoute