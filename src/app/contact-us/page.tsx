"use client"

import { useTranslation } from '@/hooks/useTranslations'
import React, { useRef, useState } from 'react'
import emailjs from "emailjs-com"
import toast from 'react-hot-toast'

function ContactUs() {
  const { t: text } = useTranslation()
  const formRef = useRef<HTMLFormElement | null>(null)
  const [isSending, setIsSending] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)

    if (!formRef.current) return

    emailjs.sendForm(
      "service_v2y1b1e",
      "template_7lkpyel",
      formRef.current,
      "OzeD8GZ8MbPU39A6f"
    )
      .then(() => {
        toast.success(text("ContactUs.text5"))
        setIsSending(false)
        formRef.current?.reset()
      })
      .catch((err) => {
        console.error(err)
        toast.error(text("ContactUs.text6"))
        setIsSending(false)
      })
  }

  return (
    <div className="p-7 w-full relative h-auto px-10 lg:px-16 pt-[15vh] pb-20 lg:pt-[20vh] flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-5 justify-between">
      <div className='w-full lg:w-[45%]'>
        <h2 className="font-extrabold text-2xl mb-5">{text("ContactUs.text1")}</h2>
        <p className='text-xl font-bold mb-2'>{text("ContactUs.text2")}</p>
        <p className='text-md lg:text-lg mt-8'>{text("ContactUs.text3")}</p>
        <p className='text-md lg:text-lg mt-6'>{text("ContactUs.text4")}</p>
      </div>

      <div className='w-full lg:w-[50%] mt-12 lg:mt-0'>
        <form ref={formRef} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">
          {/* Fields */}
          {[
            { label: "Name*", name: "name", required: true, type: "text", placeholder: "Your name" },
            { label: "Company / Organization", name: "company", required: false, type: "text", placeholder: "Optional" },
            { label: "Email*", name: "email", required: true, type: "email", placeholder: "you@example.com" },
            { label: "Phone*", name: "phone", required: true, type: "tel", placeholder: "+62..." }
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
              />
            </div>
          ))}

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full border border-primary text-primary font-semibold py-2 rounded-md hover:bg-primary hover:text-white transition cursor-pointer disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
