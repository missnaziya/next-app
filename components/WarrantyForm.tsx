"use client"
import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const WarrantyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    purchaseDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form Submitted:', formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '400px',
        margin: '0 auto',
        mt: 5
      }}
    >
      <Typography variant="h4" gutterBottom>
        Warranty Form
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <TextField
        label="Product"
        name="product"
        value={formData.product}
        onChange={handleChange}
        required
      />

      <TextField
        label="Purchase Date"
        type="date"
        name="purchaseDate"
        value={formData.purchaseDate}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true
        }}
        required
      />

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default WarrantyForm;
