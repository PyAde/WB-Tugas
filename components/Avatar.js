import Image from 'next/image';

const Avatar = ({ responsiveSize }) => {
  return (
    <div className={`flex ${responsiveSize ? 'xl:flex' : ''} xl:max-w-none items-center`}>
      {/* Displayed on larger screens (xl and above) */}
      <div className={`hidden xl:block overflow-hidden ${responsiveSize ? 'mt-4' : ''}`}>
        <div className="rounded-full border-8 border-white ring-4 ring-cyan-400 overflow-hidden">
          <Image src={'/Avatar5.jpg'} width={responsiveSize ? 180 : 100} height={responsiveSize ? 350 : 250} alt="" className="w-full translate-z-0 h-full" />
        </div>
      </div>

      {/* Displayed on smaller screens (below xl) */}
      <div className="xl:hidden rounded-full border-8 border-white ring-4 ring-cyan-400 overflow-hidden mt-4">
        <Image src={'/Avatar5.jpg'} width={135} height={85} alt="" className="w-full translate-z-0 h-full" />
      </div>
    </div>
  );
};

export default Avatar;
