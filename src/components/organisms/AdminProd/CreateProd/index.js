import React, { useEffect, useState } from "react";
import { Button, InputForm, Select } from "../../../atoms";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  apiCreateProduct,
  apiGetProduct,
} from "../../../../services/productService";
import { categories } from "../../../../utils/constant";
import { compareArrays, createSlug } from "../../../../utils/helper";
const CreateProduct = () => {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const cat = [];
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    watch,
  } = useForm();
  categories?.map((category) => {
    cat.push({
      slug: createSlug(category.categoryName),
      name: category.categoryName,
    });
  });
  const getBrand = async (query) => {
    const brand = [];
    console.log(query.type);
    const response = await apiGetProduct({ type: query.type });
    if (response.success) {
      response?.products?.map((product) => {
        brand.push({
          id: product?._id,
          brand: product?.brand,
        });
      });
      setProducts(brand);
    }
  };
  const getAll = async () => {
    const cate = [];
    const response = await apiGetProduct();
    if (response.success) {
      response?.products?.map((product) => {
        cate.push(product?.type);
      });
      setCategory(cate);
    }
  };
  useEffect(() => {
    getAll();
    setTimeout(() => {
      getBrand({ type: watch("cateName") }, 300);
    });
  }, [watch("cateName")]);
  console.log(products);
  const compareArrays = (a, b) => {
    // Tạo một mảng để lưu trữ các chỉ số của phần tử trùng nhau
    const indexes = [];
    // Duyệt mảng a
    for (let i = 0; i < a.length; i++) {
      // Nếu phần tử a[i] trùng với một phần tử trong mảng b
      if (b.includes(a[i]?.slug)) {
        // Kiểm tra xem phần tử a[i] đã được thêm vào mảng indexes chưa
        if (!indexes.includes(i)?.slug) {
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
    return indexes.map((index) => {
      return {
        slug: a[index]?.slug,
        name: a[index]?.name,
      };
    });
  };
  const result = compareArrays(cat, category || []);

  const handleCreateProduct = async (data) => {
    // data.catName = cat?.find((e) => e?.slug === data.cateName);
    // console.log(data);
    const finalPayload = { ...data };
    console.log(finalPayload);
    const response = await apiCreateProduct(finalPayload);
    console.log(response);
  };
  console.log(watch("cateName"));

  return (
    <div className="w-full">
      <h1>
        <span>Create New Product</span>
      </h1>
      <div className="p-4">
        {/* handleSubmit sẽ lấy data từ form truyền vào hàm handleCreateProduct */}
        <form onSubmit={handleSubmit(handleCreateProduct)}>
          <InputForm
            label="Tên sản phẩm"
            register={register}
            errors={errors}
            id="title"
            vallidate={{
              require: "Vui lòng điền dòng này",
            }}
            fullWith
            placeholder="Tên của sản phẩm "
          />
          <div className="w-full flex gap-4">
            <InputForm
              label="Giá tiền"
              register={register}
              errors={errors}
              id="prices"
              vallidate={{
                require: "Vui lòng điền dòng này",
              }}
              style="flex-1"
              placeholder="Giá tiền của sản phẩm "
              type="number"
            />
            <InputForm
              label="Số lượng"
              register={register}
              errors={errors}
              id="quantity"
              vallidate={{
                require: "Vui lòng điền dòng này",
              }}
              style="flex-1"
              placeholder="Số lượng của sản phẩm "
              type="number"
            />
            <InputForm
              label="Màu sắc"
              register={register}
              errors={errors}
              id="color"
              vallidate={{
                require: "Vui lòng điền dòng này",
              }}
              style="flex-1"
              placeholder="Màu sắc của sản phẩm "
              type="text"
            />
          </div>
          <div className="flex gap-2  w-full">
            <div className="flex-1 w-full">
              <Select
                label="Category"
                options={result?.map((el, index) => ({
                  code: el?.slug,
                  value: el?.name,
                }))}
                register={register}
                id="cateName"
                vallidate={{ require: "Cần điền form này" }}
                style="flex-auto"
                errors={errors}
              />
            </div>
            <div className="flex-1 w-full">
              <Select
                label="Brand"
                options={products?.map((el) => ({
                  code: el?.brand,
                  value: el?.brand,
                }))}
                register={register}
                id="brand"
                vallidate={{ require: "Cần điền form này" }}
                style="flex-auto"
                errors={errors}
              />
            </div>
          </div>
          <div className="flex items-center mt-8 justify-center">
            <button
              className="w-[410px]  ml-4
             px-4 py-2 rounded-md text-white bg-red-500 hover:bg-gray-700"
              type="submit"
            >
              Tạo sản phẩm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
