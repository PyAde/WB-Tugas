import React, { useState, useEffect } from 'react';

const Window = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = ' Tugas';
    const textLength = isTyping ? typedText.length + 1 : typedText.length - 1;
    const newText = text.substring(0, textLength);

    const typingInterval = setInterval(() => {
      setTypedText(newText);
      if (textLength === text.length + 1 || textLength === 0) {
        setIsTyping(!isTyping);
      }
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  }, [typedText, isTyping]);

  return (
    <div className="flex flex-col items-center mb-8 mt-4">
      <h2 className="text-2xl font-bold mb-4">
        Kantong
        <span className="text-cyan-400">{typedText}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto" style={{ maxHeight: '500px', margin: '10px' }}>
        {/* Task 1 */}
        <div className="bg-blur p-4 rounded-md shadow-md mt-4 mr-4 flex flex-col">
          {/* Task Name */}
          <div className="text-lg font-bold mb-2">Tugas 1</div>

          {/* Task Description */}
          <div className="text-md text-gray-700 mb-2 overflow-wrap break-word whitespace-pre-wrap task-description" style={{ wordBreak: 'break-word', maxWidth: '400px' }}>
            {/* Deskripsi tugas CAPS LOCK YANG PANJANG SEKALI */}
          </div>

          {/* Button */}
          <button className="bg-cyan-400 text-white px-4 py-2 rounded-md mt-auto hover:bg-cyan-200" style={{ width: 'fit-content' }}>Preview</button>
        </div>

        {/* Task 2 */}
        <div className="bg-blur p-4 rounded-md shadow-md mt-4 mr-4 flex flex-col">
          {/* Task Name */}
          <div className="text-lg font-bold mb-2">Tugas 2</div>

          {/* Task Description */}
          <div className="text-md text-gray-700 mb-2 overflow-wrap break-word whitespace-pre-wrap task-description" style={{ wordBreak: 'break-word', maxWidth: '400px' }}>
            {/* Deskripsi tugas CAPS LOCK YANG PANJANG SEKALI */}
          </div>

          {/* Button */}
          <button className="bg-cyan-400 text-white px-4 py-2 rounded-md mt-auto hover:bg-cyan-200" style={{ width: 'fit-content' }}>Preview</button>
        </div>

        {/* Task 3 */}
        <div className="bg-blur p-4 rounded-md shadow-md mt-4 mr-4 flex flex-col">
          {/* Task Name */}
          <div className="text-lg font-bold mb-2">Tugas 3</div>

          {/* Task Description */}
          <div className="text-md text-gray-700 mb-2 overflow-wrap break-word whitespace-pre-wrap task-description" style={{ wordBreak: 'break-word', maxWidth: '400px' }}>
            {/* Deskripsi tugas CAPS LOCK YANG PANJANG SEKALI */}
          </div>

          {/* Button */}
          <button className="bg-cyan-400 text-white px-4 py-2 rounded-md mt-auto hover:bg-cyan-200" style={{ width: 'fit-content' }}>Preview</button>
        </div>

        {/* ...Tambahkan lebih banyak task di sini */}
      </div>
    </div>
  );
};

export default Window;
