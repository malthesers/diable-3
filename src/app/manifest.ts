import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Diable III',
    short_name: 'Diable III',
    description: 'Diablo III Wordle | Guess the item by its properties!',
    start_url: '/',
    display: 'standalone',
    display_override: ["window-controls-overlay"],
    background_color: '#111218',
    theme_color: '#111218',
    lang: 'en',
    categories: ["entertainment", "games"],
    icons: [
      {
        src: '/icon1.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '/icon2.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/icon3.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon4.png',
        sizes: '512x512',
        type: 'image/png'
      },
    ],
    screenshots: [
      {
        src: "/screenshots/mobile1.jpg",
        type: "image/png",
        sizes: "1170x1900",
      },
      {
        src: "/screenshots/mobile2.jpg",
        type: "image/png",
        sizes: "1170x1900",
      },
      {
        src: "/screenshots/mobile3.jpg",
        type: "image/png",
        sizes: "1170x1900",
      },
      {
        src: "/screenshots/desktop1.jpg",
        type: "image/png",
        sizes: "1074x620",
      },
      {
        src: "/screenshots/desktop2.jpg",
        type: "image/png",
        sizes: "1074x620",
      },
      {
        src: "/screenshots/desktop3.jpg",
        type: "image/png",
        sizes: "1074x620",
      }
    ]
  }
}