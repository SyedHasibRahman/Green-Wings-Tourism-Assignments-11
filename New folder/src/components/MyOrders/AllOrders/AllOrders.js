import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const AllOrders = () => {
    const { users } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://scary-castle-42994.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    const handleDelete = id => {
        const deleteMassege = window.confirm("Delete the item?");

        if (deleteMassege) {
            const url = `https://scary-castle-42994.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);

                    }

                })
        }

    }

    // -------------Delete Confirmation 

    // -------------Delete Confirmation 

    return (
        <div className="mt-5 MyOrders container" >
            <h2>Total {orders.length} Count</h2>
            <div className="col-md-7 p-4 ">
                {
                    orders.map(order => <div className="p-2 border border-info"
                        key={order._id}
                    >
                        <div className="row">
                            <div className="col-md-2">
                                <p className="pt-4">  {order.date}</p>
                            </div>
                            <div className="col-md-3">
                                <img className="All-order-img" src={order.img} alt="" />
                            </div>
                            <div className="col-md-5">
                                <h6 className="pt-4">{order.title}</h6>
                                <h6 className="pt-4">{order.email}</h6>
                            </div>
                            <div className="col-md-1">
                                <h5 className="pt-4">${order.price}</h5>
                            </div>

                            <button onClick={() => handleDelete(order._id)} className="bgn btn-danger">Delete</button>
                        </div>

                        {/* <h3>{order.title}</h3> */}

                    </div>)
                }
            </div>
            <div className="col-md-5">
            </div>

        </div >
    );
};

export default AllOrders;