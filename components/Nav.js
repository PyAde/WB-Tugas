// icons
import { HiHome, HiWindow, HiEnvelope } from 'react-icons/hi2';
import styled from 'styled-components';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'tugas', path: '/tugas', icon: <HiWindow /> },
  { name: 'report-tugas', path: '/report-tugas', icon: <HiEnvelope /> },
];

// next link
import Link from 'next/link';
import { useRouter } from 'next/router';

// StyledLink adalah komponen styled-component yang akan mengatur tampilan link
const StyledLink = styled.a`
  color: ${(props) => (props.isActive ? 'accentColor' : 'white')};
  &:hover {
    color: accentColor;
  }
`;

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-20 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-black backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((link, index) => (
          <Link className={`${link.path === pathname && 'text-yellow-500'}`} href={link.path} key={index}>
            {/* Menggunakan StyledLink dan mempassing prop isActive */}
            <StyledLink isActive={link.path === pathname} className={`relative flex items-center group hover:text-yellow-500`}>
              <div>{link.icon}</div>
            </StyledLink>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
