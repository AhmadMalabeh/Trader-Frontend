import React from "react";
import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

// 1. المكون الداخلي المسؤول عن التنسيق
const NumberFormatCustom = React.forwardRef(
  function NumberFormatCustom(props, ref) {
    // انتبه هنا: قمنا بفصل الـ onChange القادمة من MUI عن باقي الـ props
    const { onChange, name, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          // نتحقق أولاً إن الـ onChange موجودة عشان ما يعطي خطأ
          if (onChange) {
            onChange({
              target: {
                name: name,
                value: values.value, // يرسل الرقم صافي (مثال: 10000)
              },
            });
          }
        }}
        thousandSeparator=","
        valueIsNumericString
      />
    );
  },
);

// 2. المكون الأساسي
export default function CustomNumberFormat({
  label,
  value,
  onChange,
  name,
  ...props
}) {
  return (
    <TextField
      {...props}
      label={label}
      value={value}
      onChange={onChange}
      name={name}
      // التعديل الأهم هنا لضمان التوافقية الكاملة مع MUI
      slotProps={{
        input: {
          inputComponent: NumberFormatCustom,
        },
      }}
    />
  );
}
