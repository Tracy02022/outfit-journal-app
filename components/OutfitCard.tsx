// components/OutfitCard.tsx
import Image from 'next/image'

interface OutfitCardProps {
  date: string
  image: string
  tags?: string[]
}

export const OutfitCard = ({ date, image, tags = [] }: OutfitCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Image
        src={image}
        alt="Outfit"
        width={500}
        height={500}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{date}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-[#f3eee8] text-[#322c28] px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
