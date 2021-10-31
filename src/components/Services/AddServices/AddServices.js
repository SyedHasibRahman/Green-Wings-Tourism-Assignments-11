import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://scary-castle-42994.herokuapp.com/services', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Inset Successful!');

                }
            });
    };
    return (
        <div className="p-5">
            <h2> Add a Tour Packages</h2>
            <div className="AddServices">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder="Title" />
                    <input type="number" {...register("price",)} placeholder="Price" />
                    <input {...register("info")} placeholder="Short Description" />
                    <textarea  {...register("description")} placeholder="Description" />
                    <input {...register("img")} placeholder="Image URL" />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;