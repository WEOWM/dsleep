import React from 'react';
import CustomButton from '../button/CustomButton';

const Banner = () => {
  return (
    <div
      className="w-full lg:h-[50rem] md:h-[20rem] bg-[url('https://images.pexels.com/photos/7534536/pexels-photo-7534536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat flex justify-center"
    >
       <div className='flex flex-col text-center items-center justify-start lg:mt-36 md:mt-28  relative'>
       <p className='font-bold lg:text-6xl md:text-5xl'>Better Sleep, Better Livning</p>
        <p className='lg:w-[30rem]  max-sm:h-[10rem] md:w-[30rem] text-centerlg:mt-5 mt-2'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
        nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
        <CustomButton className={"absolute max-sm:bottom-5 md:top-24 lg:mt-16 hover:bg-[#0000B5] hover:text-white hover:border-none"}>
            Shop now
        </CustomButton>
       </div>
    </div>
  );
};

export default Banner;
