import { Icons } from '@/components/icons'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Logo from '@/public/assets/ministerstwo-logo.png'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export default async function Footer() {
    const payload = await getPayloadHMR({ config })

    const finansowanie: any = await payload.findGlobal({
        slug: 'finansowanie'
    })

    return (
        <footer className='w-full min-h-[30dvh] flex items-center text-white justify-center bg-stars-image bg-center bg-cover'>
            <div className='container mx-4 md:mx-auto mt-4 md:mt-4'>
                <div className='p-5 backdrop-blur-sm rounded-lg bg-gray-400/20 grid grid-cols-1 md:grid-cols-5'>
                    <div className='col-span-2'>
                        <div className='flex items-center w-full'>
                            <Icons.logoLight />

                            <Image src={Logo} alt='Ministersto Nauki i Szkolnictwa Wyższego' width={200} height={61} className='h-[61px] object-cover ml-20' />
                        </div>
                        <div className='mt-6'>
                            <p className='text-sm text-gray-400'>{finansowanie.description}</p>
                            <p className='text-sm mt-1 text-gray-400'>Wartość finansowania: <span className='text-gray-200'>{finansowanie.value}</span></p>
                            <p className='text-sm mt-1 text-gray-400'>Całkowita wartość zadania: <span className='text-gray-200'>{finansowanie.total}</span></p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-md font-semibold'>Szybkie linki</h1>
                        <ul className='mt-2 text-zinc-300 font-[200] space-y-2'>
                            <li><Link href="#">Zwiedzanie</Link></li>
                            <li><Link href="#">Popularyzacja</Link></li>
                            <li><Link href="#">Warsztaty</Link></li>
                            <li><Link href="#">Stypendia</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-md font-semibold'>Kontakt FAJ </h1>
                        <ul className='mt-2 text-zinc-300 font-[200] space-y-2'>
                            <li>tel: +48 575 180 509</li>
                            <li>fax: +48 56 622 53 97</li>
                            <li>kontakt@faj.org.pl</li>
                            <li>ul. Grudziądzka 5/7,<br/>87-100 Toruń</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-md font-semibold'>Kontakt UMK</h1>
                        <ul className='mt-2 text-zinc-300 font-[200] space-y-2'>
                            <li>tel: +48 603 750 220</li>
                            <li>fax: +48 56 654 29 44</li>
                            <li>zwiedzanie@astro.umk.pl</li>
                            <li>ul. Gagarina 11, <br/>87-100 Toruń</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-2 flex items-center justify-between px-5'>
                    <Icons.umkLogo />
                    <div className='text-xs text-gray-400'>Made by <Link href="https://islandhouse.it">Islandhouse</Link> with ❤️ for FAJ</div>
                    <Link href="/pdf/Polityka_prywatności_FAJ.pdf" className='text-sm'>Polityka prywatności</Link>
                </div>
            </div>
        </footer>
    )
}
