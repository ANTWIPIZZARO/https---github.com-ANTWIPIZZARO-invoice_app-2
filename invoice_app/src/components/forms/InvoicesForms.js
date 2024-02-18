import React from "react";
import Header from "../header";
import Forms from ".";

function InvoicesForms() {
  const payment_terms = [
    { terms: "Net 30 days" },
    { terms: "Net 20 days" },
    { terms: "Net 15 days" },
  ];

  const paymentOptions = payment_terms.map((terms) => ({
    label: terms.terms,
    value: terms.terms,
  }));

  const billForm = [
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Street address",
      value: "",
    },
    {
      label: "City",
      name: "city",
      type: "text",
      placeholder: "Enter city name",
      value: "",
    },
    {
      label: "Country",
      name: "country",
      type: "text",
      placeholder: "Enter country name",
      value: "",
    },
    {
      label: "Post Code",
      name: "postCode",
      type: "text",
      placeholder: "Enter postCode name",
      value: "",
    },
  ];
  const billToData = [
    {
      label: "Client's Name",
      name: "name",
      type: "text",
      placeholder: "Client's Name",
      value: "",
    },
    {
      label: "Client's Email",
      name: "email",
      type: "text",
      placeholder: "Client's Email",
      value: "",
    },
    {
      label: "City",
      name: "clientCity",
      type: "text",
      placeholder: "Client's City",
      value: "",
    },
    {
      label: "Post Code",
      name: "clientCode",
      type: "text",
      placeholder: "Post Code",
      value: "",
    },
    {
      label: "Country",
      name: "clientCountry",
      type: "text",
      placeholder: "Client Country",
      value: "",
    },
    {
      label: "Inovice Date",
      name: "invoiceData",
      type: "date",
      placeholder: "Select date",
      value: "",
    },
    {
      label: "Payment Terms",
      name: "paymentTerms",
      type: "select",
      placeholder: "Payment",
      value: "",
      options: paymentOptions,
    },
  ];
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
      <Forms title="" formData={billForm} onSubmit={handleSubmit} />
      {/* Bill To*/}
      <Forms
        title="Bill To"
        formData={billToData}
        btnText="Create"
        hasButton
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default InvoicesForms;
