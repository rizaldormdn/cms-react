import React from 'react'
import Avatar from '../../assets/images/Avatar.svg'
import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown'
import Image from '../atoms/Image'
import InputCustom from '../atoms/InputCustom'


const Author = () => {
    return (
        <div className='Full Body'>
            <div className='flex gap-5 '>
                <Image
                    src={Avatar}
                    width="120"
                    height="120"
                />
                <div className=' bg-[#9155FD] w-[197px] h-[38px] text-white rounded text-center py-1.5 font-semibold mt-5 '>
                    <Button
                        title="UPLOAD NEW PHOTO" action={(e) => {
                            alert("trigger");
                        }}
                    />
                </div>
                <div className=' bg-white border border-red-600 w-[90px] h-[38px] py-1.5 font-semibold text-center text-[#FF4C5180] mt-5 rounded'>
                    <Button
                        title="RESET" action={(e) => {
                            alert("trigger");
                        }}
                    />
                </div>
            </div>
            <div className=' text-[#3A3541AD] text-[12px] absolute ml-[140px] top-[130px]'>
                Allowed JPG, GIF or PNG. Max size of 800K
            </div>
            <div>
                <InputCustom title="First Name" placeholder='Firstname' type='text' />
            </div>
            <div>
                <Dropdown  />
            </div>
        </div>
    )
}

export default Author