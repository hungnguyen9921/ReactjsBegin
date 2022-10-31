import React from 'react';
import Feed from '../../components/Feed/Feed';
import MainProduct from '../../components/Product/MainProduct';
import UserProduct from '../../components/Product/UserProduct';

function Home() {
      return (
            <>
                  <Feed />
                  <MainProduct />
                  <UserProduct />
            </>
      );
}

export default Home;
