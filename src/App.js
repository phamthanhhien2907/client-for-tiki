import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import {
  Home,
  Login,
  Public,
  LoginSuccess,
  Account,
  Address,
  Notification,
  Order,
  PaymentCard,
  MyAccount,
  NotFound,
  Cart,
  DetailsProduct,
  ProductCard,
  TopSeller,
  Payment,
  ProdManager,
  UserManager,
} from "./pages/index";
import path from "./utils/path";
import React from "react";
import {
  HighPrice,
  LowPirce,
  NewProduct,
} from "./components/organisms/ProductActive";
import { useSelector } from "react-redux";
import {
  CreateProd,
  CreateUser,
  EditProd,
  EditUser,
} from "./components/organisms";

function App() {
  const { current } = useSelector((state) => state.auth);
  console.log(path.MYACCOUNT[2]);
  return (
    <div className=" bg-gray-100">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.DETAILS_PRODUCT} element={<DetailsProduct />}>
            <Route path={path.TOP_SELLER} element={<TopSeller />} />
            <Route path={path.NEW_PRODUCT} element={<NewProduct />} />
            <Route path={path.HIGH_PRICE} element={<HighPrice />} />
            <Route path={path.LOW_PRICE} element={<LowPirce />} />
          </Route>
          <Route path={path.CHECKOUT}>
            <Route path={path.CART} element={<Cart />} />
            <Route path={path.PAYMENT} element={<Payment />} />
          </Route>
          <Route path={path.MYACCOUNT[0]} element={<MyAccount />}>
            <Route path={path.CUSTOMER} element={<Account />} />
            <Route path={path.ADDRESS} element={<Address />} />
            <Route path={path.NOFICATION} element={<Notification />} />
            <Route path={path.ORDERHISTORY} element={<Order />} />
            <Route path={path.PAYMENTCART} element={<PaymentCard />} />
          </Route>

          {path.MYACCOUNT[1] && (
            <Route path={path.MYACCOUNT[1]} element={<MyAccount />}>
              <Route path={path.ORDERHISTORY} element={<Order />} />
            </Route>
          )}
          {current === "admin" && path.MYACCOUNT[2] && (
            <Route Route path={path.MYACCOUNT[2]} element={<MyAccount />}>
              <Route path={path.CUSTOMER} element={<Account />} />
              <Route path={path.MANAGER_USER} element={<UserManager />}>
                <Route path={path.CREATE_USER} element={<CreateUser />} />
                <Route path={path.EDIT_USER} element={<EditUser />} />
              </Route>
              <Route path={path.MANAGET_PRODUCT} element={<ProdManager />}>
                <Route path={path.CREATE_PRODUCT} element={<CreateProd />} />
                <Route path={path.EDIT_PRODUCT} element={<EditProd />} />
              </Route>
            </Route>
          )}
          {/* <Route path={path.DETAILS_PRODUCT} element={<Details_Product />} /> */}
          <Route path={path.PRODUCT_INFO} element={<ProductCard />} />
          <Route path={path.ALL} element={<Home />} />
        </Route>
        {/* <Route path={path.ADMIN} element={<AdminLayOut />}>
          <Route path={path.DASHBOARD} element={DashBoard} />
          <Route path={path.MANAGER_USER} element={UserManager} />
          <Route path={path.MANAGET_PRODUCT} element={ProdManager} />
        </Route> */}
        <Route path={path.LOGIN} element={<Login />} />

        <Route path={path.LOGIN_SUCCESS} element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
