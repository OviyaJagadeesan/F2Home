import React, { useState,useEffect } from "react";
import "../Styles/EditProfile.css";
import Header from "../Screens/Header";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoListUnordered } from "react-icons/go";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import Footer from "./Footer";
import ProfileChange from "./ProfileChange";
import ChangePassword from "./ChangePassword";
import CustomerSupport from "./CustomerSupport";
import Settings from "./Settings";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const EditProfile = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [personalDetails, setPersonalDetails] = useState(false);
  const [changepassword, setChangePassword] = useState(false);
  const [customersupport, setCustomerSupport] = useState(false);
  const [settings, setSettings] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const clickedNavHandler = () => {
    setShow(!show);
  };

  const profileHandler = () => {
    setChangePassword(false);
    setCustomerSupport(false);
    setPersonalDetails(!personalDetails);
  };

  const passwordHandler = () => {
    setPersonalDetails(false);
    setCustomerSupport(false);
    setChangePassword(!changepassword);
  };

  const CustomerSupportHandler = () => {
    setPersonalDetails(false);
    setChangePassword(false);
    setCustomerSupport(!customersupport);
  };

  const SettingsHandler = () => {
    setPersonalDetails(false);
    setChangePassword(false);
    setCustomerSupport(false);
    setSettings(!settings);
  };

  const logoutHandler = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const toggle = () => {
    setIsShow(!isShow);
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <div>
      <div className="edit-profile-div">
        <Header />
        <div style={{ height: "800px", marginTop: "28px" }}>
          <AiOutlineArrowLeft
            className="left-arrow"
            onClick={toggle}
          ></AiOutlineArrowLeft>
          <div className="edit-profile-bottom-div">
            {isShow ? (
              <div
                className="card left-div"
              >
                <div className="edit-profile-details">
                  <div>
                    <CgProfile className="profile-change-img" />
                  </div>
                  <div className="div-profile" onClick={profileHandler}>
                    <CgProfile className="profile-img" />
                    <p className="profile-text">Profile</p>
                  </div>
                  <div className="div-profile" onClick={passwordHandler}>
                    <RiLockPasswordLine className="profile-img" />
                    <p className="profile-text">Change Password</p>
                  </div>
                  <div className="div-profile">
                    <GoListUnordered className="profile-img" />
                    <p className="profile-text">My Orders</p>
                  </div>
                  <div className="div-profile">
                    <BsFillBookmarkPlusFill className="profile-img" />
                    <p className="profile-text">Address Book</p>
                  </div>
                  <div className="div-profile">
                    <IoMdNotificationsOutline className="profile-img" />
                    <p className="profile-text">Notifications</p>
                  </div>
                  <div className="div-profile" onClick={CustomerSupportHandler}>
                    <RiCustomerService2Fill className="profile-img" />
                    <p className="profile-text">Customer Support</p>
                  </div>
                  <div className="div-profile" onClick={SettingsHandler}>
                    <FiSettings className="profile-img" />
                    <p className="profile-text">Settings</p>
                  </div>
                  <div className="div-profile" onClick={logoutHandler}>
                    <AiOutlineLogout className="profile-img" />
                    <p className="profile-text">Logout</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="card left-div divv"
              >
                <div className="edit-profile-details">
                  <div>
                    <CgProfile className="profile-change-img2" />
                  </div>
                  <div className="div-profile2" onClick={profileHandler}>
                    <CgProfile className="profile-img" />
                  </div>
                  <div className="div-profile2" onClick={passwordHandler}>
                    <RiLockPasswordLine className="profile-img" />
                  </div>
                  <div className="div-profile2">
                    <GoListUnordered className="profile-img" />
                  </div>
                  <div className="div-profile2">
                    <BsFillBookmarkPlusFill className="profile-img" />
                  </div>
                  <div className="div-profile2">
                    <IoMdNotificationsOutline className="profile-img" />
                  </div>
                  <div className="div-profile2" onClick={CustomerSupportHandler}>
                    <RiCustomerService2Fill className="profile-img" />
                  </div>
                  <div className="div-profile2" onClick={SettingsHandler}>
                    <FiSettings className="profile-img" />
                  </div>
                  <div className="div-profile2" onClick={logoutHandler}>
                    <AiOutlineLogout className="profile-img" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {personalDetails && <ProfileChange />}
      {changepassword && <ChangePassword />}
      {customersupport && <CustomerSupport />}
      {settings && <Settings />}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default EditProfile;
