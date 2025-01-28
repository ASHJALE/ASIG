import React from 'react';

const Table = ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Admin</th>
                    <th>Staff</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.is_admin ? 'Yes' : 'No'}</td>
                        <td>{user.is_staff ? 'Yes' : 'No'}</td>
                        <td>{user.is_active ? 'Yes' : 'No'}</td>
                        <td>
                            <button onClick={() => alert(`Redirecting to ${user.username}`)}>View User</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;