// import React from 'react'
import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import "./../../assets/css/alumni-card.css"

class Alumni extends Component {
    // state = {  }
    render() { 
        return ( 
            <section id="alumni-section">
                <div className="container">
                    <div>
                        <h2 style={{textAlign:"center" , fontWeight:"revert"}}> Our Pride Alumni</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card profile-card-1">
                                <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background"/>
                                <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" className="profile"/>
                                <div className="card-content">
                                    <h2>Amit Singhal<small>Manager, IOCL</small></h2>
                                    {/* <p>"Achieve Success by Hardwork!"</p> */}
                                    <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-linkedin"></i></a></div>
                                </div>
                            </div>
        
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card profile-card-1">
                                <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background"/>
                                <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" className="profile"/>
                                <div className="card-content">
                                    <h2>Amit Singhal<small>IOCL</small></h2>
                                    <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-linkedin"></i></a></div>
                                </div>
                            </div>
        
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card profile-card-1">
                                <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background"/>
                                <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" className="profile"/>
                                <div className="card-content">
                                    <h2>Amit Singhal<small>IOCL</small></h2>
                                    <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-linkedin"></i></a></div>
                                </div>
                            </div>
        
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card profile-card-1">
                                <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background"/>
                                <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" className="profile"/>
                                <div className="card-content">
                                    <h2>Amit Singhal<small>Techncal Head, IOCL</small></h2>
                                    <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-linkedin"></i></a></div>
                                </div>
                            </div>
        
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card profile-card-1">
                                <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background"/>
                                <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" className="profile"/>
                                <div className="card-content">
                                    <h2>Amit Singhal<small>Techncal Head, IOCL</small></h2>
                                    <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-linkedin"></i></a></div>
                                </div>
                            </div>
        
                        </div>

                        <div className="col-md-4">
                            <div className="card profile-card-1">
                                <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background"/>
                                <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" className="profile"/>
                                <div className="card-content">
                                    <h2>Amit Singhal<small>Techncal Head, IOCL</small></h2>
                                    <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-linkedin"></i></a></div>
                                </div>
                            </div>
        
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Alumni;