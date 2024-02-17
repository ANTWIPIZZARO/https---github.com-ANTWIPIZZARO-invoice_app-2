import React from "react";
import Header from "../header";
import { useState } from "react";

function InvoicesForms() {
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [project, setProject] = useState("");
  const [items, setItems] = useState("");

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
        {/*    */}
      </div>
      <section className="">
        <div className="flex flex-col">
          <label htmlFor="address" class="font-semibold text-lg">
            street address
          </label>
          <input
            type="text"
            name="text"
            id="address"
            placeholder=" street address "
            className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <article className="md: grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="city" class="font-semibold text-lg">
              country
            </label>
            <input
              type="text"
              name="text"
              id="country"
              placeholder="Enter  country "
              className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
              autoComplete="off"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" class="font-semibold text-lg">
              city
            </label>
            <input
              type="text"
              name="text"
              id="city"
              placeholder=" city "
              className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
              autoComplete="off"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor=" code" class="font-semibold text-lg">
              Post Code
            </label>
            <input
              type="text"
              name="text"
              id=" code"
              placeholder=" post code "
              className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
              autoComplete="off"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </article>
      </section>
      {/*Bills to client */}
      <div>
        <section className="mt-5 font-bold">
          <h2 className="mt-5  text-violet-500">Bill To</h2>
          <div className="flex flex-col">
            <label htmlFor="client name" class="font-semibold text-lg ">
              Client's name
            </label>
            <input
              type="text"
              name="text"
              id="client name"
              placeholder=" client's name "
              className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
              autoComplete="off"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" class="font-semibold text-lg">
              Client's Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=" client's Email "
              className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" class="font-semibold text-lg">
              street address
            </label>
            <input
              type="text"
              name="text"
              id="address"
              placeholder=" street address "
              className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
              autoComplete="off"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <article className="md: grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <label htmlFor="city" class="font-semibold text-lg">
                country
              </label>
              <input
                type="text"
                name="text"
                id="country"
                placeholder="Enter  country "
                className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
                autoComplete="off"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" class="font-semibold text-lg">
                city
              </label>
              <input
                type="text"
                name="text"
                id="city"
                placeholder=" city "
                className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
                autoComplete="off"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor=" code" class="font-semibold text-lg">
                Post Code
              </label>
              <input
                type="text"
                name="text"
                id=" code"
                placeholder=" post code "
                className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
                autoComplete="off"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </article>
          <article className="md: grid grid-cols-2 gap-10">
            <div className="flex flex-col">
              <label htmlFor=" code" class="font-semibold text-lg">
                Date
              </label>
              <input
                type="date"
                name="date"
                id=" date"
                placeholder=" date "
                className="px-3 py-2 bg-gray-200 rounded-sm border-none focus:outline-0"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor=" project" class="font-semibold text-lg">
                Payment Terms
              </label>
              <select
                placeholder="Payment term"
                className="px-3 py-2 bg-gray-200 rounded-sm border-none focus:outline-0"
              >
                <option value={paymentTerm}>Net 30 Days</option>
              </select>
            </div>
          </article>
          <div className="flex flex-col">
            <label htmlFor=" project" class="font-semibold text-lg">
              Project Description
            </label>
            <input
              type="text"
              name="text"
              id=" project"
              placeholder=" Project Description "
              className="px-3 py-2 bg-gray-200 rounded-sm border-none focus:outline-0"
              autoComplete="off"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>

          {/*Items details */}
          <div className="flex flex-col">
          <h1 className="text-2xl font-bold py-3">Item List</h1>
          {/* Item List */}
          <div className="md: ">
          <ul>
            <li>Items Name</li>
            <li>Qty</li>
            <li>Price</li>
            <li>Total</li>
          </ul>
          <div>
          <label htmlFor=" project" class="font-semibold text-lg">
              
            </label>
            <input
              type="text"
              name="text"
              id=" items name"
              placeholder=" items name "
              className="px-3 py-2 bg-gray-200 rounded-sm border-none focus:outline-0"
              autoComplete="off"
              value={items}
              onChange={(e) => setItems(e.target.value)}
            /></div>
            
          </div>
          </div>
        </section>
      </div>
      <section>
        <button>
          
        </button>
      </section>      
    </div>
  );
}

export default InvoicesForms;
