"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

interface NewAdmin {
    name: string;
    email: string;
    password: string;
}

interface Admin {
    name: string;
    email: string;
}

export default function RDashboard() {
    const router = useRouter();
    const [newAdmin, setNewAdmin] = useState<NewAdmin>({ name: '', email: '', password: ''});
    const [admins, setAdmin] = useState<Admin[]>([]);

    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    useEffect(() => {
        if (!token) {
            router.push('/admin/login');
            window.alert("Please log in first!");
        }

        const fetchAdmins = async () => {
            try {
                if (token) { 
                    const adminResponse = await axios.get('http://localhost:3000/admin', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setAdmin(adminResponse.data);
                    console.log('admins fetched');
                } else {

                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchAdmins();
    }, [router]);

    const reg = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/register', newAdmin, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            window.alert('Admin Created.');
            location.reload();
        } catch (error) {
            console.error(error);
            window.alert('Failed to create admin.');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewAdmin({ ...newAdmin, [name]: value });
    };



    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        router.push('/admin/login');
    };

    const handleDelete = async (email: string) => {
        if(email != "rizvi.rhr@gmail.com"){
            try {
                await axios.delete(`http://localhost:3000/admin/${email}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                window.alert('Admin Deleted.');
                location.reload(); 
            } catch (error) {
                console.error('Failed to delete admin', error);
                window.alert('Failed to delete admin.');
            }
        } else {
            window.alert("Cannot Delete Rizvi");
        }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex w-full m-20 justify-center items-center'>
                <form onSubmit={reg}>
                    <h2 className='text-lg font-bold mb-4'>Register New Admin</h2>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>Name:</label>
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            value={newAdmin.name}
                            onChange={handleInputChange} 
                            className='outline-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email:</label>
                        <input 
                            type='text' 
                            id='email' 
                            name='email' 
                            value={newAdmin.email}
                            onChange={handleInputChange} 
                            className='outline-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>Password:</label>
                        <input 
                            type='password' 
                            id='password' 
                            name='password' 
                            value={newAdmin.password}
                            onChange={handleInputChange} 
                            className='outline-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm'
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='w-60 bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700'
                    >
                        Register
                    </button>
                </form>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-lg font-semibold m-4'>Existing Admins</h3>
                {
                admins.length > 0  ? (
                    admins.map((admin) => (
                        <div key={admin.email} className='flex w-192 bg-slate-200 m-2 rounded-sm p-2'><p className='flex justify-start w-1/3 m-3'>{admin.name}</p><p className='flex justify-center w-1/3 m-3'>{admin.email}</p><button className='flex justify-end w-1/3 m-3 text-red-500 font-bold' onClick={() => handleDelete(admin.email)}>Delete</button></div>
                    ))
                    ) : ( <p>No admins found</p> )
                
                } 
            </div>
            <Link href="/admin/dashboard" className='flex justify-center w-40 bg-blue-400 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-500 m-4'>Dasboard</Link>
            <button type='button' className='w-40 bg-red-600 text-white py-2 px-4 rounded-md text-sm hover:bg-red-700 m-4' onClick={handleLogout}>Logout</button>
        </div>
    )
}
