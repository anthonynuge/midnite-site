'use client'

import { useState } from 'react'
import LabelInput from './LabelInput'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import LabelTextarea from './LabelTextArea'

interface FormData {
  firstName: string
  lastName: string
  email: string
  bussiness: string
  message?: string
}

const defaultFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  bussiness: '',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData)

  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    bussiness: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    console.log(formData)
  }

  return (
    <form className="flex w-full flex-col space-y-6" onSubmit={handleSubmit}>
      <LabelInput
        type="text"
        name="firstName"
        label="First Name"
        placeholder="John Doe"
        value={formData.firstName}
        onChange={handleChange}
        required
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
        required
        error={errors.firstName}
        className="h-12 rounded-lg"
      />

      <LabelInput
        type="text"
        name="bussiness"
        label="Bussiness"
        placeholder=""
        value={formData.firstName}
        onChange={handleChange}
        required
        error={errors.firstName}
        className="h-12 rounded-lg"
      />

      <LabelInput
        type="email"
        name="email"
        label="Email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={handleChange}
        required
        error={errors.email}
        className="h-12 rounded-lg"
      />

      <LabelTextarea
        label="How can we help you?"
        name="message"
        placeholder="Type your message..."
        value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
        rows={8}
        required
        error={errors.message}
        className="h-30"
      />

      <Button type="submit" className="ml-auto h-12 w-[12rem]">
        Submit
      </Button>
    </form>
  )
}
