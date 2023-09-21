import React, { useState } from 'react';
import NavBar from '../navbar/NabBar';
import Head from '../../common/header/Head';
import Footer from '../../common/footer/Footer';
import './userinfo.css';

const UserInfo = () => {
  const initialUserInfo = {
    name: 'John Doe',
    dateOfBirth: '01/01/1990',
    gender: 'Male',
    phoneNumber: '123-456-7890',
    email: 'johndoe@example.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  // Create state variables for user information
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleInputChange = (e, field) => {
    // Update the corresponding field in the user information state
    setUserInfo({
      ...userInfo,
      [field]: e.target.value,
    });
  };
  console.log(userInfo);

  return (
    <>
      <Head />
      <NavBar />

      <div className="user-info-container">
        <h2>User Information</h2>
        <div className="user-info-column">
          
          <ul className="user-info-list">
            <li>
              <strong>Name:</strong>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => handleInputChange(e, 'name')}
              />
            </li>
            <li>
              <strong>Date of Birth:</strong>
              <input
                type="text"
                value={userInfo.dateOfBirth}
                onChange={(e) => handleInputChange(e, 'dateOfBirth')}
              />
            </li>
            <li>
              <strong>Gender:</strong>
              <input
                type="text"
                value={userInfo.gender}
                onChange={(e) => handleInputChange(e, 'gender')}
              />
            </li>
            <li>
              <strong>Phone Number:</strong>
              <input
                type="text"
                value={userInfo.phoneNumber}
                onChange={(e) => handleInputChange(e, 'phoneNumber')}
              />
            </li>
            <li>
              <strong>Email:</strong>
              <input
                type="text"
                value={userInfo.email}
                onChange={(e) => handleInputChange(e, 'email')}
                
              />
            </li>
            <li>
              <strong>Description:</strong>
              <textarea
                type="text"
                value={userInfo.description}
                onChange={(e) => handleInputChange(e, 'description')}
                maxLength={250}
              />
            </li>
          </ul>

          <ul className="user-info-list">
            <li>
              <strong>Address:</strong>
              <input
                type="text"
                value={userInfo.address}
                onChange={(e) => handleInputChange(e, 'address')}
              />
            </li>
            <li>
              <strong>Education Level:</strong>
              <input
                type="text"
                value={userInfo.educationLevel}
                onChange={(e) => handleInputChange(e, 'educationLevel')}
              />
            </li>
            <li>
              <strong>Favorite:</strong>
              <input
                type="text"
                value={userInfo.favorite}
                onChange={(e) => handleInputChange(e, 'favorite')}
              />
            </li>
            <li>
              <strong>Place of Birth:</strong>
              <input
                type="text"
                value={userInfo.placeOfBirth}
                onChange={(e) => handleInputChange(e, 'placeOfBirth')}
              />
            </li>
            {/* Add more new fields as needed */}
          </ul>

          
        </div>
      </div>

      <div className="user-actions">
        <button>Change Password</button>
      </div>

      <Footer />
    </>
  );
};

export default UserInfo;
