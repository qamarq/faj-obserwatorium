import { Icons } from '@/components/icons'
import Link from 'next/link'
import React from 'react'

export default function FAQPage() {
    return (
        <>
            <section className="w-full min-h-[35dvh] flex items-center bg-white justify-center">
                <div className="container mx-auto my-20 space-y-[32px]">
                    <div className='flex items-center gap-2'>
                        <h1 className='text-4xl font-semibold'>Najczęściej zadawane pytania</h1>
                        <Icons.man />
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>1. Na czym polega zwiedzanie Obserwatorium?</h1>
                        </div>
                        <div className='p-7 bg-amber-500 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Zwiedzanie Obserwatorium podzielone jest na część optyczną (wizyta w kopułach teleskopów optycznych) i radioastronomiczną (podejście pod radioteleskopy RT-3 i RT-4). </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>2. Czy jest zwiedzanie dla osób indywidualnych?</h1>
                        </div>
                        <div className='p-7 bg-gray-200 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-black font-semibold text-xl leading-9'>Tak, jednak ze względu na naukowo-badawczy charakter jednostki jest to możliwe jedynie w wyznaczonych terminach przez organizatora zwiedzania.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>3. Ile czasu trwa zwiedzanie Obserwatorium?</h1>
                        </div>
                        <div className='p-7 bg-gray-600 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Zwiedzanie biletowane dla osób indywidualnym trwa nominalnie godzinę (60 minut) i odbywa się w wersji skróconej (45 minut).</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>4. Gdzie harmonogram dla osób indywidualnych?</h1>
                        </div>
                        <div className='p-7 bg-amber-500 flex items-start flex-col justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Zwiedzanie biletowane dla osób indywidualnych odbywa się poza sezonem turystycznym minimum raz w miesiącu, zwykle w drugą lub trzecią sobotę miesiąca.</p>
                            <Link href="#" className='text-white font-bold mt-3 text-xl'>HARMONOGRAM ZWIEDZANIA</Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>5. Ile kosztują bilety wstępu?</h1>
                        </div>
                        <div className='p-7 bg-gray-200 flex items-start justify-center flex-col text-left rounded-lg h-full'>
                            <p className='text-black font-semibold text-xl leading-9'>Cennę biletów wstępu na indywidualne zwiedzanie biletowane możesz sprawdzić w poniższym linku:</p>
                            <Link href="#" className='text-black font-bold mt-3 text-xl'>CENNIK</Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>6. Czy rezerwacja biletów jest obowiązkowa?</h1>
                        </div>
                        <div className='p-7 bg-gray-600 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Tak, na zwiedzanie indywidualne obowiązuje rezerwacja biletów. Należy wysłać SMS z imieniem i nazwiskiem rezerwującego oraz liczbą biletów na numer koordynatora +48 603 750 220.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>7. Co robić gdy zapomniałem zarezerwować bilet?</h1>
                        </div>
                        <div className='p-7 bg-amber-500 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Wystarczy przyjechać o wyznaczonej godzinie do Obserwatorium w danym terminie (liczba osób oprowadzanych przez jednego przewodnika nie powinna przekroczyć 50 osób).</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>8. Spóźniłem się na wyznaczoną godzinę? Co robić?</h1>
                        </div>
                        <div className='p-7 bg-gray-200 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-black font-semibold text-xl leading-9'>Niestety nie zmożesz wziąć udział w zwiedzaniu grupowym, ponieważ brama wjazdowa do Obserwatorium zostaje zamknięta i dołączenie nie jest możliwe.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>9. Czy można obserwować gwiazdy?</h1>
                        </div>
                        <div className='p-7 bg-gray-600 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>W ogólności tak, ale obserwacje nocnego nieba nie są obowiązkowym elementem zwiedzania Obserwatorium. Krótkie obserwacje nieba odbywają się wyłącznie w określonych warunkach.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>10. Czy mogę wejść z dziećmi i zostawić wózek?</h1>
                        </div>
                        <div className='p-7 bg-amber-500 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Tak, większość zwiedzania odbywa się na płaskim terenie na zewnątrz, więc nie ma więc potrzeby pozostawiania wózka dziecięcego w innym miejscu.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>11. Czy zwiedzenie może odbyć się w innym języku?</h1>
                        </div>
                        <div className='p-7 bg-gray-200 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-black font-semibold text-xl leading-9'>Językiem oprowadzania zawsze jest język polski. W innych językach (angielski, rosyjski, z tłumaczem: francuski, niemiecki) oprowadzanie jest możliwe w wersji zwiedzania grupowego.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>12. Czy Obserwatorium posiada własny parking?</h1>
                        </div>
                        <div className='p-7 bg-gray-600 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Tak, znajduje się on tuż za główną bramą wjazdową i jest jednocześnie miejscem zbiórki zwiedzających, sprzedaży biletów oraz rozpoczęcia i zakończenia zwiedzania.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>13. Jak dotrzeć do Obserwatorium z Torunia?</h1>
                        </div>
                        <div className='p-7 bg-amber-500 flex items-start flex-col justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Obserwatorium Astronomiczne znajduje się poza Toruniem, w miejscowości Piwnice. Aktualny rozkład jazdy autobusów ArrivaBus można znaleźć tutaj: </p>
                            <Link href="https://www.arrivabus.pl/" className='text-white font-bold mt-3 text-xl'>https://www.arrivabus.pl/</Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>14. Czy w Obserwatorium znajduje się kawiarnia?</h1>
                        </div>
                        <div className='p-7 bg-gray-200 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-black font-semibold text-xl leading-9'>W Obserwatorium nie ma kawiarni. Zwiedzający mogą skorzystać jedynie z automatu z drobnymi przekąskami i pamiątkami.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>15. Są dostosowania dla osób niepełnosprawnych?</h1>
                        </div>
                        <div className='p-7 bg-gray-600 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>W większości przypadków tak, jedynie wejście do kopuł teleskopów optycznych odbywa się wąskimi schodami, które nie są przystosowane dla osób niepełnosprawnych ruchowo.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>16. Czy w Obserwatorium można robić zdjęcia?</h1>
                        </div>
                        <div className='p-7 bg-amber-500 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Tak, pod warunkiem nienaruszania wizerunku innych osób i wyłącznie na prywatny użytek. Profesjonalne sesje fotograficzne  należy uzgadniać wcześniej z Dyrekcją Centrum Astronomii.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>17. Czy w Obserwatorium można kupić pamiątki?</h1>
                        </div>
                        <div className='p-7 bg-gray-200 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-black font-semibold text-xl leading-9'>Tak, na terenie Obserwatorium znajduje się automat samosprzedający z pamiątkami i drobnymi przekąskami, które można z łatwością kupić.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[170px]'>
                        <div className='flex items-center justify-start text-left'>
                            <h1 className='text-2xl font-semibold'>18. Czy na terenie Obserwatorium jest szatnia?</h1>
                        </div>
                        <div className='p-7 bg-gray-600 flex items-center justify-center text-left rounded-lg h-full'>
                            <p className='text-white font-semibold text-xl leading-9'>Ze względu na fakt, że większość czasu zwiedzania Obserwatorium odbywa się na zewnątrz, w Obserwatorium nie ma szatni.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
