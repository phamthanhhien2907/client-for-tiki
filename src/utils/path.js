const path = {
  PUBLIC: "/",
  ALL: "*",
  HOME: "",
  MYACCOUNT: ["customer/", "sales/", "admin/"],
  LOGIN: "login",
  ASTRA: "astra-rewards",
  CUSTOMER: "account/edit",

  CHECKOUT: "checkout/",
  CART: "cart",
  PAYMENT: "payment",
  DETAILS_PRODUCT: ":category/",
  PRODUCT_INFO: ":category/:id/:title",
  NOFICATION: "notification",
  LOGIN_SUCCESS: "login-success/:userId/:tokenLogin",
  ORDERHISTORY: "order/history",
  ADDRESS: "address",
  PAYMENTCART: "paymentcard",
  TOP_SELLER: "ban-chay",
  NEW_PRODUCT: "hang-moi",
  LOW_PRICE: "low-price",
  HIGH_PRICE: "high-price",
  // Admin
  ADMIN: "admin/",
  DASHBOARD: "dash-board",
  MANAGER_USER: "manager-user",

  CREATE_USER: "create-user",
  EDIT_USER: "edit-user",

  MANAGET_PRODUCT: "manager-product",
  CREATE_PRODUCT: "create-product",
  EDIT_PRODUCT: "edit-product",
};
export default path;
