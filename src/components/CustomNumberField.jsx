import TextField from "@mui/material/TextField";

export default function CustomNumberField({
  label,
  min,
  max,
  value,
  onChange,
}) {
  return (
    <TextField
      label={label}
      type="number" // بحول الحقل لأرقام وبيطلع أسهم الزيادة والنقصان
      value={value}
      onChange={onChange}
      slotProps={{
        htmlInput: {
          min: min,
          max: max,
        },
      }}
      fullWidth
      sx={{ m: 1 }}
    />
  );
}
