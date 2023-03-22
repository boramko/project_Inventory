import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState , useEffect } from 'react';
import styled from 'styled-components';
import { ProductListContainer, ProductHeader,Title,ProductBox, InputBox, InnerBox, ItemBox, InnerItemBox,TextBox} from '../../../../styleComponents/ProductPageComponent/productDetail/ProductDetailLayout';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {

  // const [product, setProduct] = useState([
  //   {
  //     id:1,
  //     text:"바닐라시럽"
  //   },
  //   {
  //     id:2,
  //     text:"유리컵"
  //   },
  //   {
  //     id:3,
  //     text:"원두"
  //   }
  // ]);

  const [product, setProductInfo] = useState([{}]);

  const [search, setSearch] = useState("");
  
  

  useEffect(() =>{
    const headers = {
      'authorization' : localStorage.getItem('accessToken')
    }
 		axios.post('http://localhost:3001/api/product/getProduct',{}, {headers
 		}).then(res => {
       setProductInfo([...res.data.result]);
 	  });
  },[]);

  const data = Object.values(product);

  const fnSearch = (items) =>{
    return items.filter((item) => {
      if(item['product_name'] !==  undefined){
        return (
          item['product_name']
              .toString()
              .toLowerCase()
              .indexOf(search.toLowerCase()) > -1
        );
      }
    });
  }

  return(
  <>
  <ProductListContainer>
    <ProductHeader>
      <Title>제품목록</Title>
        <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/product:lnput">
        <PlusButton>
          <FontAwesomeIcon
          icon={faPlus}/>
          제품추가
        </PlusButton>
        </Link>
    </ProductHeader>

    <ProductBox>
      <InputBox
        type="text"
        placeholder='제품 이름 검색'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <InnerBox>
        <AllLook>
          <LookText>전체보기</LookText>
        </AllLook>

        {product && fnSearch(data).map((item, index) => (
          <ItemBox key={item.proudct_id}>
            <InnerItemBox key={item.proudct_id}/>
              <TextBox key={item.product_name}>
                상품명 : {item.product_name} 
                상품가격 : {item.product_price.toLocaleString()}원 
                수량 {item.quantities[0] !== undefined ? item.quantities[0].quantiy : "0" } 개  
              </TextBox>
          </ItemBox>  
        ))}
      </InnerBox>
    </ProductBox>
  </ProductListContainer>
  </>
  )
};
export default ProductList;

const PlusButton = styled.button`
  width: 120px;
  height: 38px;
  position: relative;
  right: 50px;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  border: solid 1px white;
  background-color: #4f67ff;
`

const AllLook = styled.div`
  width: 500px;
  height: 65px;
  //background-color: blue;
  border-right: solid 1px #dfdfe5;
  border-bottom: solid 1px #dfdfe5;

  @media screen and (max-width: 2560px) {                   
    width: 100%;  
  }
`

const LookText = styled.div`
  width: 80px;
  height: 25px;
  //background-color: aliceblue;
  font-weight: 600;
  position: absolute;
  top: 22px;
  left: 20px;
`

