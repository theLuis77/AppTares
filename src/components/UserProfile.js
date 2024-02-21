import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import users from '../users.json';

    const UserProfileCard = styled.div`
    border: 1px solid #ccc;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 5px;
    `;

const UserProfile = () => {
    const { id } = useParams();
    const user = users.find(user => user.id === Number(id));

    return user ? (
        <UserProfileCard>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </UserProfileCard>
    ) : null;
};

export default UserProfile;
