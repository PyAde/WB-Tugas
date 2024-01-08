// ./components/Layout.js
import { Sora_100, Sora_200, Sora_300, Sora_400, Sora_500, Sora_600, Sora_700, Sora_800 } from '@fontsource/sora';

const sora = {
  '100': Sora_100,
  '200': Sora_200,
  '300': Sora_300,
  '400': Sora_400,
  '500': Sora_500,
  '600': Sora_600,
  '700': Sora_700,
  '800': Sora_800,
};

import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <div className= {'page bg-white text-black bg-cover bg-none-repeat ${sora.variable} font-sora relative'}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
