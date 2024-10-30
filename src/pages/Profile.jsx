import React, { useState, useEffect } from 'react';
import { useUserManagement } from '../hooks/useUserManagement';
import ProfileSection from '../components/userProfile/ProfileSection';
import ActionButton from '../components/userProfile/ActionButton';
import ActionItem from '../components/userProfile/ActionItem';
import Header from '../components/common/Header';
import SubmitButton from '../components/userProfile/SubmitButton';

function Profile() {
  const { updateUserProfile, logout, isLoading, error } = useUserManagement();
  const [profileData, setProfileData] = useState({
    name: 'Mark Obidiegwu',
    email: 'markobidiegwu@gmail.com',
    phone: '+234 0812 345 6789',
    newName: '',
    newPhone: '',
    totalCoins: 0,
    coinHistory: []
  });
  const [activeModal, setActiveModal] = useState(null);
  const [updateStatus, setUpdateStatus] = useState({ success: false, message: '' });
  

  
  useEffect(() => {
    
    const mockCoinHistory = [
      { 
        date: '2024-03-21', 
        type: 'purchase', 
        amount: 1000, 
        price: '1,000NGN',
        balance: 1000 
      },
      { 
        date: '2024-03-22', 
        type: 'used', 
        amount: 200, 
        description: 'Feature access',
        balance: 800 
      },
      { 
        date: '2024-03-23', 
        type: 'purchase', 
        amount: 500, 
        price: '500NGN',
        balance: 1300 
      }
    ];

    setProfileData(prev => ({
      ...prev,
      totalCoins: 1300, 
      coinHistory: mockCoinHistory
    }));
  }, []);

  const actionItems = [
    { 
      icon: "/Icons/User.png", 
      text: " Name",
      action: () => setActiveModal('name')
    },
    { 
      icon: "/vectors/number.png", 
      text: "Mobile Number",
      action: () => setActiveModal('phone')
    },
    { 
      icon: "/vectors/invite friends.png", 
      text: "Invite Friends",
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Join me on our platform',
            text: 'Check out this awesome app!',
            url: window.location.origin
          });
        }
      }
    },
    { 
      icon: "/vectors/delete.png", 
      text: "Delete Account", 
      className: "text-red-500 text-xs",
      action: () => setActiveModal('delete')
    },
    { 
      icon: "/vectors/coin history.png", 
      text: "Coin History",
      action: () => setActiveModal('coinHistory')
    },
    { 
      icon: "/vectors/share app.png", 
      text: "Share App",
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Check out this app',
            text: 'I think you\'ll love this app!',
            url: window.location.origin
          });
        }
      }
    }
  ];

  const handleSubmit = async () => {
    if (!profileData.newName && !profileData.newPhone) {
      setUpdateStatus({
        success: false,
        message: 'No changes to update'
      });
      return;
    }

    try {
      const updatedData = await updateUserProfile({
        name: profileData.newName || profileData.name,  
        phone: profileData.newPhone || profileData.phone,  
      });


      setProfileData(prev => ({
        ...prev,
        name: profileData.newName || prev.name,
        phone: profileData.newPhone || prev.phone,
        newName: '',
        newPhone: ''
      }));

      setUpdateStatus({
        success: true,
        message: 'Profile updated successfully'
      });
      setActiveModal(null);
    } catch (err) {
      setUpdateStatus({
        success: false,
        message: error || 'Failed to update profile'
      });
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      
    } catch (err) {
      setUpdateStatus({
        success: false,
        message: error || 'Failed to logout'
      });
    }
  };
  const handleDeleteAccount = () => {
    console.log('Deleting account...');
    setActiveModal(null);
  };

  return (
    <main className="flex overflow-hidden relative flex-col min-h-screen bg-gray-50">
      <img 
        loading="lazy" 
        src="\images\profilebg.svg" 
        alt="" 
        className="object-cover absolute inset-0 size-full" 
      />
      <Header />
      
      <section className="relative flex flex-col px-4 md:px-8 py-8 md:py-12 mt-20 md:mt-28 mx-auto w-full max-w-[1204px]">
        <div className="bg-white rounded-xl p-6 md:p-8 w-full">
          <div className="max-w-[1004px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-4">
                <ProfileSection 
                  name={profileData.name}
                  email={profileData.email}
                  phone={profileData.phone}
                />
              </div>

              
              <div className="lg:col-span-8 flex flex-col">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {actionItems.slice(0, 2).map((item, index) => (
                    <div key={index} onClick={item.action} className="cursor-pointer">
                      <ActionItem 
                        icon={item.icon} 
                        text={item.text} 
                        className={item.className}
                      />
                    </div>
                  ))}
                </div>

                
                <SubmitButton
                  text={isLoading ? "UPDATING..." : "SUBMIT"}
                  icon="/Icons/maki_arrow.svg"
                  onClick={handleSubmit}
                  className="my-8"
                  disabled={isLoading}
                />

               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {actionItems.slice(2, 4).map((item, index) => (
                    <div key={index} onClick={item.action} className="cursor-pointer">
                      <ActionItem 
                        icon={item.icon} 
                        text={item.text} 
                        className={item.className}
                      />
                    </div>
                  ))}
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
                  {actionItems.slice(4).map((item, index) => (
                    <div key={index} onClick={item.action} className="cursor-pointer">
                      <ActionItem 
                        icon={item.icon} 
                        text={item.text} 
                        className={item.className}
                      />
                    </div>
                  ))}
                </div>

                
                <ActionButton 
                  text={isLoading ? "LOGGING OUT..." : "Logout"} 
                  icon="\Icons\mdi_logout.svg" 
                  onClick={handleLogout}
                  className="bg-red-700 mt-8"
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {activeModal === 'name' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Update Name</h3>
            <input
              type="text"
              value={profileData.newName}
              onChange={(e) => setProfileData(prev => ({...prev, newName: e.target.value}))}
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter new name"
            />
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-cyan-950 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'phone' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Update Phone</h3>
            <input
              type="text"
              value={profileData.newPhone}
              onChange={(e) => setProfileData(prev => ({...prev, newPhone: e.target.value}))}
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter new phone number"
            />
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-cyan-950 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'delete' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Delete Account</h3>
            <p className="mb-4">Are you sure you want to delete your account?</p>
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              <button 
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      
      {activeModal === 'coinHistory' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Coin History</h3>
              <div className="text-lg">
                Current Balance: <span className="font-bold text-cyan-950">{profileData.totalCoins} coins</span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Transaction</th>
                    <th className="px-4 py-2 text-right">Amount</th>
                    <th className="px-4 py-2 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {profileData.coinHistory.map((transaction, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3">{new Date(transaction.date).toLocaleDateString()}</td>
                      <td className="px-4 py-3">
                        {transaction.type === 'purchase' 
                          ? `Purchased (${transaction.price})`
                          : transaction.description}
                      </td>
                      <td className={`px-4 py-3 text-right ${
                        transaction.type === 'purchase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'purchase' ? '+' : '-'}{transaction.amount}
                      </td>
                      <td className="px-4 py-3 text-right font-medium">{transaction.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-6">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 bg-cyan-950 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Profile;