import React from 'react';

const Profile = () => {
    const imageUrl = "https://www.terriblytinytales.com/profile.jpeg";

    return (
        <div>
            <img src={imageUrl} alt="Profile" />
        </div>
    );
};

export default Profile;