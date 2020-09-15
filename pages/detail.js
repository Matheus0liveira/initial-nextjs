import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
// import WithAnalytics from '../src/hocs/withAnalytics';

const Detail = ({ repos }) => {

  return (
    <div>
      <Head>
        <title>Details</title>
      </Head>
      <Link href='/home'>
        <a >Go Home</a>
      </Link>
      {repos.map(repo => (
        <ul key={repo.id}>
          <li>
            {repo.name}
          </li>
        </ul>

      ))}


    </div>

  )

};

Detail.getInitialProps = async ({ query }) => {
  console.log(query);

  const response = await axios.get(`https://api.github.com/users/${query.user}/repos`);

  return { repos: response.data };
};


export default Detail;