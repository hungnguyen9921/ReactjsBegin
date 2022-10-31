import React from 'react';
import Header from '../Navbar/Header';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
function DefaultLayout({ children }) {
      const cart = useSelector((state) => state.cart);
      const { cartItems } = cart;
      return (
            <>
                  <Header value={cartItems.length} />
                  <div className="">{children}</div>
                  <Footer />
            </>
      );
}

export default DefaultLayout;
