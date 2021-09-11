import React from 'react'
import SimpleBreadcrumbs from '../breadcrumb/Breadcrumb';
import DashBoardItemOne from '../Dashboard/DashItemOne';
import DashboardItemTwo from '../Dashboard/DashItemTwo';
import Recharge from '../dashboardItem/Reacharge';
import HeaderItem from './HeaderItem';
import {Route} from 'react-router-dom'

function Header(){
    return(
        <>
        <div>
            <HeaderItem/>
            <SimpleBreadcrumbs/>
            <DashBoardItemOne/>
            <DashboardItemTwo/>
        </div>
        </>
    );
}
export default Header;