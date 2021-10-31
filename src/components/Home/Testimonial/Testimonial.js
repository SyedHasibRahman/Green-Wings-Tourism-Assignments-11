import React from 'react';
import './Testimonial.css'




const Testimonial = () => {
    return (
        <div>
            <div className="demo">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="testimonial-slider" className="owl-carousel">
                                <div className="testimonial">
                                    <div className="testimonial-content">
                                        <div className="testimonial-icon">
                                            <i className="fa fa-quote-left"></i>
                                        </div>
                                        <p className="description">
                                            Bangladesh is a rewarding destination. Not because it has one or a few must-see sights (like the Taj Mahal, Amritsar, Bagan) for which a single trip would be justified. It’s the sum of all the varied experiences that makes Bangladesh special. It shouldn’t be missed.
                                        </p>
                                    </div>
                                    <h3 className="title">williamson</h3>
                                    <span className="post">Web Developer</span>
                                </div>

                                <div className="testimonial">
                                    <div className="testimonial-content">
                                        <div className="testimonial-icon">
                                            <i className="fa fa-quote-left"></i>
                                        </div>
                                        <p className="description">
                                            Favourite bits? Difficult to say though the Sundarbans were particularly wonderful, so beautiful and calm. The boat was basic but very clean with good sheets and towels. The food cooked up by Ali in his galley was the best! The other crew members were very friendly and helpful.
                                        </p>
                                    </div>
                                    <h3 className="title">Kristina</h3>
                                    <span className="post">Web Designer</span>
                                </div>

                                <div className="testimonial">
                                    <div className="testimonial-content">
                                        <div className="testimonial-icon">
                                            <i className="fa fa-quote-left"></i>
                                        </div>
                                        <p className="description">
                                            It was the most beautiful country I have ever visited! Traveling by train, plane, and automobile was the best way to discover the beautiful culture of Bangladesh. The people have been super friendly, and the food was divine.
                                        </p>
                                    </div>
                                    <h3 className="title">williamson</h3>
                                    <span className="post">Web Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;