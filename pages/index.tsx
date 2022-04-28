import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

const Home: NextPage = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.origin;
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const logIn = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Log in using Moralis',
        provider: 'walletconnect',
        // mobileLinks: ['wallet', 'account'],
        // chainId: 3,
      })
        .then(function (user) {
          console.log('logged in user:', user);
          console.log(user!.get('ethAddress'));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log('logged out');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Wallet Connect Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          onClick={() => logIn()}
          style={{
            color: 'white',
            background: 'blue',
            textTransform: 'uppercase',
            padding: '10px 16px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Connect your wallet
        </button>
        <button
          onClick={() => logOut()}
          style={{
            color: 'white',
            background: 'blue',
            textTransform: 'uppercase',
            padding: '10px 16px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '50px',
          }}
        >
          Logout
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
