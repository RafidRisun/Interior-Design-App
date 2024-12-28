"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface FormData {
    email: string;
    password: string;
}

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            
            const token = response.data;
            console.log(token.access_token);

            localStorage.setItem('token', token.access_token);
            localStorage.setItem('email', token.email);

            window.alert("Logged In!");
            if (formData.email === 'rizvi.rhr@gmail.com') {
                router.push('rizvi');
            } else {
                router.push('dashboard');
            }
        } catch (error) {
            console.error('Login failed', error);
            window.alert("Failed to Log In");
        }
    };

    return (
        <div className='flex flex-col justify-center items-center m-40'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-xl font-bold mb-4'>Login</h2>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email:</label>
                    <input 
                        type='text' 
                        id='email' 
                        name='email' 
                        onChange={(e) => setFormData(prevState => ({ ...prevState, email: e.target.value }))} 
                        className='outline-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm'
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>Password:</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password' 
                        onChange={(e) => setFormData(prevState => ({ ...prevState, password: e.target.value }))} 
                        className='outline-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm'
                    />
                </div>
                <button 
                    type='submit' 
                    className='w-full bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                    Log In
                </button>
            </form>
        </div>
    );
}
