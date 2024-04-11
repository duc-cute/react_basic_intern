import { useField } from "formik";
import React, { memo } from "react";
import { twMerge } from "tailwind-merge";

const Input = ({ formik, value, label, name, type, ...props }) => {
  // const [field, meta] = useField({ name, type });
  // console.log("props", props);
  // console.log("field", field);
  console.log("name", name);
  const { errors, touched, handleBlur, handleChange } = formik;
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.id || name}
          className="block  mb-[6px] text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
      )}
      <input
        // {...field}
        onBlur={handleBlur}
        onChange={handleChange}
        value={formik.values[name]}
        {...props}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-300 focus:border-main-300 block w-full p-2 "
      />
      {errors[name] && touched[name] ? (
        <small className="text-[12px] text-[#ee3131] italic">
          {errors[name]}
        </small>
      ) : null}
    </div>
  );
};

export default memo(Input);
