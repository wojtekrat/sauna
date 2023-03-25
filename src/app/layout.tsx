import './globals.css'
import Hero from '@/components/hero/Hero'
import Footer from '@/components/footer/Footer'
import { client, urlFor } from '@/lib/client'
import Image from 'next/image'

export const metadata = {
  title: 'Sauna',
  description: 'Wszystko o saunach',
}
export interface BackgroundImages {
  _id: string;
  image: string;
}

async function getBackground(): Promise<BackgroundImages[]> {
  const res: BackgroundImages[] = await client.fetch('*[_type == "background"]');
  return res;
}

export default async function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  const backgroundImages: BackgroundImages[] = await getBackground();
  
  return (
    <html lang="en">
      <body>
        <header>
          <Hero background={backgroundImages}/>
        </header>  
        {children}
        <Footer/>
      </body>
    </html>
  )
}
