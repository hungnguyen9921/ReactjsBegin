import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Navbar/Header';
import SingleImages from '../../assests/images/iphone-13-blue-1-600x600.jpg';
function SingleProduct() {
      const params = useParams();
      console.log(params.id);
      return (
            <>
                  <Header />
                  <div className="mt-[50px] pb-[30px]">
                        <div className="max-w-8xl mx-auto pl-[10px] bg-white rounded shadow-3xl">
                              <img height={394} width={394} src={SingleImages} alt="" />
                        </div>
                  </div>
            </>
      );
}

export default SingleProduct;
