import { Icons } from '@/components/icons'
import React from 'react'
import Form from './_components/Form'
import Form2 from './_components/Form2'

export default function page() {
    return (
        <>
            <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 container mx-auto my-[60px]">
                <div className='space-y-[20px]'>
                    <h1 className='text-3xl font-bold text-zinc-800'>Rezerwacja zwiedzania</h1>
                    <p className='text-xl'>Rezerwacje dokonywane za pomocą poniższego formularza <br/><span className='font-bold text-amber-500'>nie są akceptowane automatycznie</span>.</p>
                    <p className='text-xl'>Mail z potwierdzeniem rezerwacji zostaje wysłany w momecie akceptacji usługi przez naszego pracownika, co może zająć do kilku godzin od momentu złożenia rezerwacji. </p>
                    <p className='text-xl'>W przypadku, kiedy grupa się nie pojawi, a rezerwacja nie została anulowana do 24h przed umówioną wizytą, zostanie wystawiona faktura (na dane podane przy rezerwacji).</p>
                    <p className='text-xl'>Rezerwacje składane w po godzinie 15:00 będą akceptowane następnego dnia.</p>
                </div>
                <div className='space-y-[24px]'>
                    <h1 className='text-3xl font-bold text-zinc-800'>Rezygnacja ze zwiedzania</h1>
                    <p className='text-xl'>W razie rezygnacji ze zwiedzania, konieczne jest aby anulować rezerwację do 24h przed umówioną wizytą.</p>
                    <div className='w-full min-h-[15dvh] flex items-center text-white justify-center bg-stars-image bg-center bg-cover rounded-md'>
                        <div className='p-5 backdrop-blur-sm rounded-lg bg-gray-400/20 w-full m-10'>
                            <h1 className='text-xl font-semibold'>Informacja na temat Obserwatorium</h1>
                            <hr className='my-3' />
                            <div className='flex items-center gap-2 mt-3'>
                                <Icons.girl />
                                <p className='font-[200]'>Magdalena Marzewska</p>
                            </div>
                            <div className='flex items-center gap-2 mt-[12px]'>
                                <Icons.phone />
                                <p className='font-[200]'>Telefon: +48 603 750 220</p>
                            </div>
                            <div className='flex items-center gap-2 mt-[12px]'>
                                <Icons.watch />
                                <p className='font-[200]'>Godziny pracy: poniedziałek - piątek w godz. 10-13 </p>
                            </div>
                            <div className='flex items-center gap-2 mt-[12px]'>
                                <Icons.letter />
                                <p className='font-[200]'>E-mail: zwiedzanie@astro.umk.pl</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Form /> */}
            <Form2 />
        </>
    )
}
