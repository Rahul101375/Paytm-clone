import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from '../Component/Dashboard/Dashboard'
import Header from '../Component/Header/Header'
import CommerceMovie from '../HeaderInsideItem/PaytmConsumerItem/Commerce/MovieTicket'
import CommerceFlight from '../HeaderInsideItem/PaytmConsumerItem/Commerce/FlightTicket'
import BillAndRechargePayment from '../HeaderInsideItem/PaytmConsumerItem/ConsumerPayment/BillPayment'
import OnlinePayments from '../HeaderInsideItem/PaytmConsumerItem/ConsumerPayment/OnlinePayment'
import SendMoneyToAnyone from '../HeaderInsideItem/PaytmConsumerItem/ConsumerPayment/SendMoney'
import StorePayments from '../HeaderInsideItem/PaytmConsumerItem/ConsumerPayment/StorePayment'
import Login from '../Login/Login'
import RegistationForm from '../Registation/Registation'
import CommerceCloth from '../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Cloth'
import CommerceEloctronics from '../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Eloctronics'
import CommerceFootware from '../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Footware'
import CommerceGadgets from '../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Gadgets'
import CommerceGrecoy from '../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Grecoy'
import CommercKitchen from '../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Kicten'
import CommerceMobile from '../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Mobile'
import CommerceTrain from '../HeaderInsideItem/PaytmConsumerItem/Commerce/TrianTicket'
import SavingAccount from '../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Banking/SavingAccount'
import Postpaid from '../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Postpaid'
import Insurance from '../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Insurence'
import PaytmCrditCard from '../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Banking/PaytmCrditCard'
import Money from '../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Money'
import PaymentGate from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/PaymentGateway'
import PaymentLink from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/PaymentLink'
import UpiPayment from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/UpiPayment'
import Subcripition from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/Subscription'
import Settlement from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/Settlement'
import SavedInstument from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/SavedInstuments'
import AllInOnePOS from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/AllInOnePos'
import PaymtQR from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/PaytmQR'
import SmartPOS from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/SmartPOS'
import SoundBox from '../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/SoundBox'
import PayOuts from '../HeaderInsideItem/PaytmBusinessItem/BusinessPayment/Payouts'
import NodalAccount from '../HeaderInsideItem/PaytmBusinessItem/BusinessPayment/NodalAccount'
import PosBilling from '../HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/PosBilling'
import PaytmForBusinessApp from '../HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/PaytmforBussinessApp'
import AdvertingOnPaytm from '../HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/AdvertingOnPaytm'
import BusinessKhata from '../HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/Businesskhata'
import CurrentAccount from '../HeaderInsideItem/PaytmBusinessItem/FinacialService/Banking/CurrentAccount'
import EmplyoeeBenfit from '../HeaderInsideItem/PaytmBusinessItem/FinacialService/Banking/EmployeeBenfit'
import SaleryAccount from '../HeaderInsideItem/PaytmBusinessItem/FinacialService/Banking/SaleryAccount'
import MutualFunds from '../HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/MutualFund'
import PaymtGolds from '../HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/PaytmGold'
import Pensions from '../HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/Pension'
import Insurances from '../HeaderInsideItem/PaytmBusinessItem/FinacialService/Insurance'
import Loan from '../HeaderInsideItem/PaytmBusinessItem/FinacialService/Loan'
import Abouts from '../HeaderInsideItem/CompanyItem/About'
import InvestorRelations from '../HeaderInsideItem/CompanyItem/InvestorRelation'
import Blogs from '../HeaderInsideItem/CompanyItem/Blog'
import Boards from '../HeaderInsideItem/CompanyItem/Board'
import ContactUs from '../HeaderInsideItem/CompanyItem/ContactUs'
import Fincails from '../HeaderInsideItem/CompanyItem/Fincails'
import Notice from '../HeaderInsideItem/CompanyItem/Notices'
import Policy from '../HeaderInsideItem/CompanyItem/Polices'
import Logout from '../Logout/Logout'
import Recharge from '../Component/dashboardItem/Reacharge'
import HeaderItem from '../Component/Header/HeaderItem'
import DashBoardInedxItem from '../Component/dashboardItem/DashIndexItem'

