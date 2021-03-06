/**
 * @fileOverview Dashboard Container
 * @author thangnt@deha-soft.com (Thang Nguyen)
 */
import React, {Component} from "react";
import "../App.css";

export default class DashboardContainer extends Component{
    /**
     * Render dashboard view
     *
     * @returns {*}
     */
    render() {
        return (
            <div className="main-panel">
                <nav className="navbar navbar-default navbar-fixed">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#navigation-example-2">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Dashboard</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-left">
                                <li>
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-dashboard"></i>
                                        <p className="hidden-lg hidden-md">Dashboard</p>
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-globe"></i>
                                        <b className="caret hidden-lg hidden-md"></b>
                                        <p className="hidden-lg hidden-md">
                                            5 Notifications
                                            <b className="caret"></b>
                                        </p>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Notification 1</a></li>
                                        <li><a href="#">Notification 2</a></li>
                                        <li><a href="#">Notification 3</a></li>
                                        <li><a href="#">Notification 4</a></li>
                                        <li><a href="#">Another notification</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-search"></i>
                                        <p className="hidden-lg hidden-md">Search</p>
                                    </a>
                                </li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="">
                                        <p>Account</p>
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <p>
                                            Dropdown
                                            <b className="caret"></b>
                                        </p>

                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <p>Log out</p>
                                    </a>
                                </li>
                                <li className="separator hidden-lg"></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">

                                    <div className="header">
                                        <h4 className="title">Email Statistics</h4>
                                        <p className="category">Last Campaign Performance</p>
                                    </div>
                                    <div className="content">
                                        <div id="chartPreferences" className="ct-chart ct-perfect-fourth"></div>

                                        <div className="footer">
                                            <div className="legend">
                                                <i className="fa fa-circle text-info"></i> Open
                                                <i className="fa fa-circle text-danger"></i> Bounce
                                                <i className="fa fa-circle text-warning"></i> Unsubscribe
                                            </div>
                                            <hr/>
                                                <div className="stats">
                                                    <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="card">
                                    <div className="header">
                                        <h4 className="title">Users Behavior</h4>
                                        <p className="category">24 Hours performance</p>
                                    </div>
                                    <div className="content">
                                        <div id="chartHours" className="ct-chart"></div>
                                        <div className="footer">
                                            <div className="legend">
                                                <i className="fa fa-circle text-info"></i> Open
                                                <i className="fa fa-circle text-danger"></i> Click
                                                <i className="fa fa-circle text-warning"></i> Click Second Time
                                            </div>
                                            <hr/>
                                                <div className="stats">
                                                    <i className="fa fa-history"></i> Updated 3 minutes ago
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="card ">
                                    <div className="header">
                                        <h4 className="title">2014 Sales</h4>
                                        <p className="category">All products including Taxes</p>
                                    </div>
                                    <div className="content">
                                        <div id="chartActivity" className="ct-chart"></div>

                                        <div className="footer">
                                            <div className="legend">
                                                <i className="fa fa-circle text-info"></i> Tesla Model S
                                                <i className="fa fa-circle text-danger"></i> BMW 5 Series
                                            </div>
                                            <hr/>
                                                <div className="stats">
                                                    <i className="fa fa-check"></i> Data information certified
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card ">
                                    <div className="header">
                                        <h4 className="title">Tasks</h4>
                                        <p className="category">Backend development</p>
                                    </div>
                                    <div className="content">
                                        <div className="table-full-width">
                                            <table className="table">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="checkbox">
                                                            <input id="checkbox1" type="checkbox"/>
                                                                <label htmlFor="checkbox1"></label>
                                                        </div>
                                                    </td>
                                                    <td>Sign contract for "What are conference organizers afraid of?"
                                                    </td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task"
                                                                className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove"
                                                                className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="checkbox">
                                                            <input id="checkbox2" type="checkbox" checked/>
                                                                <label htmlFor="checkbox2"></label>
                                                        </div>
                                                    </td>
                                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?
                                                    </td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task"
                                                                className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove"
                                                                className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="checkbox">
                                                            <input id="checkbox3" type="checkbox"/>
                                                                <label htmlFor="checkbox3"></label>
                                                        </div>
                                                    </td>
                                                    <td>Flooded: One year later, assessing what was lost and what was
                                                        found when a ravaging rain swept through metro Detroit
                                                    </td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task"
                                                                className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove"
                                                                className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="checkbox">
                                                            <input id="checkbox4" type="checkbox" checked/>
                                                                <label htmlFor="checkbox4"></label>
                                                        </div>
                                                    </td>
                                                    <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task"
                                                                className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove"
                                                                className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="checkbox">
                                                            <input id="checkbox5" type="checkbox"/>
                                                                <label htmlFor="checkbox5"></label>
                                                        </div>
                                                    </td>
                                                    <td>Read "Following makes Medium better"</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task"
                                                                className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove"
                                                                className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="checkbox">
                                                            <input id="checkbox6" type="checkbox" checked/>
                                                                <label htmlFor="checkbox6"></label>
                                                        </div>
                                                    </td>
                                                    <td>Unfollow 5 enemies from twitter</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task"
                                                                className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove"
                                                                className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="footer">
                                            <hr/>
                                                <div className="stats">
                                                    <i className="fa fa-history"></i> Updated 3 minutes ago
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-panel">
                    <nav className="navbar navbar-default navbar-fixed">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#navigation-example-2">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">Dashboard</a>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-left">
                                    <li>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-dashboard"></i>
                                            <p className="hidden-lg hidden-md">Dashboard</p>
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-globe"></i>
                                            <b className="caret hidden-lg hidden-md"></b>
                                            <p className="hidden-lg hidden-md">
                                                5 Notifications
                                                <b className="caret"></b>
                                            </p>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Notification 1</a></li>
                                            <li><a href="#">Notification 2</a></li>
                                            <li><a href="#">Notification 3</a></li>
                                            <li><a href="#">Notification 4</a></li>
                                            <li><a href="#">Another notification</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fa fa-search"></i>
                                            <p className="hidden-lg hidden-md">Search</p>
                                        </a>
                                    </li>
                                </ul>

                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="">
                                            <p>Account</p>
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <p>
                                                Dropdown
                                                <b className="caret"></b>
                                            </p>

                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something</a></li>
                                            <li className="divider"></li>
                                            <li><a href="#">Separated link</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <p>Log out</p>
                                        </a>
                                    </li>
                                    <li className="separator hidden-lg"></li>
                                </ul>
                            </div>
                        </div>
                    </nav>


                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">

                                        <div className="header">
                                            <h4 className="title">Email Statistics</h4>
                                            <p className="category">Last Campaign Performance</p>
                                        </div>
                                        <div className="content">
                                            <div id="chartPreferences" className="ct-chart ct-perfect-fourth"></div>

                                            <div className="footer">
                                                <div className="legend">
                                                    <i className="fa fa-circle text-info"></i> Open
                                                    <i className="fa fa-circle text-danger"></i> Bounce
                                                    <i className="fa fa-circle text-warning"></i> Unsubscribe
                                                </div>
                                                <hr/>
                                                    <div className="stats">
                                                        <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Users Behavior</h4>
                                            <p className="category">24 Hours performance</p>
                                        </div>
                                        <div className="content">
                                            <div id="chartHours" className="ct-chart"></div>
                                            <div className="footer">
                                                <div className="legend">
                                                    <i className="fa fa-circle text-info"></i> Open
                                                    <i className="fa fa-circle text-danger"></i> Click
                                                    <i className="fa fa-circle text-warning"></i> Click Second Time
                                                </div>
                                                <hr/>
                                                    <div className="stats">
                                                        <i className="fa fa-history"></i> Updated 3 minutes ago
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card ">
                                        <div className="header">
                                            <h4 className="title">2014 Sales</h4>
                                            <p className="category">All products including Taxes</p>
                                        </div>
                                        <div className="content">
                                            <div id="chartActivity" className="ct-chart"></div>

                                            <div className="footer">
                                                <div className="legend">
                                                    <i className="fa fa-circle text-info"></i> Tesla Model S
                                                    <i className="fa fa-circle text-danger"></i> BMW 5 Series
                                                </div>
                                                <hr/>
                                                    <div className="stats">
                                                        <i className="fa fa-check"></i> Data information certified
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card ">
                                        <div className="header">
                                            <h4 className="title">Tasks</h4>
                                            <p className="category">Backend development</p>
                                        </div>
                                        <div className="content">
                                            <div className="table-full-width">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <input id="checkbox1" type="checkbox"/>
                                                                    <label htmlFor="checkbox1"></label>
                                                            </div>
                                                        </td>
                                                        <td>Sign contract for "What are conference organizers afraid
                                                            of?"
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task"
                                                                    className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove"
                                                                    className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <input id="checkbox2" type="checkbox" checked/>
                                                                    <label htmlFor="checkbox2"></label>
                                                            </div>
                                                        </td>
                                                        <td>Lines From Great Russian Literature? Or E-mails From My
                                                            Boss?
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task"
                                                                    className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove"
                                                                    className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <input id="checkbox3" type="checkbox"/>
                                                                    <label htmlFor="checkbox3"></label>
                                                            </div>
                                                        </td>
                                                        <td>Flooded: One year later, assessing what was lost and what
                                                            was found when a ravaging rain swept through metro Detroit
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task"
                                                                    className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove"
                                                                    className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <input id="checkbox4" type="checkbox" checked/>
                                                                    <label htmlFor="checkbox4"></label>
                                                            </div>
                                                        </td>
                                                        <td>Create 4 Invisible User Experiences you Never Knew About
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task"
                                                                    className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove"
                                                                    className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <input id="checkbox5" type="checkbox"/>
                                                                    <label htmlFor="checkbox5"></label>
                                                            </div>
                                                        </td>
                                                        <td>Read "Following makes Medium better"</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task"
                                                                    className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove"
                                                                    className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <input id="checkbox6" type="checkbox" checked/>
                                                                    <label htmlFor="checkbox6"></label>
                                                            </div>
                                                        </td>
                                                        <td>Unfollow 5 enemies from twitter</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task"
                                                                    className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove"
                                                                    className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="footer">
                                                <hr/>
                                                    <div className="stats">
                                                        <i className="fa fa-history"></i> Updated 3 minutes ago
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}