'use client'

import { useState } from 'react'
import LabelInput from './LabelInput'
import { Button } from '../ui/button'
import LabelTextarea from './LabelTextArea'
import { ContactSchema, contactSchema } from '@/schemas/contactSchema'

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactSchema>({
    firstName: '',
    lastName: '',
    business: '',
    email: '',
    message: '',
  })

  // Use the keys of Contact schema as optional keys
  const [errors, setErrors] = useState<Partial<Record<keyof ContactSchema, string>>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // clear errors on change
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const results = contactSchema.safeParse(formData)

    if (!results.success) {
      const fieldErrors = results.error.flatten().fieldErrors as Partial<
        Record<keyof ContactSchema, string>
      >
      setErrors(fieldErrors)
      console.log(errors)
      return
    }

    console.log(formData)
  }

  return (
    <form className="flex w-full flex-col space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Lets chat</h2>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <LabelInput
          type="text"
          name="firstName"
          label="First Name"
          placeholder="John Doe"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          className="h-12 rounded-lg"
        />

        <LabelInput
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Doe"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          className="h-12 rounded-lg"
        />
      </div>

      <LabelInput
        type="text"
        name="business"
        label="Business"
        placeholder=""
        value={formData.business}
        onChange={handleChange}
        error={errors.business}
        className="h-12 rounded-lg"
      />

      <LabelInput
        type="email"
        name="email"
        label="Email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        className="h-12 rounded-lg"
      />

      <LabelTextarea
        label="How can we help you?"
        name="message"
        placeholder="Type your message..."
        value={formData.message}
        onChange={handleChange}
        rows={8}
        error={errors.message}
        className="h-30"
      />

      <Button type="submit" className="ml-auto h-12 w-[12rem]">
        Submit
      </Button>
    </form>
  )
}
