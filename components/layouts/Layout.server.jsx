import {
  Image,
  useShopQuery,
  flattenConnection,
  LocalizationProvider,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Header from '../../src/components/Header.client';
import Footer from '../../components/Footer/Footer';
import {useCartUI} from '../../src/components/CartUIProvider.client';
import Cart from '../../src/components/Cart.client';
import Collection1 from '../../components/Collections/Collection1/Collection1';
import Header3 from '../../components/Header/Header3/Header3';

export default function Layout({children, hero}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numCollections: 3,
    },
    cache: {
      maxAge: 60,
      staleWhileRevalidate: 60 * 10,
    },
  });
  const {isCartOpen, closeCart} = useCartUI();
  const collections = data ? flattenConnection(data.collections) : null;
  const products = data ? flattenConnection(data.products) : null;
  const storeName = data ? data.shop.name : '';

  return (
    <LocalizationProvider>
      <div className="absolute top-0 left-0">
        <a
          href="#mainContent"
          className="p-4 focus:block sr-only focus:not-sr-only"
        >
          Skip to content
        </a>
      </div>
      <div className="min-h-screen max-w-screen text-gray-700 font-sans">
        <Header3 storeName={storeName} />
        {/* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */}
        <div>
          <div
            className={`z-50 fixed top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-400 ${
              isCartOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
            }`}
            onClick={isCartOpen ? closeCart : null}
          />
          <Cart />
        </div>
        <main role="main" id="mainContent" className="relative bg-gray-50">
          {hero}
          
          {children}
        </main>
        

        <Footer />
      </div>
    </LocalizationProvider>
  );
}

const QUERY = gql`
  query indexContent($numCollections: Int!) {
    shop {
      name
    }
    collections(first: $numCollections) {
      edges {
        node {
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
        }
      }
    }
    products(first: 1) {
      edges {
        node {
          handle
        }
      }
    }
  }
  ${Image.Fragment}
`;
