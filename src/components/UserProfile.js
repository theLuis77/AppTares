import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchUsers } from '../actions';
// import users from '../users.json';

    const UserProfileCard = styled.div`
    border: 1px solid #ccc;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 5px;
    `;

const UserProfile = () => {
    const dispatch = useDispatch(); // Crea una función dispatch
  const {users} = useSelector(state => state.users); // Accede al estado de los usuarios

  useEffect(() => {
    dispatch(fetchUsers()); // Despacha la acción fetchUsers
  }, [dispatch]);
 

    const { id } = useParams();
    const user = users.find(user => user.id === Number(id));// filtro por id 

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
