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
            <div className='flex flex-wrap gap-5'>
                <div className=' w-[344px] h-[90px]'>
                    <InputCustom title="First Name" placeholder='John' type='text' />
                </div>
                <div className=' w-[344px] h-[90px]'>
                    <InputCustom title="Last Name" placeholder='Doe' type='text' />
                </div>
            </div>

            <div className='flex flex-wrap gap-5'>
                <div className=' w-[344px] h-[90px]'>
                    <InputCustom title="Email" placeholder='example@gmail.com' type='email' />
                </div>
                <div className=' w-[344px] h-[90px]'>
                    <InputCustom title="Confirm Password" placeholder='Confirm Password' type='password' />
                </div>
            </div>
            <div>
                <Dropdown />
                <div className=' flex text-white rounded text-center py-1.5 font-semibold mt-[380px] gap-10  '>
                    <div className='bg-[#9155FD] rounded w-[200px] h-[38px]'>
                        <Button
                            title="SAVE CHANGES" action={(e) => {
                                alert("trigger");
                            }}
                        />
                    </div>
                    <div className='bg-white border rounded border-red-600 text-[#FF4C5180] w-[110px] h-[41px] py-1'>
                        
                        <Button
                            title="CANCEL" action={(e) => {
                                alert("trigger");
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author