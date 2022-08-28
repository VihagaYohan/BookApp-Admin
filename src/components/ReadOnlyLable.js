import React from 'react';
import TextField from '@mui/material/TextField';

const ReadOnlyLable = ({ lable, value }) => {
  return (
    <>
      <TextField
        required
        label={lable}
        value={value}
        fullWidth
        autoComplete="given-name"
        variant="standard"
        sx={{
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'black',
          },
        }}
        disabled
      />
    </>
  );
};

export default ReadOnlyLable;
