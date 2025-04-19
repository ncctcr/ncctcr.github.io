import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { FC } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type TypeProps = {
  label: string;
  data: {name: string, key: string}[];
  onSelect: (values: string[]) => void;
}

const MultiSelect: FC<TypeProps> = ({ label, data, onSelect }) => {
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    const newValues = typeof value === 'string' ? value.split(',') : value;
    setSelected(newValues);
    onSelect(newValues)
  };

  return (
    <div>
      <FormControl size={'small'} fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) =>
            selected
              .map((key) => data.find((item) => item.key === key)?.name || key)
              .join(', ')
          }
          MenuProps={MenuProps}

        >
          {data.map((item, index) => (
            <MenuItem key={index} value={item.key}>
              <Checkbox checked={selected.includes(item.key)} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultiSelect;
