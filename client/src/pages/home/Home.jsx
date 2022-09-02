import React from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Feed from '../../components/Feed/Feed';
import MainProduct from '../../components/Product/MainProduct';
import UserProduct from '../../components/Product/UserProduct';
import { useContext, useState } from 'react';
import Header from '../../components/Navbar/Header';
function Home() {
      const { user: currentUser } = useContext(AuthContext);
      const [name, Setname] = useState('');
      return (
            <div>
                  <Header></Header>
                  <Feed />
                  <MainProduct />
                  <UserProduct />
            </div>
      );
}

export default Home;
