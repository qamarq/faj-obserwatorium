import { Icons } from '@/components/icons'
import React from 'react'
import Image from "next/image"

import BooksImage from "@/public/assets/images/books.jpg"
import CourtImage from "@/public/assets/images/court.png"
import HammerImage from "@/public/assets/images/hammer.jpg"

export default function RegulaminPage() {
    return (
        <>
            <section className="w-full min-h-[35dvh] flex items-center bg-white justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto my-20">
                    <div className='flex flex-col space-y-[24px]'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-3xl font-semibold'>Regulamin zwiedzania</h1>
                            <Icons.paper />
                        </div>
                        <p className='text-lg'>Na terenie Centrum Astronomii Uniwersytetu Mikołaja Kopernika, którego częścią jest Obserwatorium obowiązują zasady, których każdy uczestnik zobowiązuje się przestrzegać w momencie zatwierdzenia zamówienia zwiedzania grupowego albo zakupu biletu</p>
                        <p className='text-lg'>W przypadku rażącego naruszenia powyższych zasad,<br/> <span className='font-bold text-amber-500'>oprowadzający ma prawo odmówić wykonania usługi bez zwrotu opłaty, a grupa zostać wyproszona z terenu Obserwatorium Astronomicznego.</span></p>
                    </div>

                    <Image src={BooksImage} alt={"Books"} className='rounded-md aspect-video' />
                </div>
            </section>

            <section className="w-full min-h-[35dvh] flex items-center justify-center">
                <div className="flex flex-col container mx-auto my-20">
                    <h1 className='text-3xl font-semibold'>Zasady dotyczące wszystkich zwiedzających</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[32px]'>
                        <ul className='list-decimal list-inside space-y-[16px] text-xl'>
                            <li><span className='font-bold text-amber-500'>Zwiedzanie rozpoczyna i kończy się na parkingu</span>, zwiedzający poruszają się po obserwatorium wyłącznie pod opieką oprowadzającego. Nie ma możliwości samodzielnego poruszania się po terenie obserwatorium.</li>
                            <li>Zwiedzający mogą wchodzić jedynie do budynków i miejsc wskazanych przez oprowadzającego.</li>
                            <li>Na terenie Obserwatorium obowiązuje <span className='font-bold text-amber-500'>zakaz palenia tytoniu</span>.</li>
                            <li>Podczas zwiedzania telefony komórkowego winny być wyłączone albo przełączone w <span className='font-bold text-amber-500'>tryb samolotowy</span>.</li>
                            <li>Obowiązuje <span className='font-bold text-amber-500'>zakaz śmiecenia i wyrzucania odpadków</span> na terenie parku obserwatorium poza przeznaczonymi do tego celu pojemnikami.</li>
                        </ul>

                        <Image src={CourtImage} alt={"Court"} className='rounded-md aspect-video object-cover' />
                    </div>
                </div>
            </section>

            <section className="w-full min-h-[35dvh] flex items-center justify-center bg-white">
                <div className="flex flex-col container mx-auto my-20">
                    <h1 className='text-3xl font-semibold'>Zasady dotyczące rezerwacji grupowych</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[32px]'>
                        <ul className='list-decimal list-inside space-y-[16px] text-xl'>
                            <li>Podmiotem odpowiedzialnym za organizację zwiedzania Obserwatorium Astronomicznego w Piwnicach jest Fundacja Aleksandra Jabłońskiego.</li>
                            <li>Informacja na temat kosztów zwiedzania i warsztatów dla grup zorganizowanych jest dostępna w Cenniku. Koszt usługi jest zależny od czasu zwiedzania, języka, w którym się ono odbywa się oraz liczebności grupy i wybranych zajęć.</li>
                            <li>Szczegółowe informacje można uzyskać telefonicznie u koordynatora zwiedzania pod numerem telefonu +48 603 750 220</li>
                            <li>Rezerwacja terminu zwiedzania grupowego może zostać dokonana wyłącznie przez system rezerwacyjny lub mailowo na adres: zwiedzanie@astro.umk.pl. Nie przyjmujemy rezerwacji telefonicznych.</li>
                            <li>Rezerwacja dokonana za pomocą systemu rezerwacyjnego lub korespondencji mailowej jest wiążąca i w przypadku rezygnacji z usługi &quot;Zwiedzanie obserwatorium&quot; należy to zgłosić telefonicznie lub mailowo (zwiedzanie@astro.umk.pl) najpóźniej 24 godziny przed umówionym terminem. W przeciwnym wypadku usługa zostaje uznana za wykonaną, a płatność za usługę zostanie egzekwowana.</li>
                            <li>Zmiana terminu wycieczki jest możliwa wyłącznie po uzgodnieniu z koordynatorem zwiedzania. W przypadku wcześniejszego albo późniejszego przyjazdu grupy zwiedzających należy skontaktować się telefonicznie z koordynatorem wycieczek. Brak informacji o zmianie godziny przyjazdu może skutkować odmową przyjęcia zwiedzających lub skróceniem czasu wycieczki.</li>
                        </ul>

                        <Image src={HammerImage} alt={"Hammer"} className='rounded-md object-cover' />
                    </div>
                </div>
            </section>
        </>
    )
}
