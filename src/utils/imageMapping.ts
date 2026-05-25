import kepala from '@/public/images/anatomy/kepala.webp'
import punggung from '@/public/images/anatomy/punggung.webp'
import lengan from '@/public/images/anatomy/lengan.webp'
import kaki from '@/public/images/anatomy/kaki.webp'
// Combo images
import kepalaDanPunggung from '@/public/images/anatomy/kepaladanpunggung.webp'
import kepalaDanLengan from '@/public/images/anatomy/kepaladanlengan.webp'
import kepalaDanKaki from '@/public/images/anatomy/kepaladankaki.webp'
import lenganDanKaki from '@/public/images/anatomy/lengandankaki.webp'
import kepalaDanPunggungDanLengan from '@/public/images/anatomy/kepaladanpunggungdanlengan.webp'
import kepalaDanPunggungDanKaki from '@/public/images/anatomy/kepaladanpunggungdankaki.webp'
import kepalaDanLenganDanKaki from '@/public/images/anatomy/kepaladanlengandankaki.webp'
import punggungDanLengan from '@/public/images/anatomy/punggungdanlengan.webp'
import punggungDanKaki from '@/public/images/anatomy/punggungdankaki.webp'
import lenganDanPunggungDanKaki from '@/public/images/anatomy/punggungdanlengandankaki.webp'
import kepalaDanPunggungDanLenganDanKaki from '@/public/images/anatomy/full-badan.webp'

export const imageMapping = {
  // Single
  'kepala': kepala,
  'lengan': lengan,
  'punggung': punggung,
  'kaki': kaki,

  // Double
  'kepala-lengan': kepalaDanLengan,
  'kepala-punggung': kepalaDanPunggung,
  'kepala-kaki': kepalaDanKaki,

  'lengan-punggung': punggungDanLengan,

  'punggung-kaki': punggungDanKaki,


  'lengan-kaki': lenganDanKaki,

  // Triple
  'kepala-lengan-punggung': kepalaDanPunggungDanLengan,

  'kepala-lengan-kaki': kepalaDanLenganDanKaki,
  'kepala-punggung-kaki': kepalaDanPunggungDanKaki,
  'lengan-punggung-kaki': lenganDanPunggungDanKaki,

  // Full
  'kepala-lengan-punggung-kaki':
    kepalaDanPunggungDanLenganDanKaki,

}