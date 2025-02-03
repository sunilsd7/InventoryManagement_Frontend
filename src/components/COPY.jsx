import React, { useState } from "react";

const AddForm = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [products, setProducts] = useState([]);

  const handleAddForm = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      category: productCategory,
      name: productName,
      quantity,
      price,
      company,
      model,
      purchaseDate,
    };

    setProducts([...products, newProduct]); // Add new product to state
    console.log("Product Added:", newProduct);

    // Reset input fields
    setProductName("");
    setProductCategory("");
    setCompany("");
    setQuantity("");
    setModel("");
    setPrice("");
    setPurchaseDate("");
  };

  const handleEdit = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setProductName(product.name);
      setProductCategory(product.category);
      setCompany(product.company);
      setModel(product.model);
      setPrice(product.price);
      setPurchaseDate(product.purchaseDate);
      
      // Remove the product from the list for editing
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="items-center">
      <form action="" className="px-10" onSubmit={handleAddForm}>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Product Category"
            value={productCategory}
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Company"
            value={company}
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Quantity"
            value={quantity}
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Price"
            value={price}
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Model"
            value={model}
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="date"
            placeholder="Purchase Date"
            value={purchaseDate}
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setPurchaseDate(e.target.value)}
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>

      {/* Table Section */}
      <div className="py-5">
        <table className="border-collapse border w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 px-2">Sn</th>
              <th className="border-2 px-2">Name</th>
              <th className="border-2 px-2">Category</th>
              <th className="border-2 px-2">Company</th>
              <th className="border-2 px-2">Model</th>
              <th className="border-2 px-2">Price</th>
              <th className="border-2 px-2">Purchase Date</th>
              <th className="border-2 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="text-center">
                <td className="border-2 px-2">{index + 1}</td>
                <td className="border-2 px-2">{product.name}</td>
                <td className="border-2 px-2">{product.category}</td>
                <td className="border-2 px-2">{product.company}</td>
                <td className="border-2 px-2">{product.model}</td>
                <td className="border-2 px-2">{product.price}</td>
                <td className="border-2 px-2">{product.purchaseDate}</td>
                <td className="border-2 px-2">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
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
