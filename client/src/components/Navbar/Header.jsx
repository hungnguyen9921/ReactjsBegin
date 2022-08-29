import React from 'react';
import Logo from '../../assests/images/logo.png';
export default function Header() {
      return (
            <div className="w-full shadow-3xl z-50 bg-white min-h-[56px] py-[20px]">
                  <div className="w-9/10 mx-auto">
                        <img src={Logo} alt={'Logo'} className="max-h-full max-w-full" />
                  </div>
            </div>
      );
}
