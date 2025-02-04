// let initialState = [
//   {
//     username: "foo",
//     password: "bar",
//   },
// ];
// const action = {
//   type: "LOGIN",
//   payload: {
//     username: "foo",
//     password: "bar",
//   },
// };
// const LoginComponent = (state, action) => {
//   switch (action.type) {
//     // This reducer handles any action with type "LOGIN"
//     case "LOGIN":
//       return state.map((user) => {
//         if (user.username !== action.payload.username) {
//           return user;
//         }

//         if (user.password == action.payload.password) {
//           return {
//             ...user,
//             login_status: "LOGGED IN",
//           };
//         }
//       });
//     default:
//       return state;
//   }
// };

// console.log(LoginComponent(initialState, action));

// const createSlug = (string) =>
//   string
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .toLowerCase()
//     .trim()
//     .replace(/\s-|&/g, "")
//     .replace(/\s+/g, " ")
//     .split(" ")
//     .join("-");

// const string = "Đồ chơi - mẹ & bé";
// console.log(
//   string
//     .normalize("NFD")
//     .replace(/Đ/g, "D")
//     .replace(/đ/g, "d")
//     .replace(/[\u0300-\u036f]/g, "")
//     .toLowerCase()
//     .trim()
//     .replace(/\s-|&/g, "")
//     .replace(/\s+/g, " ")
//     .split(" ")
//     .join("-")
// );
// const price = [123.0, 134.0];

// const result = price.reduce((total, currentValue, index, arr) => {
//   // console.log(total);
//   const x = total + currentValue;
//   return x;
// }, 0);
// console.log(result);

const createSlug = (string) =>
  string
    .normalize("NFD")
    .replace(/Đ/g, "D")
    .replace(/đ/g, "d")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s-|&/g, "")
    .replace(/\s+/g, " ")
    .split(" ")
    .join("-");

const categories = [
  {
    id: 1,
    categoryName: "Đồ Chơi - Mẹ & Bé",
  },
  {
    id: 2,
    categoryName: "Điện Thoại - Máy Tính Bảng",
  },
  {
    id: 3,
    categoryName: "NGON",
  },
  {
    id: 4,
    categoryName: "Làm Đẹp - Sức Khỏe",
  },
  {
    id: 5,
    categoryName: "Điện Gia Dụng",
  },
  {
    id: 6,
    categoryName: "Thời trang nữ",
  },
  {
    id: 7,
    categoryName: "Thời trang nam",
  },
  {
    id: 8,
    categoryName: "Giày - Dép nữ",
  },
  {
    id: 9,
    categoryName: "Túi thời trang nữ",
  },
  {
    id: 10,
    categoryName: "Giày - Dép nam",
  },
  {
    id: 11,
    categoryName: "Túi thời trang nam",
  },
  {
    id: 12,
    categoryName: "Balo và Vali",
  },
  {
    id: 13,
    categoryName: "Phụ kiện thời trang",
  },
  {
    id: 14,
    categoryName: "Đồng hồ và Trang sức",
  },
  {
    id: 14,
    categoryName: "Laptop - Máy Vi Tính - Linh kiện",
  },
  {
    id: 15,
    categoryName: "Nhà Cửa - Đời Sống",
  },
  {
    id: 16,
    categoryName: "Cross Border - Hàng Quốc Tế",
  },
  {
    id: 17,
    categoryName: "Bách Hóa Online",
  },
  {
    id: 18,
    categoryName: "Thiết Bị Số - Phụ Kiện Số",
  },
  {
    id: 19,
    categoryName: "Voucher - Dịch vụ",
  },
  {
    id: 20,
    categoryName: "Ô Tô - Xe Máy - Xe Đạp",
  },
  {
    id: 21,
    categoryName: "Nhà Sách Tiki",
  },
  {
    id: 22,
    categoryName: "Điện Tử - Điện Lạnh",
  },
  {
    id: 23,
    categoryName: "Thể Thao - Dã Ngoại",
  },
  {
    id: 24,
    categoryName: "Máy Ảnh - Máy Quay Phim",
  },
  {
    id: 25,
    categoryName: "Sản phẩm Tài chính - Bảo hiểm",
  },
];
// console.log(typeof createSlug(categories[0].categoryName));

// const formatMoney = (number) => {
//   let formattedString = number?.toFixed(2)?.replace(".", "").split(" ")[0];
//   console.log(formattedString);
//   formattedString = formattedString?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//   console.log(typeof number);
//   return formattedString;
// };
// console.log(formatMoney(2410332));

