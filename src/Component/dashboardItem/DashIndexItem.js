import React from 'react'
import { Route } from 'react-router';
import SimpleBreadcrumbs from '../breadcrumb/Breadcrumb';
import HeaderItem from '../Header/HeaderItem';
import SimpleDashboardBreadcrumbs from './Dashbreadcumb';
import Recharge from './Reacharge';

export default function DashBoardInedxItem(){
    return(
        <>
            <HeaderItem/>
            <SimpleBreadcrumbs/>
            <SimpleDashboardBreadcrumbs/>
            <Recharge/>
        </>
    );
}