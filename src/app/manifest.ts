import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Diable III',
    short_name: 'Diable III',
    description: 'Diablo III Wordlde | Guess the item by its properties!',
    start_url: '/',
    display: 'standalone',
    background_color: '#111218',
    theme_color: '#111218',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}