// const createSlugCategories = (name) => {
//   const array = [];
//   for (let category of categories) {
//     if (category.categoryName === name) {
//       array.push(createSlug(category.categoryName));
//     }
//   }
//   return array;
// };
// console.log(createSlugCategories(categories[0].categoryName)[0]);
// module.exports = categories;

// const thumb = [
//   "https://salt.tikicdn.com/cache/750x750/ts/product/e5/da/f1/034ab44d25534259f38aa90a3635157e.jpg 1x, https://salt.tikicdn.com/cache/750x750/ts/product/e5/da/f1/034ab44d25534259f38aa90a3635157e.jpg 2x",
// ];

// const sliceThumb = thumb[0];
// console.log(sliceThumb.split(",")[0].split(" ")[0]);

const variants = [
  { colorName: "Màu", variants: ["Xanh Rêu", null] },
  {
    colorName: "Màu sắc",
    variants: [
      "Black",
      null,
      "Black for KIDS",
      null,
      "Blue Grey",
      null,
      "Blue Sky",
      null,
      "Coffee",
      null,
      "Denim",
      null,
      "Emerald Forest Kids",
      null,
      "Merlot",
      null,
      "Olive",
      null,
      "Yellow Kids",
      null,
    ],
  },
  {
    colorName: "dung lượng",
    variants: [
      "16GB",
      null,
      "16GB HỎA TỐC 2H",
      null,
      "32GB",
      null,
      "8GB - HỎA TỐC 2H",
      null,
      "8gb",
      null,
    ],
  },
  {
    colorName: "Màu sắc",
    variants: [
      "Be(Beige 02)",
      null,
      "Be(Beige 57)",
      null,
      "Bạc(Silver 624)",
      null,
      "Khaki 26",
      null,
      "Khaki 263",
      null,
      "Khaki Apricot 30",
      null,
      "Khaki Đậm 506",
      null,
      "Khaki Đậm(Deep Khaki 25)",
      null,
      "Nâu Nhạt(Light Brown 09)",
      null,
      "Nâu Đậm(Dark Brown 06)",
      null,
      "Nâu Đỏ(Reddish Brown 08)",
      null,
      "Nâu(Brown 05)",
      null,
      "Trắng Be(Beige White 04)",
      null,
      "Trắng Ngà(Off White 03)",
      null,
      "Trắng(White 01)",
      null,
      "Vàng Chanh(Lemon Yellow 95)",
      null,
      "Vàng Ròng(Golden 655)",
      null,
      "Vàng(Yellow 07)",
      null,
      "Đen(Black 18)",
      null,
      "Đỏ Cam(Orange Red 28)",
      null,
      "Đỏ Hoa Cà(Mauve 186)",
      null,
      "Đỏ Hồng(Rose Red 93)",
      null,
      "Đỏ Máu(Oxblood Red 89)",
      null,
      "Đỏ Rượu Vang(Bordeaux Red 108)",
      null,
      "Đỏ Rượu(Claret 11)",
      null,
      "Đỏ Táo(Jujube Red 22)",
      null,
      "Đỏ(Red 102)",
      null,
    ],
  },
];

const type = (type) => {
  const color = [];

  type?.map((variant) => {
    if (variant?.colorName === "Màu" || variant?.colorName === "Màu sắc") {
      variant.variants.map((el) => {
        if (el != null) color.push(el);
      });
    }
  });
  return color;
};
// console.log(type(variants));

// console.log(Math.floor(Math.random(10) * 10) + 1);

var d = new Date();
console.log(d.getDate() + 2, d.getMonth() + 1);
console.log(d.getDay() + 3);

// console.log(d.getFullYear());

function compareArrays(a, b) {
  // Tạo một mảng để lưu trữ các chỉ số của phần tử trùng nhau
  const indexes = [];

  // Duyệt mảng a
  for (let i = 0; i < a.length; i++) {
    // Nếu phần tử a[i] trùng với một phần tử trong mảng b
    if (b.includes(a[i])) {
      // Kiểm tra xem phần tử a[i] đã được thêm vào mảng indexes chưa
      if (!indexes.includes(i)) {
        // Thêm phần tử a[i] vào mảng indexes
        indexes.push(i);
      } else {
        // Trả về null
        return null;
      }
    }
  }

  // Nếu không tìm thấy phần tử nào trùng nhau
  if (indexes.length === 0) {
    return null;
  }

  // Trả về mảng indexes
  return indexes;
}

const numbers = [100, 200, 400, 500, 300, 600];
const numbers1 = [100, 200, 300, 400, 500, 300, 100, 200, 300, 500];

const result = compareArrays(numbers, numbers1);

console.log(result); // [0]
