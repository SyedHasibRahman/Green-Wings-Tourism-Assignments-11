import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useServices from '../../../hooks/useServices';
// import useServices from '../../../hooks/useServices';
import './MyOrders.css';

const MyOrders = () => {
    // const [services] = useServices();
    const { users } = useAuth();
    const [orders, setOrders] = useState([])
    const [details, setDetails] = useState([])
    useEffect(() => {
        const url = `https://scary-castle-42994.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    useEffect(() => {
        const findData = orders.filter(order => order.email === users?.email)
        setDetails(findData);
        console.log(findData);

    }, [orders, users?.email]);
    return (
        <div className="mt-5 MyOrders container">
            <h2 className="p-4"> Total Order Count: {orders.length}</h2>
            <div className="col-md-12 p-4 ">
                {
                    details.map(order => <div className="p-2 border border-info"
                        key={order._id}
                    >
                        <div className="row">
                            <div className="col-md-2">
                                <p className="pt-3">  {order.date}</p>
                            </div>
                            <div className="col-md-2">
                                <img className=" " src={order.img} alt="" />
                            </div>
                            <div className="col-md-3">
                                <h6 className="pt-4">{order.title}</h6>
                                <h6 className="pt-4">{order.email}</h6>
                            </div>
                            <div className="col-md-1">
                                <h5 className="pt-4">${order.price}</h5>
                            </div>
                            <div className="col-md-3">
                                <h6 className="pt-4">ContactUs For Cancel or any changes</h6>
                            </div>

                        </div>

                        {/* <h3>{order.title}</h3> */}

                    </div>)
                }
            </div>
            <div className="col-md-6">
            </div>

        </div>
    );
};

export default MyOrders;