// app/home/page.tsx
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="bg-[#f8f5f0] min-h-screen p-4 md:p-8 text-[#2c2c2c] font-serif">

      {/* 顶部信息 */}
      <div className="flex items-center justify-between text-sm mb-2">
        <span>Tracy</span>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image src="/avatar.jpg" alt="Avatar" width={32} height={32} />
        </div>
        <span>July 29, 2024</span>
      </div>

      {/* 标题部分 */}
      <div className="text-center my-2">
        <h1 className="text-3xl italic font-light">Dressing <span className="font-semibold not-italic">in</span></h1>
        <h2 className="text-4xl italic font-bold">Beige Tones</h2>
      </div>

      {/* 照片 + Look 文本 */}
      <div className="md:flex items-start gap-6 my-6">
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <Image
            src="/look-of-day.jpg"
            alt="Look of the Day"
            width={600}
            height={800}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 text-left text-sm leading-relaxed">
          <h3 className="uppercase text-xs tracking-wide mb-2">Look of the Day</h3>
          <p className="text-lg font-semibold">Minimalist</p>
          <p className="mt-2">Tried out low-saturation beige today. Feels really calming.</p>
        </div>
      </div>

      {/* Outfit Journal 标题 */}
      <h3 className="uppercase text-sm font-bold tracking-wide mt-8 mb-4">Outfit Journal</h3>

      {/* OutfitCard 网格（你已有 OutfitCard 组件可插入） */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* example */}
        <div>
          <Image src="/outfit1.jpg" alt="outfit1" width={600} height={600} className="rounded-xl" />
          <p className="text-xs mt-1 text-gray-600">4.08.2024</p>
        </div>
        <div>
          <Image src="/outfit2.jpg" alt="outfit2" width={600} height={600} className="rounded-xl" />
          <p className="text-xs mt-1 text-gray-600">4.08.2024</p>
        </div>
      </div>

    </main>
  )
}
