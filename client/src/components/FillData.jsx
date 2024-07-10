import { useState } from "react";
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button, CircularProgress } from "@mui/material";
import { addData } from "../service/api";
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  month: '',
  total_expense: 0
};

const GetData = () => {
  const [chartData, setChartData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setChartData({ ...chartData, [e.target.name]: e.target.value });
  };

  const addDataDetails = async () => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      await addData(chartData);
      setSuccessMessage('Data added successfully!');
      setChartData(defaultValue); // Reset form fields after successful addition
    } catch (error) {
      console.error('Error adding data:', error);
      setErrorMessage('Failed to add data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add Data</Typography>
      <FormControl>
        <InputLabel>Month</InputLabel>
        <Input onChange={(e) => onValueChange(e)} value={chartData.month} name="month" />
      </FormControl>
      <FormControl>
        <InputLabel>Total Expense</InputLabel>
        <Input type="number" onChange={(e) => onValueChange(e)} value={chartData.total_expense} name="total_expense" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addDataDetails()} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Add Data'}
        </Button>
      </FormControl>
      {successMessage && <Typography variant="body1" style={{ color: 'green', marginTop: '10px' }}>{successMessage}</Typography>}
      {errorMessage && <Typography variant="body1" style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</Typography>}
    </Container>
  );
};

export default GetData;
