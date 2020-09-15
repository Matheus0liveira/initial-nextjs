import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import WithAnalytics from '../src/hocs/withAnalytics';
;

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello Home</h1>
      <Link href='/user'>
        <a > Go user</a>
      </Link>
      <Link href={`/detail/Matheus0liveira`}>
        <a > Go Details</a>
      </Link>
    </>
  )

};

export default Home;