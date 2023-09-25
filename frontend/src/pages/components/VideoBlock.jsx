import React from 'react';

import { imgVideoBlock } from '../../assets/img';

const VideoBlock = () => (
    <section className='relative w-full h-screen mx-auto'>
        <div className='flex items-center mt-5 gap-[100px]'>
            <div className='max-w-[35%]'>
                <img className="" src={ imgVideoBlock } alt="Описание изображения" />
            </div>
            <div className=' w-[902px] h-[600px] flex-col justify-start items-start gap-[30px] inline-flex '>
                <h1 className='max-w-[700px] text-black text-[60px] font-bold leading-[80px] tracking-wide"' >Freedom for your creative ideas.</h1>
                <p className=' max-w-[500px] text-zinc-400 text-[20px] font-bold leading-7 tracking-wide' >Listen audio of top creators Listen audio of top creators Listen audio of top creators</p>
                <div className=' justify-between items-center gap-[29px] inline-flex'>
                    <a className=' w-[200px] h-[60px] bg-red-400 rounded-[30px] text-white inline-flex justify-center items-center' href="">Get Started</a>
                    <a className=' justify-center items-center gap-[17px] inline-flex text-neutral-400 text-[17px] font-semibold leading-7 tracking-wide' href="">
                        <svg className='w-[50px] relative' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="94" height="94" rx="36" stroke="#A6A6A6" stroke-opacity="0.63" stroke-width="6"/>
                            <path d="M38 62.0599V38.0419C38 35.7674 40.4322 34.3202 42.4312 35.4052L65.0364 47.6753C67.1497 48.8224 67.1223 51.8651 64.9887 52.9739L42.3834 64.7219C40.3863 65.7598 38 64.3106 38 62.0599Z" fill="#A6A6A6" fill-opacity="0.63"/>
                        </svg> 
                        How it work?
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default VideoBlock;