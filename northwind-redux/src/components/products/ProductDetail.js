import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Update" : "Add"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Error !"
      ></TextInput>

      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Select"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error="Error !"
      ></SelectInput>

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
