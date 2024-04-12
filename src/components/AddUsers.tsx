import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { IoAddOutline, IoImagesOutline } from 'react-icons/io5';
import { ageList } from '../utils/ageList';

const ImageInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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
      <section className='flex flex-col gap-3 w-full bg-white py-2 px-3'>
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
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
          </RadioGroup>
        </FormControl>

        <div className='flex w-full justify-between'>
          <FormControl size='small' className='flex !flex-row gap-3 w-fit'>
            <InputLabel id='demo-select-age'>Age</InputLabel>
            <Select
              labelId='demo-select-age'
              value={age}
              label='Age'
              onChange={handleAge}
              className='w-20'
            >
              <MenuItem value=''>
                <em>Select an age</em>
              </MenuItem>
              {ageList.map((age) => (
                <MenuItem value={age}>{age}</MenuItem>
              ))}
            </Select>
            <Button
              component='label'
              role={undefined}
              variant='contained'
              tabIndex={-1}
              startIcon={<IoImagesOutline />}
            >
              Set photo
              <ImageInput type='file' />
            </Button>
          </FormControl>

          <div className='flex gap-2'>
            <Button variant='contained' endIcon={<IoAddOutline />}>
              Add now
            </Button>
            <Button variant='outlined'>Clearn</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddUsers;
