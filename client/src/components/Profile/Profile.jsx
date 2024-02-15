import React, { useState } from 'react';
import { useAddress } from '@thirdweb-dev/react';
import ConnectWalletPopup from '../../components/common/popup/ConnectWalletPopup';
import Footer from '../../components/common/Footer/Footer';
import Navbar from '../../components/Home/Navbar/Navbar';
import ProfileTabs from './ProfileTabs';
import NFTCard from '../../components/common/NFTCard';

const Profile = () => {
  const address = useAddress();
  const [tabIndex, setTabIndex] = useState(0);

  const getSelectedTabIndex = (tabIndex) => setTabIndex(tabIndex);

  return (
    <div className="relative">
      <Navbar />
      {!address && <ConnectWalletPopup />}
      <div className="banner-and-small-logo relative -top-28">
        {/* banner logo */}
        <div className="w-full bg-gray-50 text-gray-700">
          <img
            className="w-full h-72"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        {/* small logo */}
        <div className="absolute -bottom-4 left-4 sm:left-10 w-40 h-40">
          <img
            className="rounded-[50%] w-full h-full border-2 border-white"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="w-full -mt-10 px-8 pb-8 text-white">
        <ProfileTabs
          categories={['Created Tokens', 'Listed Tokens', 'Created Campaigns']}
          getSelectedTabIndex={getSelectedTabIndex}
        />
        <div className="w-full">
          {tabIndex === 0 ? (
            // display created/minted NFTs
            <div className="">
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <NFTCard key={number} number={number} />
                ))}
              </div>
            </div>
          ) : tabIndex === 1 ? (
            <div className="">
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
                {[1, 2].map((number) => (
                  <NFTCard key={number} number={number} />
                ))}
              </div>
            </div>
          ) : (
            <div>Crowdfunding Campaigns</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
