import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import ProductsAndPackages from "./pages/ProductsAndPackage/ProductsAndPackages";
import InternetPackage from './pages/Internet/InternetPackage'
import NonSocialBundle from "./pages/NonSocial/NonSocialBundle";
import SocialPackage from "./pages/Social/SocialPackage";
import SocialBundle from "./pages/SocialBundle/SocialBundle";
import CreditRecharge from "./pages/CreditRecharge/CreditRecharge";
import Transaction from "./pages/Transactions/transactions";
import Order from "./pages/Order/Order";
import SubReseller from "./pages/SubReseller/SubReseller";
import Profile from "./pages/Profile/Profile";
import AddSubReseller from "./pages/SubReseller/AddSubReseller";
import { SetPassword } from "./pages/SubReseller/SetPassword";
import { ChangeBalance } from "./pages/SubReseller/ChangeBalance";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/product-and-packages" element={<ProductsAndPackages/>} />
            <Route path="/internet" element={<InternetPackage/>}/>
            <Route path="/non-social" element={<NonSocialBundle/>}/>
            <Route path="/social" element={ <SocialPackage/> }/>
            <Route path="/social-bundle" element={<SocialBundle/>}/>
            <Route path="/credit-recharge" element={<CreditRecharge/>}/>
            <Route path="/transactions" element={<Transaction/>}/>
            <Route path="/orders" element={<Order/>}/>
            <Route path="/sub-reseller" element={<SubReseller/>}/>
            <Route path="/add-sub-reseller" element={<AddSubReseller/>}/>
            <Route path="/sub-reseller-set-password" element={<SetPassword/>}/>
            <Route path="/sub-reseller-change-balance" element={<ChangeBalance/>}/>

            {/* Others Page */}
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/main-profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
