"use client"

import { Icons } from '@/components/icons'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

import MoonImage from '@/public/assets/images/moon.jpg'
import ItImage from '@/public/assets/images/it.jpg'
import PicnicImage from '@/public/assets/images/picnic.jpg'
import { cn } from '@nextui-org/react'

export default function ProgramPage() {
    const [isOpenFirst, setIsOpenFirst] = useState(false);
    const [isOpenSecond, setIsOpenSecond] = useState(false);
    const [isOpenThird, setIsOpenThird] = useState(false);

    const [obserwacjeOpen, setObserwacjeOpen] = useState(false);
    const [wykladyOpen, setWykladyOpen] = useState(false);
    const [piknikiOpen, setPiknikiOpen] = useState(false);

    const toggleOpenFirst = () => setIsOpenFirst(!isOpenFirst);
    const toggleOpenSecond = () => setIsOpenSecond(!isOpenSecond);
    const toggleOpenThird = () => setIsOpenThird(!isOpenThird);

    const toggleObserwacjeOpen = () => setObserwacjeOpen(!obserwacjeOpen);
    const toggleWykladyOpen = () => setWykladyOpen(!wykladyOpen);
    const togglePiknikiOpen = () => setPiknikiOpen(!piknikiOpen);
    
    return (
        <>
            <section className="w-full min-h-[35dvh] flex items-center bg-white justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto my-20">
                    <div className='flex flex-col space-y-[24px]'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-3xl font-semibold'>Program</h1>
                            <Icons.man />
                        </div>
                        <p className='text-lg'>Inspirujemy do obserwacji, doświadczania, zadawania pytań i poszukiwania odpowiedzi. Uczeniu się w Koperniku sprzyjają różnorodne przestrzenie edukacyjne. Zachęcamy do zapoznania się z naszym programem, odwiedzania Kopernika (Wystaw i Planetarium) oraz udziału w warsztatach.</p>
                        <p className='text-lg font-[300]'>Jeśli planujesz zorganizować wycieczkę z uczniami, <Link href="https://www.kopernik.org.pl/edukacja#form" className='underline'>zostaw nam kontakt do siebie</Link> - oddzwonimy i pomożemy.</p>
                    </div>

                    <motion.div layout className='flex flex-col space-y-[16px] text-white'>
                        <LayoutGroup>
                            <motion.div layout className='flex items-center justify-center flex-col p-3 bg-stars-image bg-center rounded-lg'>
                                <motion.button layout className='p-3 rounded-lg bg-white/10 flex items-center justify-center w-full cursor-pointer' onClick={toggleOpenFirst}>
                                    <p className='text-lg font-bold'>Dla dzieci przedszkolnych i klas 1-2</p>
                                </motion.button>
                                <AnimatePresence>
                                    {isOpenFirst && (
                                        <motion.div
                                            layout
                                            className='p-3 rounded-lg bg-white/10 flex items-center justify-center flex-col w-full mt-3'
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Umiemy zaprzyjaźnić dzieci z nauką. Oferujemy pasjonującą podróż do zrozumienia otaczającego nas świata. Poznamy wnętrze atomu i odkryjemy w gęstych obłokach rodzące się gwiazdy. Podczas dokonywanych odkryć na warsztatach oraz w naszym laboratorium badamy to czego oko nie widzi.</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                            <motion.div layout className='flex items-center justify-center flex-col p-3 bg-stars-image bg-center rounded-lg'>
                                <motion.button layout className='p-3 rounded-lg bg-white/10 flex items-center justify-center w-full cursor-pointer' onClick={toggleOpenSecond}>
                                    <p className='text-lg font-bold'>Dla szkół podstawowych i klas 3-6</p>
                                </motion.button>
                                <AnimatePresence>
                                    {isOpenSecond && (
                                        <motion.div
                                            layout
                                            className='p-3 rounded-lg bg-white/10 flex items-center justify-center flex-col w-full mt-3 space-y-[10px]'
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Czas zwiedzania: <span className='text-bold'>1 godzina</span></p>
                                            </div>
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Umiemy zaprzyjaźnić dzieci z nauką. Oferujemy pasjonującą podróż do zrozumienia otaczającego nas świata. Poznamy wnętrze atomu i odkryjemy w gęstych obłokach rodzące się gwiazdy. Podczas dokonywanych odkryć na warsztatach oraz w naszym laboratorium badamy to czego oko nie widzi.</p>
                                            </div>
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Zwiedzanie obserwatorium obejmuje spacer z przewodnikiem po terenie obserwatorium astronomicznego, wejście do kopuł teleskopów optycznych oraz podejście pod radioteleskop RT-4.</p>
                                            </div>
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Podczas zwiedzania dzieci poznają największe radoteleskopy w Polsce, a po rozwianiu wszelkich wątpliwości na temat tego, czy przez radioteleskop można słuchać radia i szukać życia na innych planetach, przechodzimy do starszej części obserwatorium, tak zwanej części optycznej. Dzięki jedynemu w swoim rodzaju model Układu Słonecznego, który jako jedyny wykonany jest z zachowaniem skali odległości i wielkości planet. Podczas wizyty w obserwatorium goście odbywają podróż, która pozwala im poznać historię naszego ośrodka i tej romantycznej nauki, jaką jest astronomia. Opowieści astronomów zabierają zwiedzających w niezwykły świat planet i gwiazd, dostępny dla nich właśnie dzięki instrumentom zgromadzonym w ośrodku.</p>
                                            </div>
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Po obserwatorium oprowadzają prawdziwi astronomowie, dostosowując swoją opowieść do wieku i zainteresowań zwiedzających.</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                            <motion.div layout className='flex items-center justify-center flex-col p-3 bg-stars-image bg-center rounded-lg'>
                                <motion.button layout className='p-3 rounded-lg bg-white/10 flex items-center justify-center w-full cursor-pointer' onClick={toggleOpenThird}>
                                    <p className='text-lg font-bold'>Dla szkół srednich i klas 7-8</p>
                                </motion.button>
                                <AnimatePresence>
                                    {isOpenThird && (
                                        <motion.div
                                            layout
                                            className='p-3 rounded-lg bg-white/10 flex items-center justify-center flex-col w-full mt-3 space-y-[10px]'
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Czas zwiedzania: <span className='text-bold'>2 godziny</span></p>
                                            </div>
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Jak i czym astronom obserwuje niebo? Jaki kolor ma Słońce? Co widać na falach radiowych? Jeżeli chcecie poznać odpowiedź na te pytania zapraszamy do Instytutu Astronomii Uniwersytetu Mikołaja Kopernika, a może naukowcy zdradzą jak wygląda warsztat ich codziennej pracy... Zwiedzanie obserwatorium obejmuje spacer z przewodnikiem po terenie obserwatorium astronomicznego, wejście do kopuł teleskopów optycznych oraz podejście pod radioteleskop RT-4.</p>
                                            </div>
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Podczas zwiedzania dzieci poznają największe radoteleskopy w Polsce, a po rozwianiu wszelkich wątpliwości na temat tego, czy przez radioteleskop można słuchać radia i szukać życia na innych planetach, przechodzimy do starszej części obserwatorium, tak zwanej części optycznej. Dzięki jedynemu w swoim rodzaju model Układu Słonecznego, który jako jedyny wykonany jest z zachowaniem skali odległości i wielkości planet. Podczas wizyty w obserwatorium goście odbywają podróż, która pozwala im poznać historię naszego ośrodka i tej romantycznej nauki, jaką jest astronomia. Opowieści astronomów zabierają zwiedzających w niezwykły świat planet i gwiazd, dostępny dla nich właśnie dzięki instrumentom zgromadzonym w ośrodku. Ostatnim etapem zwiedzania jest kopuła, która skrywa największy w Polsce teleskop optyczny, o średnicy lustra 90 cm.</p>
                                            </div>
                                            <div className='flex'>
                                                <Icons.arrowRight size={20} className='min-w-[25px]' />
                                                <p className='text-lg'>Po obserwatorium oprowadzają prawdziwi astronomowie, dostosowując swoją opowieść do wieku i zainteresowań zwiedzających.</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </LayoutGroup>
                    </motion.div>
                </div>
            </section>

            <section className="w-full min-h-[35dvh] flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 container mx-auto my-20">
                    <LayoutGroup>
                        <motion.div layout className='bg-white p-5 rounded-lg cursor-pointer h-min'>
                            <motion.img layout src={MoonImage.src} alt='Moon' className='rounded-lg aspect-video object-cover w-full' />
                            <motion.button layout className='flex items-center justify-center gap-2 mt-4 cursor-pointer w-full' onClick={toggleObserwacjeOpen}>
                                <p className='text-3xl font-semibold'>Obserwacje</p>
                                <Icons.arrowRight size={30} className={cn('transition-all', { 'rotate-0': !obserwacjeOpen, 'rotate-90': obserwacjeOpen })} />
                            </motion.button>
                            
                            <AnimatePresence>
                                {obserwacjeOpen && (
                                    <motion.div
                                        layout
                                        className='mt-3'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <p className='text-lg'>Obserwacje wieczornego nieba to obserwacje z instruktorem na teleskopach warsztatowych (nie w kopułach), odbywające się zwykle przy budynku Katedry Radioastronomii. Obserwacje odbywają się w określonych terminach pod warunkiem dobrej pogody obserwacyjnej.</p>
                                    </motion.div>   
                                )}
                            </AnimatePresence>
                        </motion.div>
                        <motion.div layout className='bg-white p-5 rounded-lg cursor-pointer h-min'>
                            <motion.img layout src={ItImage.src} alt='it image' className='rounded-lg aspect-video object-cover w-full' />
                            <motion.button layout className='flex items-center justify-center gap-2 mt-4 cursor-pointer w-full' onClick={toggleWykladyOpen}>
                                <p className='text-3xl font-semibold'>Wykłady</p>
                                <Icons.arrowRight size={30} className={cn('transition-all', { 'rotate-0': !wykladyOpen, 'rotate-90': wykladyOpen })} />
                            </motion.button>
                            
                            <AnimatePresence>
                                {wykladyOpen && (
                                    <motion.div
                                        layout
                                        className='mt-3'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <p className='text-lg'>Oprócz wykładów astronomicznych będzie okazja zwiedzić Obserwatorium z przewodnikiem. Od 21:00 do północy będzie można obserwować niebo, na którym w tym czasie widać wzmożoną aktywność Perseidów. Prosimy o zabranie ze sobą koców, leżaków i prowiantu. Jest możliwosć zakupu ciepłych napojów.</p>
                                    </motion.div>   
                                )}
                            </AnimatePresence>
                        </motion.div>
                        <motion.div layout className='bg-white p-5 rounded-lg cursor-pointer h-min'>
                            <motion.img layout src={PicnicImage.src} alt='picnic image' className='rounded-lg aspect-video object-cover w-full' />
                            <motion.button layout className='flex items-center justify-center gap-2 mt-4 cursor-pointer w-full' onClick={togglePiknikiOpen}>
                                <p className='text-3xl font-semibold'>Pikniki</p>
                                <Icons.arrowRight size={30} className={cn('transition-all', { 'rotate-0': !piknikiOpen, 'rotate-90': piknikiOpen })} />
                            </motion.button>
                            
                            <AnimatePresence>
                                {piknikiOpen && (
                                    <motion.div
                                        layout
                                        className='mt-3'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <p className='text-lg'>Organizujemy wykłady i warsztaty astronomicznie i fizyczne. Dedykowane są dla grup zorganizowanych, dla osób indywidualnych odbywają się wyłącznie w okresie wakacyjnych, w ustalonych terminach. Prowadzone są przez edukatorów Fundacji Aleksandra Jabłońskiego.</p>
                                    </motion.div>   
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </LayoutGroup>
                </div>
            </section>
        </>
    )
}
