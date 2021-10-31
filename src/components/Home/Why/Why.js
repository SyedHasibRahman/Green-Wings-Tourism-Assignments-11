import React from 'react';
import { Link } from 'react-router-dom';
import './Why.css';

const Why = () => {
    return (
        <div className="why-bg">
            <div className="container">
                <h2>Plan Your Trip with Us</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4 pt-3">
                    <div className="col">
                        <img className="img-fluid why-img" src="https://i.ibb.co/cXhdmBd/why.jpg" alt="" />
                    </div>
                    <div className="col">
                        <div>
                            <h4>Booking Now</h4>
                            <hr />
                            <h5>24/7 service available</h5>
                            <address>Call for seriul: +880 1521 312761</address>
                        </div>
                        <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
                        <hr />
                        <Link className="btn btn-warning" to="/Aboutus">About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;