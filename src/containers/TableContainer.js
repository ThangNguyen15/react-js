/**
 * @fileOverview Table Container
 * @author thangnt@deha-soft.com (Thang Nguyen)
 */
import React, {Component} from "react";
import "../App.css";
import {tableActions} from "../actions/tableActions";
import {connect} from "react-redux";

class TableContainer extends Component{
    /**
     * Render table view
     *
     * @returns {*}
     */
    render() {
        const tableData = this.props.tableReducer.users;
        console.log(tableData);
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
                            <a className="navbar-brand" href="#">Table List</a>
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
                                        <b className="caret hidden-sm hidden-xs"></b>
                                        <span className="notification hidden-sm hidden-xs">5</span>
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
                                <li className="separator hidden-lg hidden-md"></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h4 className="title">Striped Table with Hover</h4>
                                        <p className="category">Here is a subtitle for this table</p>
                                    </div>
                                    <div className="content table-responsive table-full-width">
                                        <table className="table table-hover table-striped">
                                            <thead>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Salary</th>
                                            <th>Country</th>
                                            <th>City</th>
                                            </thead>
                                            <tbody>
                                                {tableData.map(item => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            {item.id}
                                                        </td>
                                                        <td>
                                                            {item.name}
                                                        </td>
                                                        <td>
                                                            ${item.salary}
                                                        </td>
                                                        <td>
                                                            {item.country}
                                                        </td>
                                                        <td>
                                                            {item.city}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="container-fluid">
                        <nav className="pull-left">
                            <ul>
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Company
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <p className="copyright pull-right">
                            &copy;
                            <script>document.write(new Date().getFullYear())</script>
                            <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                        </p>
                    </div>
                </footer>


            </div>
        )
    }

    componentDidMount() {
        this._getUser();
    }

    /**
     * Call action get data table
     * @private
     */
    _getUser = () => {
        this.props.dispatch(tableActions());
    }
}

/**
 * Map props to state
 * @param props
 * @returns {{tableReducer: reducer}}
 */
const mapPropsToState = props => {
    return { tableReducer: props.tableReducer };
};

export default connect(mapPropsToState)(TableContainer)