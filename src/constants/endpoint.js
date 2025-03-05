export const END_POINTS = {
  LOGIN: "/Userlogin",
  REGISTER: "/Register",
  LOGOUT: "/logout",
  GET_USER: "/get-user",
  TERMS_UPDATE: "/UpdateUser",
  // for settings
  MY_DETAILS: "/Customer/MyDetail",
  BUSINESS_PROFILE: "/BusinessProfile",
  ADD_CERTIFICATE_HOURS: "/AddCertificateHours",
  ADD_ADDITIONAL_INFO: "/AdditionalPhotos",
  ADD_SOCIAL_PROFILE: "/Customer/AddSocial",
  SOCIAL_DELETE: "/SocialDelete",
  UPDATE_PASSWORD: "/Customer/NewPassword",
  ADD_CONVERSATION: "/AddConversation",
  ADD_PAYMENT_DETAILS: "/Customer/AddPaymentMethod",
  ADD_BUSINESS_LOCATION: "/AddBusinessLocation",
  SETTING_PUBLISH: "/SettingPublish",
  USER_DETAILS: "/UserDetails",
  UPDATE_ADMIN: "/SuperAdmin/UpdatePersonal",
  UPDATE_SECURITY: "/SuperAdmin/Security",
  CUSTOM_ORDERS: "/OrdersList",
  GET_ORDER_DETAILS: "/GetOrderDetails",
  ORDER_CONFIRMED: "/OrderConfirm",
  ORDER_BEFORE_IMAGES: "/OrderBeforeImages",
  ORDER_AFTER_IMAGES: "/OrdeAfterImages",
};

export const PRO_POINTS = {
  GET_PROVIDERS: "/SuperAdmin/ServiceProviders",
  GET_CLIENTS: "/SuperAdmin/Customers",
  GET_SALES: "/SuperAdmin/GetAllSaleRep",
  UPDATE_CLIENT: "/SuperAdmin/UpdateCustomer",
  UPDATE_SALE: "/SuperAdmin/UpdateSalesReps",
  SEND_INVITATION: "/SuperAdmin/sendInvite",
  AddPRICING: "/SuperAdmin/AddPriceDetails",
};

export const SALEREP_POINTS = {
  GET_CUSTOMERS: "/SaleRep/SaleCustomers",
  GET_SINGLE_CUSTOMER: "/SaleRep/SaleCustomer",
  EDIT_CUSTOMER: "/SaleRep/UpdateSaleCustomer",
  UPDATE_SALES: "/SaleRep/SalesPersonal",
};
export const SALE_POINTS = {
  GET_SALES: "/SaleRep/GetSettingSale",
};
