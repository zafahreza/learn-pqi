import React, { useState } from 'react';

export default function MainRuangDiskusi(){

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const handleInputChange = (e) => {
      setNewMessage(e.target.value);
    };
  
    const handleSendMessage = () => {
      if (newMessage.trim() === '') return;
  
      setMessages([...messages, { text: newMessage, user: 'Me' }]);
  
      setNewMessage('');
    };  

    return(
        <main className="pt-[112px] pb-11 w-full min-h-screen flex justify-center">
            <div className="px-[88px] bg-white rounded-[10px] pt-[26px] pb-[30px] h-fit">
                <div className="bg-[#0078CE] w-[865px] h-[70px] rounded-[20px] px-6 flex justify-between items-center mb-[25px]">
                    <div className="flex gap-[18px] items-center">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_194_445)">
                                <path d="M7.65967 15.7148V7.96484H2.90967C1.53467 7.96484 0.409668 9.08984 0.409668 10.4648V17.9648C0.409668 19.3398 1.53467 20.4648 2.90967 20.4648H4.15967V24.2148L7.90967 20.4648H14.1597C15.5347 20.4648 16.6597 19.3398 16.6597 17.9648V15.6898C16.5775 15.7075 16.4937 15.7163 16.4097 15.7161H7.65967V15.7148ZM22.9097 1.71484H11.6597C10.2847 1.71484 9.15967 2.83984 9.15967 4.21484V14.2148H17.9097L21.6597 17.9648V14.2148H22.9097C24.2847 14.2148 25.4097 13.0911 25.4097 11.7148V4.21484C25.4097 2.83984 24.2847 1.71484 22.9097 1.71484Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_194_445">
                                    <rect width="25" height="25" fill="white" transform="translate(0.409668 0.464844)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="font-Poppins font-[500] text-[24px] text-white">Ruang Diskusi</p>
                    </div>
                    <div>
                        <p className="font-[700] text-[20px] text-white">PQI - 2D 2023</p>
                    </div>
                </div>
                <div className="px-[31px] flex justify-center items-center gap-[15px] mb-6">
                    <div className="w-full h-[1px] bg-black"></div>
                    <p className="font-[500] text-[14px]">20/06/2023</p>
                    <div className="w-full h-[1px] bg-black"></div>
                </div>
                <div className="flex flex-col gap-1 mb-[10px]">
                    <div className="flex gap-[10px] items-center">
                        <p className="font-[600] text-[14px] text-black">Yolanda Putri Wulandaru</p>
                        <p className="font-[400] text-[12px] text-black opacity-60">10.14</p>
                    </div>
                    <p className="font-[400] text-[14px] text-black">Assalamulaikum pak, perkuliahan untuk minggu ini online atau offline ya?</p>
                </div>
                <div className="flex flex-col gap-1 mb-[10px]">
                    <div className="flex gap-[10px] items-center">
                        <p className="font-[600] text-[14px] text-black">Drs. M. Tabah Rosyadi, M.A.</p>
                        <p className="font-[400] text-[12px] text-black opacity-60">10.14</p>
                    </div>
                    <p className="font-[400] text-[14px] text-black">Minggu ini online yaa.</p>
                </div>
                <div className="flex flex-col gap-1 mb-[10px]">
                    <div className="flex gap-[10px] items-center">
                        <p className="font-[600] text-[14px] text-black">Yolanda Putri Wulandaru</p>
                        <p className="font-[400] text-[12px] text-black opacity-60">10.14</p>
                    </div>
                    <p className="font-[400] text-[14px] text-black">Baik Pak, terima kasih.</p>
                </div>
                {messages.map((message, index) => (
                <div id="Chat" className="flex flex-col items-end gap-1 mb-[10px]" key={index}>
                    <div className="flex gap-[10px] items-center">
                        <p className="font-[400] text-[12px] text-black opacity-60">10.15</p>
                        <p className="font-[600] text-[14px] text-black">You</p>
                    </div>
                    <p className="font-[400] text-[14px] text-black">{message.text}</p>
                </div>
                ))}
                <div className="flex gap-[13px] items-center justify-center py-[22.95px] px-[9px]">
                    <input type="text" className="w-full h-[28px] border-[1px] rounded-[10px] border-[#0426AD]  pl-2" value={newMessage} onChange={handleInputChange}></input>
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleSendMessage} className='cursor-pointer'>
                        <path d="M5.71941 11L2.60733 2.99747C2.391 2.44106 2.93366 1.90847 3.47083 2.09822L3.55608 2.13397L20.0561 10.384C20.1625 10.4371 20.2533 10.5169 20.3196 10.6157C20.3859 10.7144 20.4255 10.8286 20.4345 10.9472C20.4434 11.0658 20.4215 11.1847 20.3707 11.2923C20.32 11.3999 20.2422 11.4925 20.145 11.561L20.0561 11.6141L3.55608 19.8641C3.02166 20.1309 2.4405 19.6396 2.57983 19.0868L2.60733 18.9997L5.71941 11ZM4.53508 4.16164L6.92758 10.3125H13.0023C13.1685 10.3125 13.329 10.3726 13.4542 10.4818C13.5794 10.591 13.6608 10.7419 13.6834 10.9065L13.6898 11C13.6898 11.1662 13.6295 11.3269 13.5201 11.4521C13.4107 11.5773 13.2597 11.6587 13.0949 11.6811L13.0023 11.6875H6.92575L4.53416 17.8383L18.2117 11L4.53508 4.16164Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </main>
    )
}