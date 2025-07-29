// app/home/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { OutfitCard } from '@/components/OutfitCard'

export default function HomePage() {
  const [today, setToday] = useState('')
  const router = useRouter()

  useEffect(() => {
    const now = new Date()
    const formatted = format(now, 'MMMM dd, yyyy')
    setToday(formatted)
  }, [])

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#322c28] p-4 font-serif">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm">Tracy</span>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image src="/avatar.jpg" alt="Avatar" width={32} height={32} />
        </div>
        <span className="text-sm">{today}</span>
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl italic font-medium leading-snug">
          Dressing <span className="not-italic font-semibold">in</span>
          <br /> Beige <span className="italic font-semibold">Tones</span>
        </h1>
      </div>

      {/* Look of the Day */}
      <div className="flex flex-col md:flex-row md:gap-6 mb-10">
        <Image
          src="/look-of-day.jpg"
          alt="Look of the Day"
          width={500}
          height={600}
          className="rounded-xl object-cover"
        />
        <div className="mt-4 md:mt-0 md:w-[40%]">
          <p className="uppercase text-xs tracking-widest mb-2 text-gray-500">
            Look of the Day
          </p>
          <h2 className="text-xl font-semibold mb-2">Minimalist</h2>
          <p className="text-sm text-gray-700">
            Tried out low-saturation beige today. Feels really calming.
          </p>
        </div>
      </div>

      {/* Outfit Journal Section */}
      <section>
        <h3 className="text-lg font-semibold mb-3 uppercase">Outfit Journal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <OutfitCard
            date="4.08.2024"
            image="/outfit1.jpg"
            tags={['#chocolate-brown']}
          />
          <OutfitCard
            date="4.08.2024"
            image="/outfit2.jpg"
            tags={['#Soft-Pastel']}
          />
        </div>
      </section>
    </main>
  )
}
