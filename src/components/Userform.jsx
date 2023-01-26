import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { send } from 'emailjs-com'

const Userform = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [sendSuccess, setSendSuccess] = useState(false)

  const checkboxes = [
    ' Стратегія',
    ' Креатив та реклама',
    ' Брендинг',
    ' Медіа',
    ' СММ та контент',
    ' Маркетинг-аутсорс',
  ]

  const sendFormData = async (data, error) => {
     send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    ) 
    reset()
    setSendSuccess(true)
  }
  return (
    <section id="form" className="bg-white box-border">
      <form
        onSubmit={handleSubmit(sendFormData)}
        className="userform flex flex-col my-8"
      >
        <label className="mt-4">Ім’я</label>
        <input
          type="text"
          {...register('name', { maxLength: 30, required: true })}
        />
        {errors.email?.type === 'required' && (
          <span className="error-span">Вкажіть, будь ласка, своє ім'я</span>
        )}
        <label className="mt-4">Електронна пошта</label>
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email?.type === 'required' && (
          <span className="error-span">
            Вкажіть, будь ласка, електронну пошту
          </span>
        )}
        {errors.email?.type === 'pattern' && (
          <span className="error-span">
            Вкажіть, будь ласка, валідну поштову адресу
          </span>
        )}
        <label className="mt-4">Оберіть тип послуг</label>
        {checkboxes.map((checkbox, index) => (
          <label className="checkbox-label mt-2" key={index}>
            <input
              className="input-checkbox"
              name="services"
              type="checkbox"
              value={checkbox}
              {...register('services', {})}
            />{' '}
            {checkbox}
          </label>
        ))}
        <label className="mt-4">
          Повідомлення <span className="text-[#969696]">(опціонально)</span>
        </label>
        <input
          className="input-multi"
          aria-multiline
          type="text"
          defaultValue=""
          {...register('message')}
        />
        {sendSuccess && (
          <span className="success-span">
            Дякуємо, ваш запит успішно надіслано!
          </span>
        )}
        <button type="submit" className="submit-btn mt-4">
          Відправити запит
        </button>
      </form>
    </section>
  )
}

export default Userform
