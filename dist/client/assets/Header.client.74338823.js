import{a as s,j as e,b as l,c}from"./vendor.84248098.js";import o from"./CartToggle.client.5cd0acc9.js";import{C as n}from"./CurrencySelector.client.2d497a17.js";import d from"./Navigation.client.8c8cc55b.js";import p from"./MobileNavigation.client.5e81ddff.js";import"./CartUIProvider.client.0837ea4c.js";import"./CartIconWithItems.client.6376d072.js";import"./open-closed.esm.aa47f60b.js";import"./MobileCurrencySelector.client.c54aeb62.js";import"./use-focus-trap.esm.177adad9.js";function C({collections:a,storeName:r}){const[t,i]=s.exports.useState(!1);return e("header",{className:"h-20 lg:h-32",role:"banner",children:e("div",{className:`fixed z-20 h-20 lg:h-32 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${t?"":"bg-opacity-95"}`,children:l("div",{className:"h-full flex lg:flex-col place-content-between",children:[l("div",{className:"text-center w-full flex justify-between items-center",children:[e(n,{}),e(p,{collections:a,isOpen:t,setIsOpen:i}),e(c,{className:"font-black uppercase text-3xl tracking-widest",to:"/",children:r}),e(o,{handleClick:()=>{t&&i(!1)}})]}),e(d,{collections:a,storeName:r})]})})})}export{C as default};
//# sourceMappingURL=Header.client.74338823.js.map
