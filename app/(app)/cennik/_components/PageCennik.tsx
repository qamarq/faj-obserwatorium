"use client"

import React, { useState } from 'react'
import { Icons } from '@/components/icons'
import { cn } from '@nextui-org/react'
import Link from 'next/link'

interface Pricing {
    halfPriceTicket: { list: { text: string }[] },
    freeTicket: { list: { text: string }[] },
    individualTicket: {
        normalTicket: string,
        halfPriceTicket: string,
        eveningForAdults: string,
        yearSubscription: string,
        planetariumMovies2DNormal: string,
        planetariumMovies2DHalfPrice: string,
        special: string,
        shows: string,
        specialOffers: { text: string }[],
        hardEconomicalSituation: { text: string }[]
    },
    groupTicket: {
        exhibitionsWeekdays: string,
        exhibitionsHolidays: string,
        classesInLaboratories: string,
        classesInMajsternia: string,
        planetariumMovies: string,
        planetariumMovies2DFilmyZNiebaNormal: string,
        planetariumMovies2DFilmyZNiebaHalfPrice: string,
        planetariumSpecialShows: string,
        planetariumConcerts: string
    },
}

export default function PageCennik({ pricing }: { pricing: Pricing }) {
    const [selected, setSelected] = useState<'individual' | 'group'>('individual')

    return (
        <section className="w-full min-h-[15dvh] flex items-center text-white justify-center bg-stars-image bg-center bg-cover bg-fixed">
            <div className="container mx-auto">
                <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-6">
                    <div className='flex items-center gap-2 mb-[24px]'>
                        <h1 className="text-4xl font-default">Cennik</h1>
                        <Icons.coin />
                    </div>

                    <p className="font-[200] text-lg leading-relaxed mb-[32px]">W ramach biletu na Wystawy możesz obejrzeć wszystkie wystawy stałe oraz aktualną wystawę czasową. Wystawa Bzzz! dostępna jest tylko dla dzieci poniżej 6. roku życia – wyłącznie pod opieką dorosłej osoby. Aby skorzystać z oferty Planetarium, należy kupić oddzielny bilet.</p>
                    <p className="font-[200] text-lg leading-relaxed mb-[32px]">Na Wystawy można wejść na 30 minut przed i 60 minut po wybranej godzinie wizyty, <Link href="https://www.kopernik.org.pl/wizyta/godziny-otwarcia" className='underline'>w ramach godzin otwarcia Wystaw</Link>. W Planetarium po rozpoczęciu seansu nie ma możliwości wejścia do sali projekcyjnej, najlepiej być 10 minut wcześniej.</p>

                    <div className='grid grid-cols-2 gap-5'>
                        <button className={cn('w-full h-[80px] rounded-lg bg-white/10 flex items-center justify-center cursor-pointer', { '!bg-amber-500': selected === "individual" })} onClick={() => setSelected("individual")}>
                            <p className='text-xl'>Bilety indywidualne</p>
                        </button>
                        <button className={cn('w-full h-[80px] rounded-lg bg-white/10 flex items-center justify-center cursor-pointer', { '!bg-amber-500': selected === "group" })} onClick={() => setSelected("group")}>
                            <p className='text-xl'>Bilety grupowe</p>
                        </button>
                    </div>
                </div>

                {selected === "individual" ? (
                    <>
                        <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                            <div className='flex items-center gap-2 mb-[24px]'>
                                <h1 className="text-4xl font-default">Wystawy</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet normalny</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.individualTicket.normalTicket}</p>
                                </div>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet ulgowy</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.individualTicket.halfPriceTicket}</p>
                                </div>
                            </div>
                            <p className='text-md text-gray-500 mt-3'>* ceny biletów w święta, weekendy oraz wakacje</p>

                            <div className='flex items-center gap-4 mt-6'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Wieczory dla dorosłych</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet ulgowy / normalny</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.individualTicket.eveningForAdults}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 mt-6'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Abonament roczny</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Właściciel + osoba towarzysząca</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.individualTicket.yearSubscription}</p>
                                </div>
                            </div>
                        </div> 

                        <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                            <div className='flex items-center gap-2 mb-[24px]'>
                                <h1 className="text-4xl font-default">Planetarium</h1>
                            </div>

                            <div className='flex items-center gap-4 mt-6'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Filmy 2D, Prosto z nieba</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet normalny</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.individualTicket.planetariumMovies2DNormal}</p>
                                </div>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet ulgowy</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.individualTicket.planetariumMovies2DHalfPrice}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 mt-6'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Pokazy specjalne</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet ulgowy / normalny</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.individualTicket.special}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 mt-6'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Koncerty</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet ulgowy / normalny</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.individualTicket.shows}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                            <div className='flex items-center gap-2 mb-[24px]'>
                                <h1 className="text-4xl font-default">Oferta specjalna</h1>
                            </div>

                            {pricing.individualTicket.specialOffers.map((item, index) => (
                                <div className='flex items-center gap-4 mt-5' key={`specialOfferIndividual-${index}`}>
                                    <Icons.yellowArrowRight />
                                    <h1 className='text-3xl'>{item.text}</h1>
                                </div>
                            ))}
                        </div>

                        <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                            <div className='flex items-center gap-2 mb-[24px]'>
                                <h1 className="text-4xl font-default">Wejscie dla osób w trudnej sytuacji ekonomicnej</h1>
                            </div>

                            {pricing.individualTicket.hardEconomicalSituation.map((item, index) => (
                                <div className='flex items-center gap-4 mt-5' key={`hardEconomical-${index}`}>
                                    <Icons.yellowArrowRight />
                                    <h1 className='text-3xl'>{item.text}</h1>
                                </div>
                            ))}
                        </div>
                    </>  
                ) : (
                    <>
                        <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                            <div className='flex items-center gap-2 mb-[24px]'>
                                <h1 className="text-4xl font-default">Wystawy</h1>
                            </div>

                            <p className='text-xl font-[200]'>Bilet dla grup przysługuje każdej osobie w co najmniej 10-osobowej grupie zorganizowanej oraz opiekunowi grupy 
                            (min. 10 + 1). Na każdych 10 osób przypada jeden bilet gratis dla opiekuna. Jednorazowo można zarezerwować 
                            od 11 do 77 biletów.</p>

                            <div className='flex items-center gap-4 mt-5'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Bilet dla grup</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Dni powszednie</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.groupTicket.exhibitionsWeekdays}</p>
                                </div>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Święta, weekendy, wakacje</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold'>{pricing.groupTicket.exhibitionsHolidays}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                            <div className='flex items-center gap-2 mb-[24px]'>
                                <h1 className="text-4xl font-default">Zajęcia dla grup</h1>
                            </div>

                            <p className='text-xl font-[200]'>Bilet do laboratoriów i na zajęcia w Majsterni można kupić tylko razem z biletem wstępu do Centrum Nauki Kopernik. Cena biletu nie zależy od liczby osób w grupie.<br/>
                            Więcej informacje o <Link href="https://www.kopernik.org.pl/wystawy/laboratoria-dla-grup" className='underline'>zajęciach w laboratoriach</Link> i <Link href="https://www.kopernik.org.pl/wystawy/majsternia-dla-grup-szkolnych" className='underline'>zajęciach w Majsterni</Link>.</p>

                            <div className='flex items-center gap-4 mt-5'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Bilet dla grup</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Zajęcia w laboratoriach</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold text-balance max-w-[300px]'>{pricing.groupTicket.classesInLaboratories}</p>
                                </div>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Zajęcia w Majsterni</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold text-balance max-w-[300px]'>{pricing.groupTicket.classesInMajsternia}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                            <div className='flex items-center gap-2 mb-[24px]'>
                                <h1 className="text-4xl font-default">Planetarium</h1>
                            </div>

                            <p className='text-xl font-[200]'><Link href="https://www.kopernik.org.pl/wizyta/ceny-biletow#pakiet">Bilet łączony Wystawy + Planetarium</Link><br/>
                            Bilet dla grup zorganizowanych przysługuje każdej osobie w co najmniej 10-osobowej grupie zorganizowanej oraz opiekunowi grupy (min. 10 + 1). Na każdych 10 osób przypada jeden bilet gratis dla opiekuna. Jednorazowo można zarezerwować
                            od 11 do 77 biletów.</p>

                            <div className='flex items-center gap-4 mt-5'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Bilet dla grup</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Seanse 2D</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold text-balance max-w-[300px]'>{pricing.groupTicket.planetariumMovies}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                            <div className='flex items-center gap-2 mb-[24px]'>
                                <h1 className="text-4xl font-default">Planetarium</h1>
                            </div>

                            <div className='flex items-center gap-4 mt-5'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Filmy 2D, Prosto z nieba</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet normalny</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold text-balance max-w-[300px]'>{pricing.groupTicket.planetariumMovies2DFilmyZNiebaNormal}</p>
                                </div>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet ulgowy</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold text-balance max-w-[300px]'>{pricing.groupTicket.planetariumMovies2DFilmyZNiebaHalfPrice}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 mt-5'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Pokazy specjalne</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet ulgowy / normalny</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold text-balance max-w-[300px]'>{pricing.groupTicket.planetariumSpecialShows}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 mt-5'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Koncerty</h1>
                            </div>

                            <div className='grid grid-cols-3 gap-[23px] mt-4 text-center'>
                                <div className='col-span-2 flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <Icons.arrowRight size={20} />
                                    <p className='text-xl ml-3 font-semibold'>Bilet ulgowy / normalny</p>
                                </div>
                                <div className='flex items-center justify-center h-[120px] rounded-lg bg-white/5'>
                                    <p className='text-xl font-semibold text-balance max-w-[300px]'>{pricing.groupTicket.planetariumConcerts}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                    <div className='flex items-center gap-2 mb-[24px]'>
                        <h1 className="text-4xl font-default">Bilety ulgowe przysługują</h1>
                    </div>

                    <ul className='list-decimal list-inside space-y-[15px]'>
                        {pricing.halfPriceTicket.list.map((item, index) => (
                            <li className='text-xl' key={`halfPrice-${index}`}>{item.text}</li>
                        ))}
                    </ul>
                </div>

                <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-12">
                    <div className='flex items-center gap-2 mb-[24px]'>
                        <h1 className="text-4xl font-default">Wstęp bezpłatny przysługuje:</h1>
                    </div>

                    <ul className='list-decimal list-inside space-y-[15px]'>
                        {pricing.freeTicket.list.map((item, index) => (
                            <li className='text-xl' key={`freeTicket-${index}`}>{item.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
