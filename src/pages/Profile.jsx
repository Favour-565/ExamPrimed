/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useUserManagement } from "../hooks/useUserManagement";
import ProfileSection from "../components/userProfile/ProfileSection";
import ActionButton from "../components/userProfile/ActionButton";
import ActionItem from "../components/userProfile/ActionItem";
import Header from "../components/common/Header";
import SubmitButton from "../components/userProfile/SubmitButton";
import useAuthStore from "../data/stores/authStore";
import { useNavigate } from "react-router-dom";
import useErrorStore from "../data/stores/errorStore";
import { toast } from "react-toastify";
import { apiCall, useLogout } from "../data/useFetcher";
import Button from "../components/auth/Button";

function Profile() {
  const {
    // updateUserProfile,
    // logout: logOutMock,
    isLoading,
    error,
  } = useUserManagement();
  const [profileData, setProfileData] = useState({
    // name: "Mark Obidiegwu",
    // email: "markobidiegwu@gmail.com",
    // phone: "+234 0812 345 6789",
    newName: "",
    newPhone: "",
    totalCoins: 0,
    coinHistory: [],
  });
  const [activeModal, setActiveModal] = useState(null);
  // const [updateStatus, setUpdateStatus] = useState({
  //   success: false,
  //   message: "",
  // });

  // useEffect(() => {
  //   const mockCoinHistory = [
  //     {
  //       date: "2024-03-21",
  //       type: "purchase",
  //       amount: 1000,
  //       price: "1,000NGN",
  //       balance: 1000,
  //     },
  //     {
  //       date: "2024-03-22",
  //       type: "used",
  //       amount: 200,
  //       description: "Feature access",
  //       balance: 800,
  //     },
  //     {
  //       date: "2024-03-23",
  //       type: "purchase",
  //       amount: 500,
  //       price: "500NGN",
  //       balance: 1300,
  //     },
  //   ];

  //   setProfileData((prev) => ({
  //     ...prev,
  //     totalCoins: 1300,
  //     coinHistory: mockCoinHistory,
  //   }));
  // }, []);

  const actionItems = [
    {
      icon: "/Icons/User.png",
      text: "Enter Your First Name",
      action: () => setActiveModal("firstName"),
    },
    {
      icon: "/Icons/User.png",
      text: "Enter Your Last Name",
      action: () => setActiveModal("lastName"),
    },
    {
      icon: "/Icons/uiw_mail.png",
      text: "Email Address",
      action: () => setActiveModal("email"),
    },
    {
      icon: "/vectors/number.png",
      text: "Mobile Number",
      action: () => setActiveModal("telephone"),
    },
    {
      icon: "/vectors/invite friends.png",
      text: "Invite Friends",
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: "Join me on our platform",
            text: "Check out this awesome app!",
            url: window.location.origin,
          });
        }
      },
    },
    {
      icon: "/vectors/delete.png",
      text: "Delete Account",
      className: "text-red-500 text-xs",
      action: () => setActiveModal("delete"),
    },
    {
      icon: "/vectors/coin history.png",
      text: "Coin History",
      action: () => setActiveModal("coinHistory"),
    },
    {
      icon: "/vectors/share app.png",
      text: "Share App",
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: "Check out this app",
            text: "I think you'll love this app!",
            url: window.location.origin,
          });
        }
      },
    },
  ];

  // const handleSubmit = async () => {
  //   if (!profileData.newName && !profileData.newPhone) {
  //     setUpdateStatus({
  //       success: false,
  //       message: "No changes to update",
  //     });
  //     return;
  //   }

  //   try {
  //     const updatedData = await updateUserProfile({
  //       name: profileData.newName || profileData.name,
  //       phone: profileData.newPhone || profileData.phone,
  //     });

  //     setProfileData((prev) => ({
  //       ...prev,
  //       name: profileData.newName || prev.name,
  //       phone: profileData.newPhone || prev.phone,
  //       newName: "",
  //       newPhone: "",
  //     }));

  //     setUpdateStatus({
  //       success: true,
  //       message: "Profile updated successfully",
  //     });
  //     setActiveModal(null);
  //   } catch (err) {
  //     setUpdateStatus({
  //       success: false,
  //       message: error || "Failed to update profile",
  //     });
  //   }
  // };

  const { isAuth, user, getCoinHistory, coinHistory, setUser } = useAuthStore(),
    { handleLogout: importLogout } = useLogout(),
    navigate = useNavigate(),
    [loading, setLoading] = useState(null),
    { returnErrors } = useErrorStore(),
    handleSubmit = async () => {
      if (!activeModal) return;
      if (!profileData?.[activeModal]) {
        // setUpdateStatus({
        //   success: false,
        //   message: "No changes to update",
        // });
        return toast.info("No changes to update");
      }

      setLoading(activeModal);

      let { response, errArr, errMsg } = await apiCall({
        type: "put",
        url: `/api/v1/user`,
        data: { [activeModal]: profileData?.[activeModal] },
      });
      // console.log({ response, errArr, errMsg });
      if (errArr) {
        setLoading(false);
        return returnErrors(errArr);
      }
      if (errMsg) {
        setLoading(false);
        return toast.error(errMsg);
      }
      setLoading(false);
      if (response) {
        setProfileData({});
        setActiveModal(null);
        setUser(response);
        return;
      }
      setLoading(false);

      // try {
      //   const updatedData = await updateUserProfile({
      //     name: profileData.newName || profileData.name,
      //     phone: profileData.newPhone || profileData.phone,
      //   });

      //   setProfileData((prev) => ({
      //     ...prev,
      //     name: profileData.newName || prev.name,
      //     phone: profileData.newPhone || prev.phone,
      //     newName: "",
      //     newPhone: "",
      //   }));

      //   setUpdateStatus({
      //     success: true,
      //     message: "Profile updated successfully",
      //   });
      //   setActiveModal(null);
      // } catch (err) {
      //   setUpdateStatus({
      //     success: false,
      //     message: error || "Failed to update profile",
      //   });
      // }
    };

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth, navigate]);

  useEffect(() => {
    apiCall({
      type: "get",
      url: "/api/v1/history",
      getter: (d) => getCoinHistory(d),
    });
    apiCall({
      type: "get",
      url: "/api/v1/user",
      getter: (d) => setUser(d),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    try {
      // await logOutMock();
      importLogout();
    } catch (err) {
      // setUpdateStatus({
      //   success: false,
      //   message: error || "Failed to logout",
      // });
      toast.info(error || err || "Failed to logout");
    }
  };
  const handleDeleteAccount = () => {
    console.log("Deleting account...");
    setActiveModal(null);
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-gray-50">
      <img
        loading="lazy"
        src="\images\profilebg.svg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <Header />

      <section className="relative mx-auto mt-20 flex w-full max-w-[1204px] flex-col px-4 py-8 md:mt-28 md:px-8 md:py-12">
        <div className="w-full rounded-xl bg-white p-6 md:p-8">
          <div className="mx-auto max-w-[1004px]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <ProfileSection
                  name={profileData.name}
                  email={profileData.email}
                  phone={profileData.phone}
                />
              </div>

              <div className="flex flex-col lg:col-span-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  {actionItems.slice(0, 4).map((item, index) => (
                    <div
                      key={index}
                      onClick={item.action}
                      className="cursor-pointer"
                    >
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

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  {actionItems.slice(4, 6).map((item, index) => (
                    <div
                      key={index}
                      onClick={item.action}
                      className="cursor-pointer"
                    >
                      <ActionItem
                        icon={item.icon}
                        text={item.text}
                        className={item.className}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-6">
                  {actionItems.slice(6).map((item, index) => (
                    <div
                      key={index}
                      onClick={item.action}
                      className="cursor-pointer"
                    >
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
                  className="mt-8 bg-red-700"
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {["lastName", "firstName", "email", "telephone"]?.includes(
        activeModal,
      ) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h3 className="mb-4 text-xl font-semibold">
              Update{" "}
              {activeModal === "email"
                ? "Email Address"
                : activeModal === "telephone"
                  ? "Phone Number"
                  : "Name"}
            </h3>
            <input
              type={
                activeModal === "email"
                  ? "email"
                  : activeModal === "telephone"
                    ? "tel"
                    : "text"
              }
              value={profileData?.[activeModal] || user?.[activeModal]}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  [activeModal]: e.target.value,
                }))
              }
              readOnly={activeModal === "telephone"}
              className="mb-4 w-full rounded border p-2"
              placeholder={
                activeModal === "email"
                  ? "Enter new name"
                  : activeModal === "telephone"
                    ? "Enter new phone number"
                    : "Enter new email address"
              }
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              {/* <button
                onClick={handleSubmit}
                className="rounded bg-cyan-950 px-4 py-2 text-white"
              >
                Save
              </button> */}
              <Button
                label={"Save"}
                onClick={handleSubmit}
                loading={loading && loading === activeModal}
                className="rounded bg-cyan-950 px-4 py-2 text-white"
              />
            </div>
          </div>
        </div>
      )}

      {activeModal === "phone" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h3 className="mb-4 text-xl font-semibold">Update Phone</h3>
            <input
              type="text"
              value={profileData.newPhone}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  newPhone: e.target.value,
                }))
              }
              className="mb-4 w-full rounded border p-2"
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
                className="rounded bg-cyan-950 px-4 py-2 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === "delete" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h3 className="mb-4 text-xl font-semibold">Delete Account</h3>
            <p className="mb-4">
              Are you sure you want to delete your account?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="rounded bg-red-500 px-4 py-2 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === "coinHistory" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-4xl rounded-lg bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Coin History</h3>
              <div className="text-lg">
                Current Balance:{" "}
                <span className="font-bold text-cyan-950">
                  {user?.triviaPoints} coins
                </span>
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
                  {coinHistory?.docs?.map((transaction, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3">
                        {new Date(transaction?.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        {
                          // transaction?.type === "credit"
                          //   ? `Purchased (${transaction?.price})`
                          //   :
                          transaction?.description
                        }
                      </td>
                      <td
                        className={`px-4 py-3 text-right ${
                          transaction?.type === "credit"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction?.type === "credit" ? "+" : "-"}
                        {transaction?.coins}
                      </td>
                      <td className="px-4 py-3 text-right font-medium">
                        {transaction?.coinsAfter}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="rounded bg-cyan-950 px-6 py-2 text-white"
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

export const AvatarImg = ({ user, style, css }) => {
  return (
    <div
      className={`relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-cyan-950 bg-gray-100 dark:bg-gray-600 ${
        css || ""
      }`}
      style={style || null}
    >
      <span
        className={`font-medium text-gray-600 dark:text-gray-300 ${
          style ? "text-7xl font-bold" : ""
        } uppercase`}
      >
        {user?.firstName?.slice(0, 1) || ""}
        {""}
        {user?.lastName?.slice(0, 1) || ""}
      </span>
    </div>
  );
};
