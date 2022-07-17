import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { handleAddQuestion } from "../actions/questions";

import Button from '@mui/material/Button';

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  const handleSecondOptionChange = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-9">New Poll</h1>
      <form onSubmit={handleSubmit}>
      


<div style = {{alignItems:'center'}}>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter 1st option"

            value={firstOption}
            onChange={handleFirstOptionChange}
            type="text"
            name="firstOption"
            id="firstOption"
            data-testid="firstOption"
          />
          
          <TextField
            helperText="Please end second option"

            value={secondOption}
            onChange={handleSecondOptionChange}
            type="text"
            name="secondOption"
            id="secondOption"
            data-testid="secondOption"
            
          />

      

</Box>
<Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
            paddingLeft: '160px'
          }}
        >


        <div className="mt-6 text-right" width = "30px">
          
          <Button
              type="submit"
              data-testid="submit-poll"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large" 
            >
            Submit
            </Button>
          
        </div>
</Box>
</div>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
