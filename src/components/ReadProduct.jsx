import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Button,
} from '@mui/material';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is included
import * as bootstrap from 'bootstrap';
import { Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

const ReadProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://677d5cf34496848554ca48ee.mockapi.io/crud/Product');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const deleteRecord = async (id) => {
    // Show confirmation popup
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });
  
    if (result.isConfirmed) {
      try {
        // Perform the deletion
        await axios.delete(`https://677d5cf34496848554ca48ee.mockapi.io/crud/Product/${id}`);
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  
        // Show success message
        Swal.fire('Deleted!', 'Record has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting record:', error);
  
        // Show error message
        Swal.fire('Error!', 'Failed to delete the record.', 'error');
      }
    }
  };

  
  // const updateRecord = async () => {
  //   try {
  //     await axios.put(`https://677d5cf34496848554ca48ee.mockapi.io/crud/Product/${id}`, {
  //       name,
  //       price,
  //       category,
  //       material,
  //       quantity,
  //       isAvailable,
  //     });
  
  //     // Update the products state
  //     setProducts((prevProducts) =>
  //       prevProducts.map((product) =>
  //         product.id === id
  //           ? { ...product, name, price, category, material, quantity, isAvailable }
  //           : product
  //       )
  //     );
  
  //     // Close the modal programmatically using Bootstrap's Modal API
  //     const modalElement = document.getElementById('exampleModal');
  //     const modalInstance = bootstrap.Modal(modalElement);
  //     modalInstance.hide();
  
  //     // Reset the form fields
  //     setId(null);
  //     setName('');
  //     setPrice('');
  //     setCategory('');
  //     setMaterial('');
  //     setQuantity('');
  //     setIsAvailable(false);
  //   } catch (error) {
  //     console.error('Error updating record:', error);
  //   }
  // };
  
  const updateRecord = async () => {
    try {
      await axios.put(`https://677d5cf34496848554ca48ee.mockapi.io/crud/Product/${id}`, {
        name,
        price,
        category,
        material,
        quantity,
        isAvailable,
      });
  
      // Update the products state
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id
            ? { ...product, name, price, category, material, quantity, isAvailable }
            : product
        )
      );
  
      // Close the modal programmatically using Bootstrap's Modal API
      const modalElement = document.getElementById('exampleModal');
      const modalInstance = bootstrap.Modal.getInstance(modalElement); // Use getInstance() to retrieve the Bootstrap modal instance
      modalInstance.hide();
  
      // Show success popup
      Swal.fire({
        icon: 'success',
        title: 'Updated Successfully',
        text: 'The product has been updated successfully.',
        confirmButtonText: 'OK',
      });
  
      // Reset the form fields
      setId(null);
      setName('');
      setPrice('');
      setCategory('');
      setMaterial('');
      setQuantity('');
      setIsAvailable(false);
    } catch (error) {
      console.error('Error updating record:', error);
  
      // Show error popup
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'There was an error updating the product. Please try again.',
        confirmButtonText: 'OK',
      });
    }
  };
  
  const handleEditClick = (product) => {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
    setMaterial(product.material);
    setQuantity(product.quantity);
    setIsAvailable(product.isAvailable);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Typography
        variant="h3"
        color="secondary"
        textAlign="center"
        gutterBottom
        fontFamily="serif"
        sx={{ marginTop: 5 }}
      >
        Product List
      </Typography>

      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
      ) : (
        <>
          <center>
            <Link to="/">
              <button className="btn btn-primary">+</button>
            </Link>
          </center>
          <div style={{ overflowX: 'auto', marginTop: '6px' }}>
            <TableContainer component={Paper} sx={{ border: '1px solid #ddd', minWidth: '900px' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Material</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Is Available</TableCell>
                    <TableCell>Delete</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.material}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>{product.isAvailable ? 'Yes' : 'No'}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => deleteRecord(product.id)}
                          variant="contained"
                          color="error"
                          size="small"
                        >
                          <DeleteIcon fontSize="small" />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => handleEditClick(product)}
                          variant="contained"
                          color="warning"
                          size="small"
                        >
                          <Edit fontSize="small" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label className="form-label">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
              />
              <label className="form-label">Price</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                className="form-control"
              />
              <label className="form-label">Category</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                className="form-control"
              />
              <label className="form-label">Material</label>
              <input
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                type="text"
                className="form-control"
              />
              <label className="form-label">Quantity</label>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="text"
                className="form-control"
              />
              <label className="form-label">Is Available</label>
              <select
                value={isAvailable}
                onChange={(e) => setIsAvailable(e.target.value === 'true')}
                className="form-control"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={updateRecord}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadProduct;
