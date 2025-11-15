'use client'

import { useState, useEffect } from 'react'
import { IndianRupee } from 'lucide-react'

export default function CurrencyConverter() {
  const [inrAmount, setInrAmount] = useState(1000)
  const [usdAmount, setUsdAmount] = useState(0)
  const [exchangeRate, setExchangeRate] = useState(83) // Approximate rate

  useEffect(() => {
    setUsdAmount(Math.round((inrAmount / exchangeRate) * 100) / 100)
  }, [inrAmount, exchangeRate])

  const handleInrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0
    setInrAmount(value)
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-primary/20">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-primary">
          <IndianRupee className="w-5 h-5" />
          <h3 className="text-sm font-semibold">Currency Converter</h3>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs text-foreground/60 block mb-2">Indian Rupees (INR)</label>
            <div className="flex items-center bg-background/50 rounded px-3 py-2 border border-primary/10">
              <IndianRupee className="w-4 h-4 text-primary mr-2" />
              <input
                type="number"
                value={inrAmount}
                onChange={handleInrChange}
                className="bg-transparent w-full text-sm font-medium text-foreground outline-none"
              />
            </div>
          </div>

          <div className="text-xs text-foreground/50 pt-2">
            All prices displayed in Indian Rupees (INR)
          </div>
        </div>
      </div>
    </div>
  )
}
