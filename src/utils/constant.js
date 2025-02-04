import home from "../assets/images/home.png";
import account from "../assets/images/Account.png";
import path from "./path";
import {
  me_be,
  diengiadung,
  dienthoai,
  ngon,
  lamdep,
  dientu,
  giaynam,
  giaynu,
  thethao,
  thietbiso,
  thoitrangnam,
  thoitrangnu,
  mayanh,
  sanphamtaichinh,
  tuinam,
  tuinu,
  maytinh,
  kinh,
  noi,
  sach,
  vali,
  quocte,
  xe,
  bachhoa,
  donghonam,
  voucher,
} from "../components/atoms/images";
import icons from "./icons";
const {
  FaUser,
  IoMdNotifications,
  MdOutlinePayment,
  IoLocationSharp,
  MdWorkHistory,
  LuPackage,
  MdManageAccounts,
} = icons;
export const navigation = [
  {
    id: 1,
    value: "Trang chủ",
    image: home,
    css: "hover:rounded-md flex gap-1 justify-center items-center w-[118px] h-[40px] ",
  },
  {
    id: 2,
    value: "Tài khoản",
    image: account,
    css: "hover:rounded-md flex gap-1 justify-center items-center w-[140px] h-[40px] after:h-[20px] ",
    path: `/${path.ACCOUNT}`,
    children: [
      {
        id: 3,
        value: "Thông tin tài khoản",
        path: `customer/${path.CUSTOMER}`,
      },
      // {
      //   id: 4,
      //   value: "Đơn hàng của tôi",
      //   path: `sales/${path.ORDERHISTORY}`,
      // },
      {
        id: 5,
        value: "Đăng xuất",
      },
    ],
    childrenAdmin: [
      {
        id: 3,
        value: "Thông tin tài khoản",
        path: `${path.ADMIN}${path.CUSTOMER}`,
      },
      {
        id: 4,
        value: "Quản lí sản phẩm",
        path: `${path.ADMIN}${path.MANAGET_PRODUCT}`,
      },
      {
        id: 6,
        value: "Quản lí người dùng ",
        path: `${path.ADMIN}${path.MANAGER_USER}`,
      },
      {
        id: 5,
        value: "Đăng xuất",
      },
    ],
  },
];
export const customerTabs = [
  {
    id: 1,
    value: "Thông tin tài khoản",
    icon: <FaUser size={16} />,
    path: path.CUSTOMER,
  },
  // {
  //   id: 2,
  //   value: "Thông báo của tôi",
  //   icon: <IoMdNotifications size={16} />,
  //   path: path.NOFICATION,
  // },
  {
    id: 3,
    value: "Quản lí đơn hàng",
    icon: <MdWorkHistory size={16} />,
    path: path.MYACCOUNT[1] ? path.ORDERHISTORY : "",
  },
  // {
  //   id: 4,
  //   value: "Sổ địa chỉ",
  //   icon: <IoLocationSharp size={16} />,
  //   path: path.ADDRESS,
  // },
  // {
  //   id: 5,
  //   value: "Thông tin thanh toán",
  //   icon: <MdOutlinePayment size={16} />,
  //   path: path.PAYMENTCART,
  // },
];
export const customerTabsAdmin = [
  {
    id: 1,
    value: "Thông tin tài khoản",
    icon: <FaUser size={16} />,
    path: `/${path.ADMIN}${path.CUSTOMER}`,
  },
  {
    id: 2,
    value: "Quản lí sản phẩm",
    icon: <MdManageAccounts size={16} />,
    // path: `${path.MANAGET_PRODUCT}`,
    productChildren: [
      {
        id: 3,
        value: "Thêm sản phẩm",
        icon: <MdManageAccounts size={16} />,
        path: `${path.MANAGET_PRODUCT}/${path.CREATE_PRODUCT}`,
      },
      {
        id: 4,
        value: "Chỉnh sửa sản phẩm",
        icon: <MdManageAccounts size={16} />,
        path: `${path.MANAGET_PRODUCT}/${path.EDIT_PRODUCT}`,
      },
    ],
  },
  {
    id: 5,
    value: "Quản lí người dùng",
    icon: <LuPackage size={16} />,
    // path: `${path.MANAGER_USER}`,
    userChildren: [
      {
        id: 6,
        value: "Thêm người dùng",
        icon: <MdManageAccounts size={16} />,
        path: `${path.MANAGER_USER}/${path.CREATE_USER}`,
      },
      {
        id: 7,
        value: "Chỉnh sửa người dùng",
        icon: <MdManageAccounts size={16} />,
        path: `${path.MANAGER_USER}/${path.EDIT_USER}`,
      },
    ],
  },
  // {
  //   id: 4,
  //   value: "Sổ địa chỉ",
  //   icon: <IoLocationSharp size={16} />,
  //   path: path.ADDRESS,
  // },
  // {
  //   id: 5,
  //   value: "Thông tin thanh toán",
  //   icon: <MdOutlinePayment size={16} />,
  //   path: path.PAYMENTCART,
  // },
];
const style = `after:w-[50px] after:bottom-[-3px] relative after:absolute after:border after:border-b-4 after:block after:right-[50%] after:border-blue-500 font-normal after:rounded-xl after:translate-x-[50%]`;
const activeHover = `after:w-[50px] after:bottom-[-3px] relative after:absolute hover:after:border hover:after:border-b-4 after:block after:right-[50%] after:border-blue-500  after:rounded-xl after:translate-x-[50%]`;
export const prodcutDetailTabs = [
  {
    id: 1,
    value: "Phổ Biến",
    style: style,
    hover: activeHover,
    path: "",
  },
  {
    id: 2,
    value: "Bán Chạy",
    style: style,
    hover: activeHover,
    path: `${path.TOP_SELLER}`,
  },
  {
    id: 3,
    value: "Hàng Mới",
    style: style,
    hover: activeHover,
    path: `${path.TOP_SELLER}`,
  },
  {
    id: 4,
    value: "Giá Thấp Đến Cao",
    style: style,
    hover: activeHover,
    path: `${path.TOP_SELLER}`,
  },
  {
    id: 5,
    value: "Giá Cao Đến Thấp",
    style: style,
    hover: activeHover,
    path: `${path.TOP_SELLER}`,
  },
];

