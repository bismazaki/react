import React, { useState } from 'react';
import {
 
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@mui/material';
import axios from 'axios';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    material: '',
    description: '',
    quantity: '',
    isAvailable: false,
  });

  const [errors, setErrors] = useState({});

  const categories = ['Jeans', 'Shirt', 'T-Shirt', 'Trouser'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.price || isNaN(formData.price)) newErrors.price = 'Valid price is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.material) newErrors.material = 'Material is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.quantity || isNaN(formData.quantity) || formData.quantity < 0) {
      newErrors.quantity = 'Valid quantity is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    if (validate()) {
      try {
        // Make a POST request to the API
        const response = await axios.post('https://677d5cf34496848554ca48ee.mockapi.io/crud/Product', formData);
  
        console.log('Form Submitted Successfully:', response.data);
  
        
        setFormData({
          name: '',
          price: '',
          category: '',
          material: '',
          description: '',
          quantity: '',
          isAvailable: false,
        });
  
        // Clear any errors
        setErrors({});
      } catch (error) {
        console.error('Error submitting form:', error);
  
        // Optionally, handle error response and set error messages
        setErrors({ apiError: 'Failed to submit form. Please try again later.' });
      }
    }
  };
  

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        p: 3,
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={5}
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          p: 4,
        }}
      >
        <Typography
          variant="h2"
          color="secondary"
          fontFamily="serif"
          align="center"
          gutterBottom
        >
          Create Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                name="price"
                fullWidth
                variant="outlined"
                value={formData.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.category}>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categories.map((cat, index) => (
                    <MenuItem key={index} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
                {errors.category && <FormHelperText>{errors.category}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Material"
                name="material"
                fullWidth
                variant="outlined"
                value={formData.material}
                onChange={handleChange}
                error={!!errors.material}
                helperText={errors.material}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Quantity"
                name="quantity"
                fullWidth
                variant="outlined"
                value={formData.quantity}
                onChange={handleChange}
                error={!!errors.quantity}
                helperText={errors.quantity}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isAvailable"
                    checked={formData.isAvailable}
                    onChange={handleChange}
                  />
                }
                label="Is Available"
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default CreateProduct;
