import React, { Fragment } from "react"
import Header from "../Components/Layouts/Header";
import { Outlet } from "react-router";

const Root = (props) => {

    return(
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    );
}

export default Root;