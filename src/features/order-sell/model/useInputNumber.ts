'use client'

import { useState } from 'react'

export const useInputNumber = () => {
  const [InputNum, setInputNum] = useState({
    discountRate: '',
    price: '',
    value: '',
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (value === '') {
      setInputNum(state => ({
        ...state,
        [name]: '',
      }))
      return
    }
    const num = Number(value.replaceAll(',', ''))
    if (num < 0 || isNaN(num)) return
    setInputNum(state => ({
      ...state,
      [name]: num.toLocaleString(),
    }))
  }

  const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (value === '') {
      setInputNum(state => ({
        ...state,
        [name]: '',
      }))
      return
    }
    const num = Number(value.replaceAll(',', ''))
    if (num < 0 || isNaN(num)) return
    if (num > 100) {
      setInputNum(state => ({
        ...state,
        [name]: '100',
      }))
      return
    }
    setInputNum(state => ({
      ...state,
      [name]: num.toLocaleString(),
    }))
  }

  return { InputNum, handleChangeDiscount, handleChangeInput }
}
