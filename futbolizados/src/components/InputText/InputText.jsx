import { Label, TextInput } from 'flowbite-react';

const InputText = ({label, placeholder}) => {
  return (
    <div>
    <div className="mb-2 block">
      <Label htmlFor="small" value={label}  />
    </div>
    <TextInput id="small" type="text" sizing="sm" placeholder={placeholder} />
  </div>
  )
}

export default InputText