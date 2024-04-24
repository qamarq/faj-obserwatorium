import { Icons } from '@/components/icons'
import React from 'react'
import Image from "next/image"

import PhoneImage from "@/public/assets/images/phone.png"

export default function KontaktPage() {
    return (
        <>
            <section className="w-full min-h-[65dvh] flex items-start bg-white justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto my-20">
                    <div className='flex flex-col space-y-[24px]'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-4xl font-semibold'>Kontakt</h1>
                            <Icons.man />
                        </div>
                        <p className='text-2xl text-balance'>Informacji na temat Obserwatorium udziela wyłącznie koordynator zwiedzania:</p>
                        
                        <ul className='space-y-[12px]'>
                            <li><div className='flex items-center gap-2 text-xl'><Icons.girl /> <p>Magdalena Maszewska</p></div></li>
                            <li><div className='flex items-center gap-2 text-xl'><Icons.phone /> <p>Telefon: +48 603 750 220 (Pn - Pt w godz. 10 - 16)</p></div></li>
                            <li><div className='flex items-center gap-2 text-xl'><Icons.letter /> <p>E-mail: Zwiedanie@astro.umk.pl</p></div></li>
                        </ul>
                    </div>

                    <Image src={PhoneImage} alt={"Phone image"} className='rounded-md aspect-video' />
                </div>
            </section>
        </>
    )
}
