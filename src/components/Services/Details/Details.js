import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useServices from '../../../hooks/useServices';
import { useForm } from "react-hook-form";
import './Details.css';

const Details = () => {
    let { id } = useParams();
    const dId = parseFloat(id)
    const [services] = useServices();
    const [detail, setDetail] = useState({});
    const { users } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/MyBooking';
    // console.log(detail);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('https://scary-castle-42994.herokuapp.com/orders', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Booking Successful!');
                    history.push(redirect_uri);

                }
            });
    };

    useEffect(() => {
        const foundDetails = services.find(service => service.id === dId)
        setDetail(foundDetails);
    }, [services, dId]);
    return (
        <div className="container">
            <div className="row pt-5 ">
                <div className="col-md-4 mt-4">
                    <hr className="border-info border-3" />
                    <hr className="border-info border-3" />
                    <img className="img-fluid" src={detail?.img} alt="" />
                </div>
                <div className="col-md-4 border-top-0 border border-info border-bottom-0">
                    <h2 className="text-danger"> Package Name: </h2>
                    <h2 className="text-danger"> {detail?.name}  </h2>
                    <h2 className="text-success"> ${detail?.price}  </h2>
                    <hr className="border-info border-3" />
                    <hr className="border-info border-3" />
                    <p>{detail?.description}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/services"><button className="btn btn-danger text-white ">Services</button></Link>
                        </div>

                    </div>
                </div>
                <div className="col-md-4 mb-5 mt-4 Shipping">
                    <hr className="border-info border-3" />
                    <hr className="border-info border-3" />
                    <h2 className="pt-4">Shipping & Billing</h2>
                    {/* <input type="date" /> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 200 })} value={users.displayName || ''} />
                        <input {...register("email")} value={users.email || ''} />

                        <input type="date" {...register("date", { required: true })} />
                        <input {...register("address", { required: true })} placeholder="Address" />
                        <input {...register("phone", { required: true })} placeholder="Phone Number" />

                        <input type="text" {...register("title", { required: true })} value={detail?.name || ''} />

                        <input type="text" {...register("info", { required: true })} value={detail?.info || ''} />

                        <input type="text" {...register("img", { required: true })} value={detail?.img || ''} />

                        <input type="number" {...register("price", { required: true })} value={detail?.price || ''} />
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};



export default Details;