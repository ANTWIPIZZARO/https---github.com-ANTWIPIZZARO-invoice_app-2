import React from "react";
import Header from "./header";
import InvoiceList from "./InvoiceList";

export default function InvoicesDetails() {
  return (
    <div>
      <Header
        title="Invoices"
        message="There are 7 invoices available"
        link="/invoice-form"
        linkTitle="New Invoice"
      />
      {/* Invoices List */}
      <InvoiceList />
    </div>
  );
}
