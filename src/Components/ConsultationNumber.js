import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import ExcelExporter from './ExcelExport';

function SoldeCompteForm() {
  const [currentValue, setCurrentValue] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    let value = event.target.value;
    if (value.match(/^[0-9, ","]+$/) || value === '') {
      setCurrentValue(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let url = "https://localhost:7247/api/GetBalance/";
    let response = await fetch(url, {
      headers: {
        accept: 'application/json',
        cardnumbers: currentValue,
      },
    });
    let content = await response.json();
    let data = content.data;
    setResults(data);
    
    
  };

  return (
    <div>
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <input
        type='text'
        placeholder="Veuillez saisir le(s) numéro(s) de téléphone"
        value={currentValue}
        onChange={handleChange}
        className='outline-none w-1/4 mb-5 rounded-md p-4 text-black'
      />
      <ExcelExporter data={results} fileName="BalancesValues" />
      <button
        onClick={handleSubmit}
        className='bg-gray-50 px-2 py-2 rounded-md drop-shadow-md text-l font-medium text-black'
      >
        Obtenir les soldes
      </button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Numbers</TableCell>
            <TableCell align='right'>Solde Type</TableCell>
            <TableCell align='right'>Balance Effective Date</TableCell>
            <TableCell align='right'>Balance Expiry Date</TableCell>
            <TableCell align='right'>Balance Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result, index) => (
            <TableRow key={index}>
              <TableCell>{result.cardNumber}</TableCell>
              <TableCell align='right'>{result.name}</TableCell>
              <TableCell align='right'>{result.balanceEffectiveDate}</TableCell>
              <TableCell align='right'>{result.balanceExpiryDate}</TableCell>
              <TableCell align='right'>{result.balanceValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>
  );
}

export default SoldeCompteForm;