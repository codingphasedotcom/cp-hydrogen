
import {useState} from 'react';
import {Link} from '@shopify/hydrogen/client';
import CartToggle from '../../../src/components/CartToggle.client';
import CurrencySelector from '../../../src/components/CurrencySelector.client';
import Navigation from '../../../src/components/Navigation.client';
import MobileNavigation from '../../../src/components/MobileNavigation.client';


export default function Header3({storeName}) {
	return (
		<header className="header header1">
			<div className="header3__logo">
				<a href="/link">{storeName}</a>
			</div>

			<ul className="header3__collections-nav">
        
        <li className="header3__collection-link">
          <a href="/collections/men">
            Men</a>
        </li>
        <li className="header3__collection-link">
          <a href="/collections/women">
            Women</a>
        </li>
				<li className="header3__collection-link">
          <a href="/link" >Products<i className="fas fa-chevron-down"></i></a>
          <ul className="collection-link__sub-links">
            <li><a href="/collections/adidas">Adidas</a></li>
            <li><a href="/collections/nike">Nike</a></li>
            <li><a href="/collections/supra">Supra</a></li>
          </ul>
        </li>
				<CartToggle
              handleClick={() => {
                if (isMobileNavOpen) setIsMobileNavOpen(false);
              }}
            />
			</ul>
		</header>
	);
}

// export default function Header({collections, storeName}) {
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//   return (
//     <header className="h-20 lg:h-32" role="banner">
//       <div
//         className={`fixed z-20 h-20 lg:h-32 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${
//           isMobileNavOpen ? '' : 'bg-opacity-95'
//         }`}
//       >
//         <div className="h-full flex lg:flex-col place-content-between">
//           <div className="text-center w-full flex justify-between items-center">
//             <CurrencySelector />
//             <MobileNavigation
//               collections={collections}
//               isOpen={isMobileNavOpen}
//               setIsOpen={setIsMobileNavOpen}
//             />
//             <Link
//               className="font-black uppercase text-3xl tracking-widest"
//               to="/"
//             >
//               {storeName}
//             </Link>
//             <CartToggle
//               handleClick={() => {
//                 if (isMobileNavOpen) setIsMobileNavOpen(false);
//               }}
//             />
//           </div>
//           <Navigation collections={collections} storeName={storeName} />
//         </div>
//       </div>
//     </header>
//   );
// }
