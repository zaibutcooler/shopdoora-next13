"use client"

import React, { useState } from "react"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"
import AddressCard from "@/components/mini/AddressCard"

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleClick = () => {
    setFormData(initialFormData)
    toast.success("Message Sent")
  }

  return (
    <section className="flex justify-center" id="contact">
      <main className="w-[1300px] min-h-[70vh] flex items-center px-0 md:px-2 flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full">
          <section className="h-3/4  w-full py-6 px-2 md:p-8 flex flex-col ">
            <h1 className="py-4 mb-4 text-3xl font-bold">Contact Us</h1>
            <div className="mb-6 flex gap-4">
              <div className="w-1/2">
                <label
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-3"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="px-3 py-2 border rounded w-full dark:bg-gray-950"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-3"
                  htmlFor="firstName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="px-3 py-2 border rounded w-full dark:bg-gray-950"
                  required
                />
              </div>
            </div>

            <div className="mb-6 w-full">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="px-3 py-2 border rounded w-full dark:bg-gray-950"
                required
              />
            </div>
            <div className="mb-6 w-full flex-grow">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-3"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="px-3 py-2 border rounded w-full h-full dark:bg-gray-950"
                required
              ></textarea>
            </div>
            <div className="w-full flex justify-end mt-8 sm:mb-12">
              <Button onClick={handleClick}>Send Message</Button>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <section className="p-8 md:p-12 border rounded-md dark:bg-stone-950">
            <AddressCard primary={true} />
          </section>
        </div>
      </main>
    </section>
  )
}
