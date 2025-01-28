import React from 'react';
import { useParams } from 'react-router-dom';

const UserScreen = ({ users }) => {
    const { id } = useParams();
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
        return <h2>User not found</h2>;
    }

    return (
        <div className="user-screen">
            <h1>{user.username}</h1>
            <p>ID: {user.id}</p>
            <p>Admin: {user.is_admin ? 'Yes' : 'No'}</p>
            <p>Staff: {user.is_staff ? 'Yes' : 'No'}</p>
            <p>Active: {user.is_active ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default UserScreen;