export const categories = [
  {
    id: 1,
    categoryName: "Đồ Chơi - Mẹ & Bé",
    categoryImage: me_be,
  },
  {
    id: 2,
    categoryName: "Điện Thoại - Máy Tính Bảng",
    categoryImage: dienthoai,
  },
  {
    id: 3,
    categoryName: "NGON",
    categoryImage: ngon,
  },
  {
    id: 4,
    categoryName: "Làm Đẹp - Sức Khỏe",
    categoryImage: lamdep,
  },
  {
    id: 5,
    categoryName: "Điện Gia Dụng",
    categoryImage: diengiadung,
  },
  {
    id: 6,
    categoryName: "Thời trang nữ",
    categoryImage: thoitrangnu,
  },
  {
    id: 7,
    categoryName: "Thời trang nam",
    categoryImage: thoitrangnam,
  },
  {
    id: 8,
    categoryName: "Giày - Dép nữ",
    categoryImage: giaynu,
  },
  {
    id: 9,
    categoryName: "Túi thời trang nữ",
    categoryImage: tuinu,
  },
  {
    id: 10,
    categoryName: "Giày - Dép nam",
    categoryImage: giaynam,
  },
  {
    id: 11,
    categoryName: "Túi thời trang nam",
    categoryImage: tuinam,
  },
  {
    id: 12,
    categoryName: "Balo và Vali",
    categoryImage: vali,
  },
  {
    id: 13,
    categoryName: "Phụ kiện thời trang",
    categoryImage: kinh,
  },
  {
    id: 14,
    categoryName: "Đồng hồ và Trang sức",
    categoryImage: donghonam,
  },
  {
    id: 14,
    categoryName: "Laptop - Máy Vi Tính - Linh kiện",
    categoryImage: maytinh,
  },
  {
    id: 15,
    categoryName: "Nhà Cửa - Đời Sống",
    categoryImage: noi,
  },
  {
    id: 16,
    categoryName: "Cross Border - Hàng Quốc Tế",
    categoryImage: quocte,
  },
  {
    id: 17,
    categoryName: "Bách Hóa Online",
    categoryImage: bachhoa,
  },
  {
    id: 18,
    categoryName: "Thiết Bị Số - Phụ Kiện Số",
    categoryImage: thietbiso,
  },
  {
    id: 19,
    categoryName: "Voucher - Dịch vụ",
    categoryImage: voucher,
  },
  {
    id: 20,
    categoryName: "Ô Tô - Xe Máy - Xe Đạp",
    categoryImage: xe,
  },
  {
    id: 21,
    categoryName: "Nhà Sách Tiki",
    categoryImage: sach,
  },
  {
    id: 22,
    categoryName: "Điện Tử - Điện Lạnh",
    categoryImage: dientu,
  },
  {
    id: 23,
    categoryName: "Thể Thao - Dã Ngoại",
    categoryImage: thethao,
  },
  {
    id: 24,
    categoryName: "Máy Ảnh - Máy Quay Phim",
    categoryImage: mayanh,
  },
  {
    id: 25,
    categoryName: "Sản phẩm Tài chính - Bảo hiểm",
    categoryImage: sanphamtaichinh,
  },
];

export const color = [
  "Hồng",
  "Xanh dương",
  "Vàng",
  "Đỏ",
  "Trắng",
  "Xanh lá",
  "Đen",
  "Cam",
  "Tím",
  "Nâu",
  "Bạc",
  "Kem",
];
export const price = [
  "60.000 → 160.000",
  "160.000 → 400.000",
  "400.000 → 600.000",
  "Trên 600.000",
];
