import React from 'react';
import styles from './NotFound.module.css';
import notFoundImg from '../../Assets/error.svg';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <>
    <HelmetProvider>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found</title>
            </Helmet>
    </HelmetProvider>
      <section className='container my-5 d-flex justify-content-center'>
        <img src={notFoundImg} className='w-50' alt="NotFoundPage" />
      </section>
    </>
  )
}
