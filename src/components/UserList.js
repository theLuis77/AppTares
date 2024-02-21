import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import users from '../users.json';

    const UserCard = styled.div`
    border: 1px solid #ccc;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 5px;
    `;

    const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    `;

const UserList = () => {
    return (
        <div>
            {users.map(user => (
                <UserCard key={user.id}>
                    <StyledLink to={`/users/${user.id}/todos`}>
                        <h2>{user.name}</h2>
                    </StyledLink>
                    <p>{user.email}</p>
                </UserCard>
            ))}
        </div>
    );
};

export default UserList;
