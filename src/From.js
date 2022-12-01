import React from 'react';
import { useState } from 'react';
import logo from './images/logo.png'
import signUp from './images/signUp.png'
import { BsArrowRight } from 'react-icons/bs';


const From = () => {
    const [state, setState] = useState('name')
    const submitUserInfo = event => {
        event.preventDefault()
        const first_name = event.target.first_name.value;
        const last_name = event.target.last_name.value;
        const phone_number = event.target.phone_number.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const user = { first_name, last_name, phone_number, email, password };
        console.log(user);
        const url = `https://test.nexisltd.com/signup`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                event.target.reset();
            });
    }
    return (
        <div>
            <div className='grid grid-cols-5 gap-5'>
                <div className=' col-span-3 flex justify-center items-center'>
                    <div>
                        <img className='w-[165px]' src={logo} alt="" />
                        <div className=''>
                            <img className='w-[612px]' src={signUp} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full col-span-2'>
                    <form onSubmit={submitUserInfo} className="m-4 h-screen flex items-center bg-white shadow-xl shadow-[#939393]/25">
                        <div className='w-full mx-[75px]'>

                            <p className="mb-[99px] text-center text-[20px] font-bold"> SignUp Form</p>

                            {
                                state === 'name' && <div>
                                    <div className="mb-4">
                                        <input className=" appearance-none border-b w-full pl-3 py-2 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='first_name' type="text" placeholder="Write First Name" required />
                                    </div>
                                    <div className="mb-4">
                                        <input className=" appearance-none border-b w-full pl-3 py-2 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='last_name' type="text" placeholder="Write Last Name" required />
                                    </div>
                                    <div className="mt-[68px] flex justify-center">
                                        <button onClick={() => setState('contact')} className="bg-[#1678CB] hover:bg-white text-[16px] text-white hover:text-[#1678CB] border border-white hover:border-[#1678CB] py-[15px] px-[20px] rounded-[15px] flex items-center justify-center gap-1" type="submit">
                                            <span>Next Step</span> <BsArrowRight className=' font-bold' />
                                        </button>

                                    </div>
                                </div>
                            }
                            {
                                state === 'contact' && <>
                                    <div className="mb-4">
                                        <input className=" appearance-none border-b w-full pl-3 py-2 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='phone_number' type="number" placeholder="Phone Number" required />
                                    </div>

                                    <div className="mb-4">
                                        <input className="appearance-none border-b w-full pl-3 py-2 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='email' type="email" placeholder="Email" required />
                                    </div>
                                    <div className="mt-[68px] flex justify-between">
                                        <button onClick={() => setState('name')}>Back</button>
                                        <button onClick={() => setState('password')} className="bg-[#1678CB] hover:bg-white text-[16px] text-white hover:text-[#1678CB] border border-white hover:border-[#1678CB] py-[15px] px-[20px] rounded-[15px] flex items-center justify-center gap-1" type="submit">
                                            <span>Next Step</span> <BsArrowRight className=' font-bold' />
                                        </button>

                                    </div>
                                </>
                            }

                            {
                                state === 'password' && <>
                                    <div className="mb-4">
                                        <input className="appearance-none border-b w-full pl-3 py-2 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='password' type="password" placeholder="Password" required />

                                        <div className="mt-[68px] flex justify-between">
                                            <button onClick={() => setState('contact')}>Back</button>
                                            <button className="bg-[#1678CB] hover:bg-white text-[16px] text-white hover:text-[#1678CB] border border-white hover:border-[#1678CB] py-[15px] px-[20px] rounded-[15px]" type="submit">
                                                Sign Up
                                            </button>

                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default From;