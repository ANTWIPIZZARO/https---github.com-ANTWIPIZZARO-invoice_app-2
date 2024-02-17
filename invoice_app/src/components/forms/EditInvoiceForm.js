import { useState } from "react";
import React from "react";

export default function InvoicesForms() {
  
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [clientName, setClientName] = useState("");
  
  const [clientAddress, setClientAddress] = useState("");
  
  
  return (
    <div className="">
      <h1>Edit</h1>

      <div className="font-bold text-blue-600"> Bill Form</div>
      <section>
      <div className="flex flex-col">
          <lable htmlFor="address" class="font-semibold text-lg">
            street address
          </lable>
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
          <article className="md: grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <lable htmlFor="city" class="font-semibold text-lg">
                country
              </lable>
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

              <lable htmlFor="city" class="font-semibold text-lg">
                city
              </lable>
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

              <lable htmlFor=" code" class="font-semibold text-lg">
                Post Code
              </lable>
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

          <div className="font-bold text-blue-600">Bill To</div>

          
          <div></div>
          

          <lable htmlFor="post code" class="font-semibold text-lg">
            Client's Adress
          </lable>
          <input
            type="text"
            name="text"
            id="address"
            placeholder=" client's Address "
            className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
            autoComplete="off"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />
          <article className="md: grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <lable htmlFor="city" class="font-semibold text-lg">
                country
              </lable>
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

              <lable htmlFor="city" class="font-semibold text-lg">
                city
              </lable>
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

              <lable htmlFor=" code" class="font-semibold text-lg">
                Post Code
              </lable>
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
              <lable htmlFor=" code" class="font-semibold text-lg">
                Date
              </lable>
              <input
                type="date"
                name="date"
                id=" date"
                placeholder=" date "
                className="px-3 py-2 bg-gray-200 text-white rounded-sm border-none focus:outline-0"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />

              
            </div>
          </article>

          
        </div>

       

        
      </section>
      {/*    */}
      
    </div>
  );
}
