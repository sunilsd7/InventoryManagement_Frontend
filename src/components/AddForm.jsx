import React, { useState } from "react";
import '../index.css';

const AddForm = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [products, setProducts] = useState([]);
  const [action,setAction]=useState("");

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
      action,
    };
    
   

    setProducts([...products, newProduct]); 
    console.log("Product Added:", newProduct);

    setProductName("");
    setProductCategory("");
    setCompany("");
    setQuantity("");
    setModel("");
    setPrice("");
    setCompany("");
    setPurchaseDate("");
    setAction("");


  };
  const handleEdit=(id)=>{
    const product=products.find(p=>p.id===id);
    setProductName(product.name);
    setProductCategory(product.category);
    setCompany(product.company);
    setModel(product.model);
    setPrice(product.price);
    setPurchaseDate(product.purchaseDate);
    setProducts(products.filter(p=>p.id!=id));

  }
  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
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
      <div className=" px-10 py-5">
        <table className="min-w-full border-collapse border border-gray-200 mr-10">
         
            <thead className="  text-2xl">
            <tr className="">
              <td className="border-2 px-2 ">Sn</td>
              <td className="border-2 px-2">Name</td>
              <td className="border-2 px-2">Catagory</td>
              <td className="border-2 px-2">Company</td>
              <td className="border-2 px-2">Model</td>
              <td className="border-2 px-2">Price</td>
              <td className="border-2 px-2">Purchase Date</td>
              <td className="border-2 px-2">Action</td>
              
              </tr>

            </thead>
        
          <tbody>
            {products.map((product,index)=>(
              <tr key={product.id}>
                <td className="border-2 px-2 py-4 ">{index+1}</td>
                <td className="border-2 px-2 ">{product.name}</td>
                <td className="border-2 px-2 ">{product.category}</td>
                <td className="border-2 px-2 ">{product.company}</td>
                <td className="border-2 px-2 ">{product.model}</td>
                <td className="border-2 px-2 ">{product.price}</td>
                <td className="border-2 px-2 ">{product.purchaseDate}</td>
                <td className="border-2 px-2  space-x-2"><button onClick={()=>handleEdit(product.id) } className="p-2 bg-red-600 rounded-lg px-4 text-white">Edit</button>
              <button onClick={()=>handleDelete(product.id) } className="p-2 bg-red-600 rounded-lg px-4 text-white">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddForm;
