import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { ageList } from '../utils/ageList';

const AddUsers: FC = function () {
  const [gander, setGander] = useState('');
  const [age, setAge] = useState('');

  const handleGender = (event: ChangeEvent<HTMLInputElement>) => {
    setGander((event.target as HTMLInputElement).value);
  };
  
  const handleAge = function (event: SelectChangeEvent) {
    setAge(event.target.value);
  };

  return (
    <main>
      <section className='flex flex-col gap-3 w-full bg-white py-4 px-5'>
        <div className='flex gap-4'>
          <TextField fullWidth placeholder='First name' />
          <TextField fullWidth placeholder='Last name' />
        </div>

        <TextField placeholder='Email address' />

        <FormControl className='w-fit text-black'>
          <FormLabel id='demo-controlled-radio-buttons-group'>Gender</FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={gander}
            onChange={handleGender}
          >
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='female' control={<Radio />} label='Female'/>
          </RadioGroup>
        </FormControl>

        <FormControl size='small' className='w-20'>
          <InputLabel id='demo-select-small-label'>Age</InputLabel>
          <Select
            labelId='demo-select-small-label'
            id='demo-select-small'
            value={age}
            label='Age'
            onChange={handleAge}
          >
            <MenuItem value=''>
              <em>Select an age</em>
            </MenuItem>
            {ageList.map((age) => (
              <MenuItem value={age}>{age}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </section>
    </main>
  );
};

export default AddUsers;
