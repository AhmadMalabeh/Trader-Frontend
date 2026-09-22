import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function CustomRadioGroup({
  label,
  name,
  value,
  onChange,
  options,
  row = false,
}) {
  const id = React.useId();

  return (
    <FormControl sx={{ m: 1 }}>
      {/* عنوان مجموعة الخيارات */}
      <FormLabel id={`${id}-radio-label`}>{label}</FormLabel>

      <RadioGroup
        aria-labelledby={`${id}-radio-label`}
        name={name}
        value={value}
        onChange={onChange}
        row={row} // عشان يترتبوا جمب بعض أفقياً لو بعثت row={true}
      >
        {/* رسم الخيارات ديناميكياً بناءً على الـ Array الممرر */}
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
