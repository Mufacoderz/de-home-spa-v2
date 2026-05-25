import { imageMapping } from "@/utils/imageMapping";
import { StaticImageData } from "next/image";

const idToName: Record<number, string> = {
    1: 'kepala',
    2: 'lengan',
    3: 'punggung',
    4: 'kaki',
}

const order = ['kepala', 'lengan', 'punggung', 'kaki']

export const getSelectedImage = (selected: number[], abu: StaticImageData) => {
  if (selected.length === 0) return abu

  const key = selected.map(id => idToName[id])
  .sort((a, b) => order.indexOf(a) - order.indexOf(b))
  .join('-')
  if (key in imageMapping) {
    return imageMapping[key as keyof typeof imageMapping]
  }
  return abu
}