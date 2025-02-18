import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
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
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

 
  useEffect(() => {
    const savedProducts = Cookies.get("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts)); 
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveToCookies = (data) => {
    Cookies.set("products", JSON.stringify(data)); 
  };

  const handleAddForm = (e) => {
    e.preventDefault();

    const newProduct = {
      id: isEditing ? editId : Date.now(),
      ...formData,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
    };

    let updatedProducts;
    if (isEditing) {
      updatedProducts = products.map((p) => (p.id === editId ? newProduct : p));
      toast.success("Product updated successfully!");
      setIsEditing(false);
      setEditId(null);
    } else {
      updatedProducts = [...products, newProduct];
      toast.success("Product added successfully!");
    }

    setProducts(updatedProducts);
    saveToCookies(updatedProducts);

    setFormData({
      name: "",
      category: "",
      company: "",
      quantity: "",
      price: "",
      model: "",
      purchaseDate: "",
    });
  };

  const handleEdit = (id) => {
    const product = products.find((p) => p.id === id);
    setFormData(product);
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    saveToCookies(updatedProducts);
    toast.success("Product deleted successfully!");
  };

  return (
    <div className="flex flex-col items-center ">
      

      <div className="bg-white  rounded-lg p-6 w-full max-w-lg ">
        <p className="text-xl font-bold text-center mb-4 text-gray-700">
          {isEditing ? "Edit Product" : "Add New Product"}
        </p>

        <form className="space-y-2  " onSubmit={handleAddForm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              className="p-2 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              className="p-2 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              className="p-2 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="model"
              placeholder="Model"
              value={formData.model}
              className="p-2 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              className="p-2 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              className="p-2 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            className="p-3 border rounded-lg w-full"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg"
          >
            {isEditing ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {products.length > 0 && (
        <div className="w-full mt-10 overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left border">SN</th>
                <th className="px-4 py-3 text-left border">Name</th>
                <th className="px-4 py-3 text-left border">Category</th>
                <th className="px-4 py-3 text-left border">Company</th>
                <th className="px-4 py-3 text-left border">Model</th>
                <th className="px-4 py-3 text-left border">Quantity</th>
                <th className="px-4 py-3 text-left border">Price ($)</th>
                <th className="px-4 py-3 text-left border">Purchase Date</th>
                <th className="px-4 py-3 text-left border">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="px-4 py-3 border">{index + 1}</td>
                  <td className="px-4 py-3 border">{product.name}</td>
                  <td className="px-4 py-3 border">{product.category}</td>
                  <td className="px-4 py-3 border">{product.company}</td>
                  <td className="px-4 py-3 border">{product.model}</td>
                  <td className="px-4 py-3 border">{product.quantity}</td>
                  <td className="px-4 py-3 border">{product.price}</td>
                  <td className="px-4 py-3 border">{product.purchaseDate}</td>
                  <td className="px-4 py-3 flex gap-2 border">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddForm;
