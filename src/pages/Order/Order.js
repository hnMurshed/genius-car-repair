import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axiosPriate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;

    const navigate = useNavigate();

    useEffect(() => {

        const loadOrder = async () => {
            try {
                const { data } = await axiosPriate.get(`https://protected-oasis-61800.herokuapp.com/orders?email=${email}`);
                setOrders(data);
            }
            catch (error) {

                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');

                    toast.error(error.message);
                }
            }
        }
        loadOrder();
    }, [user]);

    return (
        <div className='container my-5'>
            <h2 className='text-center'>Your orders: {orders.length}</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Your Booking</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr>
                            <td>{order.email}</td>
                            <td>{order.service}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default Order;