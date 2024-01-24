// pages/index.js
// import ParticlesContainer from '../components/ParticlesContainer';
// import ProjectsBtn from '../components/ProjectsBtn';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
import Avatar from '../components/Avatar';

import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const name = 'by Putu Adelio';
    const textLength = isTyping ? typedText.length + 1 : typedText.length - 1;
    const newText = name.substring(0, textLength);

    const typingInterval = setInterval(() => {
      setTypedText(newText);
      if (textLength === name.length + 1 || textLength === 0) {
        setIsTyping(!isTyping);
      }
    }, 150);

    return () => {
      clearInterval(typingInterval);
    };
  }, [typedText, isTyping]);

  return (
    <div className="h-screen overflow-y-auto"> {/* Tambahkan class overflow-y-auto untuk mengaktifkan scroll */}
      <div className="w-full h-full flex-wrap lg:flex-row items-center mx-auto">
        <div className="text-center mt-16 mx-auto lg:mx-0 lg:mt-2"> {/* Tambahkan mx-auto dan lg:mx-0 */}
          <h1 className="h1 xl:text-5xl lg:text-sm">
            Website Tugas <br /> {' '}
            <span className="text-cyan-400 mt-2">
              {typedText}
              <span className="text-cyan-400" style={{ opacity: isTyping ? 1 : 0 }}>|</span>
            </span>
          </h1>
          <p className="text-black font-semi-bold xl:text-base md:text-xs sm:text-xs semid max-w-sm mb-3 mx-auto text-center">
  Sebuah website yang berisi tentang tempat menyimpan link-link tugas informatika, ada 3 menu
  icon yang berada di website ini dan mempunyai fungsinya masing-masing
</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-2/5 xl:w-1/2 px-4 mt-4 lg:mt-0 mx-auto"> {/* Tambahkan mx-auto */}
          <Avatar responsiveSize={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