function Routes(){
    return(
        <>
        <div>
            <Route path="/registation" component={RegistationForm} />
            <Route  path="/login" component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/' exact component={Header}/>
            <Route path="/headerinsideitem/paytmconsumeritem/consumerpayment/billpayment" component={BillAndRechargePayment} />
            <Route path="/headerinsideitem/paytmconsumeritem/consumerpayment/sendmoney" component={SendMoneyToAnyone} />
            <Route path="/headerinsideitem/paytmconsumeritem/consumerpayment/onlinepayment" component={OnlinePayments} />
            <Route path="/headerinsideitem/paytmconsumeritem/consumerpayment/storepayment" component={StorePayments} />
            <Route path="/headerInsideItem/paytmConsumerItem/commerce/trainTicket" component={CommerceTrain} />
            <Route path="/headerInsideItem/paytmConsumerItem/commerce/flightTicket" component={CommerceFlight} />
            <Route path="/headerInsideItem/paytmConsumerItem/commerce/movieTicket" component={CommerceMovie} />
             <Route path="/HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Cloth" component={CommerceCloth} />
             <Route path="/HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/electronics" component={CommerceEloctronics} />
             <Route path="/HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/footware" component={CommerceFootware} />
             <Route path="/HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/gadgets" component={CommerceGadgets} />
             <Route path="/HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/electronics" component={CommerceEloctronics} />
             <Route path="/HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/grecoy" component={CommerceGrecoy} />
             <Route path="/HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/kicten" component={CommercKitchen} />
             <Route path="/HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/mobile" component={CommerceMobile} />
             <Route path='/HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Banking/SavingAccount' component={SavingAccount} />
             <Route path='/HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Banking/paytmCreditCard' component={PaytmCrditCard} />
             <Route path='/HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Money' component={Money} />
             <Route path='/HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Insurance' component={Insurance} />
             <Route path='/HeaderInsideItem/PaytmConsumerItem/FinacialServvice/postpaid' component={Postpaid}/> 
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/PaymentGateway' component={PaymentGate} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/PaymentLink' component={PaymentLink} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/UpiPayment' component={UpiPayment} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/Subscrption' component={Subcripition}/>
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/Settlement' component={Settlement}/>
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/SavedInstuments' component={SavedInstument} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/AllInOnePos' component={AllInOnePOS} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/PaytmQR' component={PaymtQR} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/SmartPOS' component={SmartPOS} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/SoundBox' component={SoundBox} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/BusinessPayment/Payouts' component={PayOuts} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/BusinessPayment/NodalAccount' component={NodalAccount} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/PosBilling' component={PosBilling} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/PaytmforBusinessApp' component={PaytmForBusinessApp} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/Advertingonpaytm' component={AdvertingOnPaytm} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/businesskhata' component={BusinessKhata} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/FinacialService/Banking/CurrentAccount' component={CurrentAccount} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/FinacialService/Banking/employeebenfit' component={EmplyoeeBenfit} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/FinacialService/Banking/saleryAccount' component={SaleryAccount} />
             <Route path='/HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/mutualfund' component={MutualFunds} />
             <Route path='HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/paytmgold' component={PaymtGolds} />
             <Route path='HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/Pension' component={Pensions} />
             <Route path='HeaderInsideItem/PaytmBusinessItem/FinacialService/insurance' component={Insurances} />
             <Route path='HeaderInsideItem/PaytmBusinessItem/FinacialService/loan' component={Loan} />
             <Route path='/HeaderInsideItem/CompanyItem/About' component={Abouts} />
             <Route path='/HeaderInsideItem/CompanyItem/investorrelation' component={InvestorRelations} />
             <Route path='/HeaderInsideItem/CompanyItem/Blog' component={Blogs}/>
             <Route path='/HeaderInsideItem/CompanyItem/Board' component={Boards}/>
             <Route path='/HeaderInsideItem/CompanyItem/ContactUs'component={ContactUs}/>
             <Route path='/HeaderInsideItem/CompanyItem/fincails' component={Fincails} />
             <Route path='/HeaderInsideItem/CompanyItem/notices' component={Notice}/>
             <Route path='/HeaderInsideItem/CompanyItem/polices' component={Policy} />

             <Route path='/dashboardItem/Reacharge' component={DashBoardInedxItem}/>
             
        </div>
        </>
    )
}
export default Routes