/**
 * @fileOverview Profile container
 * @author thangnt@deha-soft.com (Thang Nguyen)
 */
import React, {Component} from "react";
import "../App.css";
import {profileActions} from "../actions/profileActions";
import {connect} from "react-redux";

class ProfileContainer extends Component{
    /**
     * Render view profile
     * @returns {*}
     */
    render() {
        /**
         * Profile data
         */
        const profile = this.props.profileReducer.profile;

        return (
            <div className="main-panel">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="header">
                                        <h4 className="title">Edit Profile</h4>
                                    </div>
                                    <div className="content">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="form-group">
                                                        <label>Company (disabled)</label>
                                                        <input type="text" className="form-control" disabled
                                                               placeholder="Company" value="Creative Code Inc."/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label>Username</label>
                                                        <input type="text" className="form-control" placeholder="Username"
                                                               value={profile.userName}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control" placeholder="Email"
                                                        value={profile.email}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>First Name</label>
                                                        <input type="text" className="form-control" placeholder="Company"
                                                               value={profile.firstName}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Last Name</label>
                                                        <input type="text" className="form-control" placeholder="Last Name"
                                                               value={profile.lastName}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Home Address"
                                                               value={profile.address}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input type="text" className="form-control" placeholder="City"
                                                               value={profile.city}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label>Country</label>
                                                        <input type="text" className="form-control" placeholder="Country"
                                                               value={profile.country}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label>Postal Code</label>
                                                        <input type="number" className="form-control"
                                                               placeholder="ZIP Code"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>About Me</label>
                                                        <textarea rows="5" className="form-control"
                                                                  placeholder="Here can be your description" value="Mike">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-info btn-fill pull-right">Update
                                                Profile
                                            </button>
                                            <div className="clearfix"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-user">
                                    <div className="image">
                                        <img
                                            src={profile.coverImage}
                                            alt="..."/>
                                    </div>
                                    <div className="content">
                                        <div className="author">
                                            <a href="#">
                                                <img className="avatar border-gray" src={profile.avatarImage}
                                                     alt="..."/>

                                                <h4 className="title">{profile.firstName + " " + profile.lastName}<br/>
                                                    <small>{profile.userName}</small>
                                                </h4>
                                            </a>
                                        </div>
                                        <p className="description text-center"> "Lamborghini Mercy
                                            Your chick she so thirsty
                                            I'm in that two seat Lambo"
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <button href="#" className="btn btn-simple"><i
                                            className="fa fa-facebook-square"></i></button>
                                        <button href="#" className="btn btn-simple"><i className="fa fa-twitter"></i>
                                        </button>
                                        <button href="#" className="btn btn-simple"><i
                                            className="fa fa-google-plus-square"></i></button>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }

    /**
     *
     */
    componentDidMount() {
        this._getProfile();
    }

    /**
     * Call action get data profile
     *
     * @private
     */
    _getProfile = () => {
        this.props.dispatch(profileActions());
    }
}

/**
 * Map props to state
 *
 * @param props
 * @returns {{profileReducer: reducer}}
 */
const mapPropsToState = props => {
    return { profileReducer: props.profileReducer };
};

export default connect(mapPropsToState)(ProfileContainer)