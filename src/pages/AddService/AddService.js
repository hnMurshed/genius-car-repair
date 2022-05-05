import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data, event) => {
        console.log(data);

        fetch('https://protected-oasis-61800.herokuapp.com/service', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log('Result', result);
            toast.success('Service successfully added!');
            navigate('/home');


        })
    };
    return (
        <div className='container text-center my-5'>
            <h2>Please add service</h2>
            <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Service Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Service Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;