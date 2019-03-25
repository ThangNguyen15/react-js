/**
 * @fileOverview Sidebar component
 * @author thangnt@deha-soft.com (Thang Nguyen)
 */
import React, { Component } from "react";
import "../App.css";
import {RouteNames} from "../routers/RouteNames";
import {selectDashboard, selectProfile, selectTable} from "../actions/navActions";
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";

class SidebarComponent extends Component{
    /**
     * Render sidebar component
     * @returns {*}
     */
    render() {
        const { activeNav } = this.props.navReducer;
        return (
            <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text">
                            Creative Tim
                        </a>
                    </div>

                    <ul className="nav">
                        <li className={activeNav === NavMenu.DASHBOARD ? "active" : ""}>
                            <Link to={RouteNames.DASHBOARD} onClick={this._handleDashboardClick}>
                                <i className="pe-7s-graph"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className={activeNav === NavMenu.PROFILE ? "active" : ""}>
                            <Link to={RouteNames.PROFILE} onClick={this._handleProfileClick}>
                                <i className="pe-7s-user"></i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li className={activeNav === NavMenu.TABLE ? "active" : ""}>
                            <Link to={RouteNames.TABLE} onClick={this._handleTableClick}>
                                <i className="pe-7s-note2"></i>
                                <p>Table List</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    /**
     * Call action handle dashboard click
     *
     * @private
     */
    _handleDashboardClick = () => {
        this.props.dispatch(selectDashboard());
    };

    /**
     * Call action handle profile click
     *
     * @private
     */
    _handleProfileClick = () => {
        this.props.dispatch(selectProfile());
    };

    /**
     * Call action handle table click
     *
     * @private
     */
    _handleTableClick = () => {
        this.props.dispatch(selectTable());
    }
}

/**
 * Define navigation menu
 *
 * @type {{TABLE: string, PROFILE: string, DASHBOARD: string}}
 */
export const NavMenu = {
    DASHBOARD: "dashboard",
    PROFILE: "profile",
    TABLE: "table",
};

/**
 * Map props to state
 * @param props
 * @returns {{navReducer: reducer}}
 */
const mapPropsToState = props => {
    return { navReducer: props.navReducer };
};

export default connect(mapPropsToState)(SidebarComponent)