import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({
  label,
  value,
  onChange,
  options,
  helperText,
}) {
  const id = React.useId();

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        aria-describedby={helperText ? `${id}-helper-text` : undefined}
      >
        <MenuItem value="">
          <em>اختر من القائمة</em>
        </MenuItem>
        {/* رسم الخيارات القادمة من الخارج ديناميكياً */}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <FormHelperText id={`${id}-helper-text`}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
