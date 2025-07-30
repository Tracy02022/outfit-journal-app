'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [today, setToday] = useState('')

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    setToday(date)
  }, [])

  return (
    <div className="min-h-screen bg-[url('/magazine-bg.jpg')] bg-cover bg-fixed bg-center">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg">
        {/* 顶部：头像+日期 */}
        <div className="flex justify-between items-center text-sm mb-4">
          <span className="font-medium text-gray-700">Tracy</span>
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="text-gray-500">{today}</span>
        </div>

        {/* 标题 */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-serif italic tracking-wide">
            Dressing <span className="font-bold not-italic">in</span> Beige Tones
          </h1>
        </div>

        {/* 今日穿搭 */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/look-of-day.jpg"
              alt="Look of the Day"
              width={600}
              height={800}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center text-left">
            <p className="text-sm uppercase text-gray-500 mb-1">Look of the Day</p>
            <h2 className="text-xl font-serif font-semibold mb-2">Minimalist</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tried out low-saturation beige today. Felt calm and balanced. Sometimes, neutrals say the most.
            </p>
          </div>
        </div>

        {/* Outfit Journal */}
        <h3 className="text-md uppercase font-bold tracking-wide text-gray-700 mb-6">
          Outfit Journal
        </h3>

        <div className="space-y-10">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Image
              src="/outfit1.jpg"
              alt="Outfit 1"
              width={400}
              height={400}
              className="rounded-md w-full md:w-1/2 object-cover shadow-md"
            />
            <div className="md:w-1/2">
              <h4 className="text-lg font-serif font-semibold mb-1">Soft Neutrals</h4>
              <p className="text-xs text-gray-500 mb-2">April 8, 2024</p>
              <p className="text-sm text-gray-700 mb-2">
                Kept it light with a dusty blue romper and fuzzy cardigan. Cozy, soft, and gentle on the skin.
              </p>
              <div className="text-xs text-purple-600 space-x-2">
                <span>#pastel</span>
                <span>#cozy</span>
                <span>#spring</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
            <Image
              src="/outfit2.jpg"
              alt="Outfit 2"
              width={400}
              height={400}
              className="rounded-md w-full md:w-1/2 object-cover shadow-md"
            />
            <div className="md:w-1/2">
              <h4 className="text-lg font-serif font-semibold mb-1">Weekend Chill</h4>
              <p className="text-xs text-gray-500 mb-2">April 7, 2024</p>
              <p className="text-sm text-gray-700 mb-2">
                Oversized hoodie with a latte in hand. That’s the vibe. Cloudy skies and comfy vibes.
              </p>
              <div className="text-xs text-purple-600 space-x-2">
                <span>#loungewear</span>
                <span>#neutral</span>
                <span>#sunday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
