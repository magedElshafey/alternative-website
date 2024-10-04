import { createSlice } from "@reduxjs/toolkit";

// استرجاع البيانات من localStorage عند تحميل التطبيق
const getInitialState = () => {
  const local = JSON.parse(localStorage.getItem("recentlyViewedLocal")) || [];
  const foreign =
    JSON.parse(localStorage.getItem("recentlyViewedForeign")) || [];
  return { local, foreign };
};

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState: getInitialState(),
  reducers: {
    addLocalProduct: (state, action) => {
      const product = action.payload;
      state.local = [
        product,
        ...state.local.filter((p) => p.id !== product.id),
      ].slice(0, 6);
      // حفظ المنتجات المحلية في localStorage
      localStorage.setItem("recentlyViewedLocal", JSON.stringify(state.local));
    },
    addForeignProduct: (state, action) => {
      const product = action.payload;
      state.foreign = [
        product,
        ...state.foreign.filter((p) => p.id !== product.id),
      ].slice(0, 6);
      // حفظ المنتجات الأجنبية في localStorage
      localStorage.setItem(
        "recentlyViewedForeign",
        JSON.stringify(state.foreign)
      );
    },
  },
});

export const { addLocalProduct, addForeignProduct } =
  recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
