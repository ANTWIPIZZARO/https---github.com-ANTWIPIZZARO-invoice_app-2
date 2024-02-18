import { useFormik } from "formik";
import React from "react";

function Forms({ formData, btnText, title, hasButton, onSubmit }) {
  const formik = useFormik({
    initialValues: formData.reduce((acc, value) => {
      acc[value.name] = "";
      return acc;
    }),
    onSubmit: onSubmit,
  });
  return (
    <div className="">
      <h1 className="font-bold mt-10 mb-3">{title}</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-5 font-bold">
          {/* Main Form section */}
          {formData.map((input) =>
            input.type === "select" ? (
              ""
            ) : (
              <div className="flex flex-col my-3" key={input.label}>
                <label className="font-semibold text-lg ">{input.label}</label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
                  {...formik.getFieldProps(input.name)}
                />
                {formik.touched[input.name] && formik.errors[input.name] && (
                  <span className="text-red-500">
                    {formik.errors[input.name]}
                  </span>
                )}
              </div>
            )
          )}
          {/* Select section */}
          {formData.map((input) =>
            input.type === "select" ? (
              <div key={input.label} className="flex flex-col w-full">
                <label
                  htmlFor={input.label}
                  className="my-1 font-medium capitalize"
                >
                  {input.label}
                </label>
                <select
                  id={input.label}
                  name={input.name}
                  value={formik.values[input.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Select gender"
                  className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
                    formik.touched[input.name] && formik.errors[input.name]
                      ? "border-[#fc030b] border-2"
                      : ""
                  }`}
                >
                  <option value=""></option>
                  {input.options.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : null
          )}
          {hasButton ? (
            <button
              className="py-2 px-2 w-full bg-[#7C5DF9] text-white font-medium my-5"
              type="submit"
            >
              {btnText}
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}

export default Forms;
