import React from 'react';

const UserScreen = ({ user }) => {
  return (
    <div className="user-screen">
      <h2>{user.username}</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Admin:</strong> {user.is_admin ? 'Yes' : 'No'}</p>
      <p><strong>Staff:</strong> {user.is_staff ? 'Yes' : 'No'}</p>
      <p><strong>Active:</strong> {user.is_active ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default UserScreen;
