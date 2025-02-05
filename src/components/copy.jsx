import React, { useState } from "react";
import "../index.css";
import { ToastContainer, toast } from "react-toastify";

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
    setFormData({ name: "", category: "", company: "", quantity: "", price: "", model: "", purchaseDate: "" });
  };

  const handleEdit = (id) => {
    const product = products.find((p) => p.id === id);
    setFormData(product);
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div className="items-center">
      <form className="px-10" onSubmit={handleAddForm}>
        {["name", "category", "company", "quantity", "price", "model", "purchaseDate"].map((field) => (
          <input
            key={field}
            type={field === "purchaseDate" ? "date" : "text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            className="p-2 border border-gray-300 rounded w-full my-2"
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit" onClick={notify} className="mt-4 bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>
      <div className="px-10 py-5">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="text-2xl">
            <tr>
              {["Sn", "Name", "Category", "Company", "Model", "Price", "Purchase Date", "Action"].map((head) => (
                <td key={head} className="border-2 px-2">{head}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                {[index + 1, product.name, product.category, product.company, product.model, product.price, product.purchaseDate].map((data, idx) => (
                  <td key={idx} className="border-2 px-2 py-4">{data}</td>
                ))}
                <td className="border-2 px-2 space-x-2">
                  <button onClick={() => handleEdit(product.id)} className="p-2 bg-red-600 rounded-lg px-4 text-white">Edit</button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 bg-red-600 rounded-lg px-4 text-white">Delete</button>
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
