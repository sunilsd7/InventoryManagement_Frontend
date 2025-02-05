import React, { useState } from "react";
import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const notify = () =>
    toast.success("Product added successfully!", {
      style: { backgroundColor: "green", color: "white" },
    });

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    company: "",
    quantity: "",
    price: "",
    model: "",
    purchaseDate: "",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    setProducts([...products, { id: products.length + 1, ...formData }]);
    setFormData({
      name: "",
      category: "",
      company: "",
      quantity: "",
      price: "",
      model: "",
      purchaseDate: "",
    });
    notify();
  };

  const handleEdit = (id) => {
    const product = products.find((p) => p.id === id);
    setFormData(product);
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="items-center">
      <form className="px-10" onSubmit={handleAddForm}>
        <div className="grid grid-cols-1">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            className="p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            name="category"
            placeholder="Product Category"
            value={formData.category}
            className="p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            className="p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            className="p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            className="p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={formData.model}
            className="p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="date"
            name="purchaseDate"
            placeholder="Purchase Date"
            value={formData.purchaseDate}
            className="p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>

      <ToastContainer />

      <div className="px-10 py-5">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="text-2xl">
            <tr>
              <td className="border-2 px-2">Sn</td>
              <td className="border-2 px-2">Name</td>
              <td className="border-2 px-2">Category</td>
              <td className="border-2 px-2">Company</td>
              <td className="border-2 px-2">Model</td>
              <td className="border-2 px-2">Price</td>
              <td className="border-2 px-2">Purchase Date</td>
              <td className="border-2 px-2">Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="border-2 px-2 py-4">{index + 1}</td>
                <td className="border-2 px-2">{product.name}</td>
                <td className="border-2 px-2">{product.category}</td>
                <td className="border-2 px-2">{product.company}</td>
                <td className="border-2 px-2">{product.model}</td>
                <td className="border-2 px-2">{product.price}</td>
                <td className="border-2 px-2">{product.purchaseDate}</td>
                <td className="border-2 px-2 space-x-2">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="p-2 bg-yellow-500 rounded-lg px-4 text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 bg-red-600 rounded-lg px-4 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddForm;
