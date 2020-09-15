import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
// import WithAnalytics from '../src/hocs/withAnalytics';

import styled from 'styled-components';

const Title = styled.h1`

  color: red;
  font-weight: bold;
`;


const User = ({ user }) => {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <Link href='/home'>
        <a >Go Home</a>
      </Link>
      <Title>{user.name}</Title>


    </>
  );
};

User.getInitialProps = async () => {

  const response = await axios.get('https://api.github.com/users/Matheus0liveira');


  return { user: response.data };
}

export default User;