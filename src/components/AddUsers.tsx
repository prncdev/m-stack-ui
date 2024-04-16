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
  styled,
  TextField,
} from '@mui/material';
import { FC, useState } from 'react';
import { IoAddOutline, IoImagesOutline } from 'react-icons/io5';
import { ageList } from '../utils/ageList';

import addUser from '../services/addUser';

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

interface iUserForm {
  name: string;
  lastName: string;
  email: string;
  gender: string;
  age: string;
  image_url?: string;
}

const AddUsers: FC = function () {
  const [userForm, setUserForm] = useState<iUserForm>({
    name: '',
    lastName: '',
    email: '',
    gender: '',
    age: '',
    image_url: '',
  });

  const handleFormData = function (e: any) {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  // const handlerClearFormData = function () {
  //   setUserForm(prevState => ({
  //     ...prevState,
  //     name: '',
  //     lastName: '',
  //     email: '',
  //     gender: '',
  //     age: '',
  //     image_url: '',
  //   }));
  // };
  const handlerClearFormData = function () {
    setUserForm({
      ...userForm,
      name: '',
      lastName: '',
      email: '',
      gender: '',
      age: '',
      image_url: '',
    });
  };

  const handleFormSubmit = async function (e: any) {
    await addUser(userForm);
    handlerClearFormData();
  };

  return (
    <main>
      <section className='flex flex-col gap-3 w-full bg-white py-2 px-3'>
        <div className='flex gap-4'>
          <TextField
            fullWidth
            name='name'
            value={userForm.name}
            onChange={handleFormData}
            placeholder='First name'
          />
          <TextField
            fullWidth
            name='lastName'
            value={userForm.lastName}
            onChange={handleFormData}
            placeholder='Last name'
          />
        </div>

        <TextField
          name='email'
          value={userForm.email}
          onChange={handleFormData}
          placeholder='Email address'
        />

        <FormControl className='w-fit text-black'>
          <FormLabel id='demo-controlled-radio-buttons-group'>Gender</FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='gender'
            value={userForm.gender}
            onChange={handleFormData}
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
              name='age'
              value={userForm.age}
              label='Age'
              onChange={handleFormData}
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
              <ImageInput
                type='file'
                name='image_url'
                onChange={handleFormData}
              />
            </Button>
          </FormControl>

          <div className='flex gap-2'>
            <Button
              variant='contained'
              endIcon={<IoAddOutline />}
              disabled={
                !userForm.name ||
                !userForm.lastName ||
                !userForm.email ||
                !userForm.age ||
                !userForm.gender
              }
              onClick={handleFormSubmit}
            >
              Add now
            </Button>
            <Button
              variant='outlined'
              onClick={handlerClearFormData}
            >
              Clearn
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddUsers;
