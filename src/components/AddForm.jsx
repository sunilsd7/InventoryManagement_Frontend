import React, { useState } from "react";
import "../index.css";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddForm = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.category || !formData.company || !formData.quantity || !formData.price || !formData.model || !formData.purchaseDate) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    const newProduct = {
      id: isEditing ? editId : Date.now(),
      ...formData,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
    };

    if (isEditing) {
      setProducts(products.map((p) => (p.id === editId ? newProduct : p)));
      toast.success("Product updated successfully!");
      setIsEditing(false);
      setEditId(null);
    } else {
      setProducts([...products, newProduct]);
      toast.success("Product added successfully!");
    }

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
    setProducts(products.filter((p) => p.id !== id));
    toast.success("Product deleted successfully!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
    
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          {isEditing ? "Edit Product" : "Add Product"}
        </h2>
        <form className="space-y-4" onSubmit={handleAddForm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["name", "category", "company", "model"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={`Product ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                className="p-3 border rounded-lg w-full focus:ring focus:ring-blue-300"
                onChange={handleChange}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              className="p-3 border rounded-lg w-full focus:ring focus:ring-blue-300"
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              className="p-3 border rounded-lg w-full focus:ring focus:ring-blue-300"
              onChange={handleChange}
            />
          </div>
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            className="p-3 border rounded-lg w-full focus:ring focus:ring-blue-300"
            onChange={handleChange}
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition">
            {isEditing ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {products.length > 0 && (
        <div className="w-full max-w-5xl mt-10 overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                {["SN", "Name", "Category", "Company", "Model", "Price", "Purchase Date", "Action"].map((header) => (
                  <th key={header} className="px-4 py-3 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">{product.company}</td>
                  <td className="px-4 py-3">{product.model}</td>
                  <td className="px-4 py-3">${product.price}</td>
                  <td className="px-4 py-3">{product.purchaseDate}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <button onClick={() => handleEdit(product.id)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
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
