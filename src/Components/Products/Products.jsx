import React, { useContext } from 'react';
import styles from './Products.module.css';

import FeaturedProducts from './../FeaturedProducts/FeaturedProducts';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';

export default function Products() {

 
  return (
    <>
    <HelmetProvider>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
            </Helmet>
  <FeaturedProducts />
    </HelmetProvider>
   </>
  )
}
