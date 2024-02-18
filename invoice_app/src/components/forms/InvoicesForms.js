import React from "react";
import Header from "../header";
import Forms from ".";
import { useNavigate } from "react-router-dom";
import generateId from "../../utils/idGenerator";

function InvoicesForms() {
  const navigate = useNavigate();
  const status = [
    { option: "Paid" },
    { option: "Pending" },
    { option: "Drafting" },
  ];

  const statusOptions = status.map((terms) => ({
    label: terms.option,
    value: terms.option,
  }));

  const billForm = [
    {
      label: "User",
      name: "user",
      type: "text",
      placeholder: "User Name",
      value: "",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Description",
      value: "",
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      placeholder: "Description",
      value: "",
      options: statusOptions,
    },
    {
      label: "Amount",
      name: "amount",
      type: "number",
      placeholder: "Enter amount",
      value: "",
    },
  ];
  const handleSubmit = (values, { resetForm }) => {
    const generatedCode = generateId();
    const invoiceData = {
      code: generatedCode,
      user: values.user,
      amount: values.amount,
      status: values.status,
      description: values.description,
    };
    console.log(invoiceData);
    navigate("/");
    resetForm();
  };

  return (
    <div>
      {/* Top section */}
      <div>
        <Header
          title="Create Invoice"
          message="Create an invoice here"
          link="/"
          linkTitle="Invoice"
        />
      </div>
      <div>
        <div className="font-bold text-blue-600 mt-10 mb-3"> Bill Form</div>
      </div>
      {/* Bill Form */}
      <Forms
        formData={billForm}
        onSubmit={handleSubmit}
        btnText="Create"
        hasButton
      />
    </div>
  );
}

export default InvoicesForms;
