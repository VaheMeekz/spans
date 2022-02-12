import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dropImg from "../images/football.svg"

export default function DropDown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }

  return (
    <div>
      <FormControl sx={{ m: 1, maxWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label"><img src={dropImg} /></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>foot</em>
          </MenuItem>
          <MenuItem value={10}>Football</MenuItem>
          <MenuItem value={21}>Tenis</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}