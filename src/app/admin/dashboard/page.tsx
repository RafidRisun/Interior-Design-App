"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Clients {
    name: string;
    email: string;
    contact: string;
    house: string;
    street: string;
    post: string;
    city: string;
    design: string;
    category: string;
    style: string;
    grade: string;
    dimension: number;
    walls: number;
    cost: number;
    date: string;
    status: string;
    admin: string;
}

interface FormData{
    
}

export default function Dashboard() {
    const router = useRouter();
    const [clients, setClient] = useState<Clients[]>([]); 

    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    useEffect(() => {
        if (!token) {
            router.push('/admin/login');
            window.alert("Please log in first!");
        }
        const fetchClients = async () => {
            try {
                if (token) { 
                    const clientResponse = await axios.get('http://localhost:3000/client', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setClient(clientResponse.data);
                    console.log('Clients fetched');
                } else {

                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchClients();
    }, [router]);

    const makeAccept = () => {

    }

    return (
        <div className='flex flex-col justify-center'>
            <h3 className='flex text-lg font-semibold m-4 justify-center'>Clients</h3>
            <div className='flex'>
            {
                clients.length > 0  ? (
                    clients.map((client) => (
                        <div key={client.email} className='flex flex-col w-80 bg-slate-200 m-2 rounded-sm p-6 items-center'>
                            <p className=''><b>Name: </b>{client.name}</p>
                            <p className=''><b>City: </b>{client.city}</p>
                            <p className=''><b>Design: </b>{client.design}</p>
                            <p className=''><b>Category: </b>{client.category}-{client.style}-{client.grade}</p>
                            <p className=''><b>Dimensions: </b>{client.dimension}</p>
                            <p className=''><b>Number of walls: </b>{client.walls}</p>
                            <p className=''><b>Cost: </b>{client.cost}</p>
                            <p className=''><b>Status: {client.status}</b></p>
                            <p className=''><b>Assigned: </b>{client.admin}</p>
                            <button className='flex m-3 text-green-500 font-bold' onClick={makeAccept}>Accept</button>
                            <button className='flex text-blue-500 font-bold'>Mark as Done</button></div>
                    ))
                    ) : ( <p>No Clients found</p> )
                
                } 
            </div>
        </div>
    );
}

// onClick={() => handleAssign(admin.email)}
