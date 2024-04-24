import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image"

import MapaIcon from "@/public/assets/icons/mapa.png"
import MapaImage from "@/public/assets/images/mapa.jpg"
import ZwiedzanieIcon from "@/public/assets/icons/zwiedzanie.png"
import ZwiedzanieImage from "@/public/assets/images/zwiedzanie.jpg"
import WarsztatyIcon from "@/public/assets/icons/warsztaty.png"
import WarsztatyImage from "@/public/assets/images/warsztaty.jpg"
import WykladyIcon from "@/public/assets/icons/wyklady.png"
import WykladyImage from "@/public/assets/images/wyklady.jpg"
import ProjektyIcon from "@/public/assets/icons/projekty.png"
import ProjektyImage from "@/public/assets/images/projekty.jpg"
import CennikIcon from "@/public/assets/icons/cennik.png"
import CennikImage from "@/public/assets/images/cennik.jpg"

import MapaNavigationImage from "@/public/assets/images/mapa.png"

export default function Home() {
    return (
        <>
            <section className="w-full min-h-[95dvh] flex items-center text-white justify-center bg-stars-image bg-center bg-cover">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
                    <div className="p-5 backdrop-blur-sm rounded-lg bg-gray-400/20">
                        <h1 className="text-3xl font-default">O Obserwatorium</h1>

                        <div className="mt-6 flex gap-3">
                            <Icons.telescope />
                            
                            <p className="font-[200] text-lg leading-relaxed">Obserwatorium astronomiczne, będące częścią 
                            <Link className="underline mx-1" href="https://astro.umk.pl/">Instytutu Astronomii</Link> 
                            Uniwersytetu Mikołaja Kopernika w Toruniu, mieści się we wsi Piwnice, 14 km od centrum piernikowego miasta.</p>
                        </div>
                        <div className="mt-4 flex gap-3">
                            <Icons.tree />
                            
                            <p className="font-[200] text-lg leading-relaxed">Założyciele zadbali, aby teren obserwatorium obsadzić różnorodną roślinnością, dzięki czemu dzisiaj możemy cieszyć się uroczym parkiem, w którym ukryte są pawilony teleskopów optycznych. Odwiedzający mają unikalną szansę zwiedzić największy tego typu ośrodek w Polsce, który może pochwalić się niesamowitą historią i wieloma instrumentami.</p>
                        </div>
                        <div className="mt-4 flex gap-3">
                            <Icons.antenna />
                            
                            <p className="font-[200] text-lg leading-relaxed">Obserwatorium składa się z części optycznej oraz części radiowej. W pierwszej z nich znajdziemy m.in. historyczny, niedawno odrestaurowany, astrograf Drapera oraz największy w Polsce teleskop optyczny o średnicy lustra 90 cm. Stoi przy nim oryginalny, nieużywany już do współczesnych badań, panel sterowania, który zachował się od lat 50-tych. Część radiowa obserwatorium to przede wszystkim majestatyczny, największy w Polsce radioteleskop RT-4 Kopernik o średnicy czaszy 32 m oraz mniejszy radioteleskop RT-3 o średnicy czaszy 15 m.</p>
                        </div>
                        <div className="mt-4 flex gap-3">
                            <Icons.student />
                            
                            <p className="font-[200] text-lg leading-relaxed">Podczas wizyty w naszym obserwatorium goście, dzięki naszym przewodnikom - astronomom, odbywają podróż, która pozwala im poznać historię naszego ośrodka i niezwykłej nauki, jaką jest astronomia.</p>
                        </div>
                    </div>
                    <div className="p-5 grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="backdrop-blur-sm rounded-lg bg-gray-400/20 p-2 flex items-center text-center flex-col justify-center relative">
                            <div className="rounded-full absolute left-4 border border-zinc-600 top-[-10px] w-[35px] aspect-square bg-zinc-800 flex items-center justify-center"><span>1</span></div>
                            <Image src={MapaIcon} alt={""} className="w-[50px] aspect-square" />
                            <h1 className="mt-2 text-lg font-medium">MAPA</h1>
                            <p className="text-balanced font-[200] text-md mt-2">Interaktywne narzędzie, które poprowadzi Cię przez fascynujące miejsca.</p>
                            <Image src={MapaImage} alt={""} className="w-full aspect-video rounded-md object-cover mt-4" />
                        </div>
                        <div className="backdrop-blur-sm rounded-lg bg-gray-400/20 p-2 flex items-center text-center flex-col justify-center relative">
                            <div className="rounded-full absolute left-4 border border-zinc-600 top-[-10px] w-[35px] aspect-square bg-zinc-800 flex items-center justify-center"><span>2</span></div>
                            <Image src={ZwiedzanieIcon} alt={""} className="w-[50px] aspect-square" />
                            <h1 className="mt-2 text-lg font-medium">ZWIEDZANIE</h1>
                            <p className="text-balanced font-[200] text-md mt-2">Odkrywaj, eksploruj, ucz się - interesujący świat pełen przygód czeka na Ciebie.</p>
                            <Image src={ZwiedzanieImage} alt={""} className="w-full aspect-video rounded-md object-cover mt-4" />
                        </div>
                        <div className="backdrop-blur-sm rounded-lg bg-gray-400/20 p-2 flex items-center text-center flex-col justify-center relative">
                            <div className="rounded-full absolute left-4 border border-zinc-600 top-[-10px] w-[35px] aspect-square bg-zinc-800 flex items-center justify-center"><span>3</span></div>
                            <Image src={WarsztatyIcon} alt={""} className="w-[50px] aspect-square" />
                            <h1 className="mt-2 text-lg font-medium">WARSZTATY</h1>
                            <p className="text-balanced font-[200] text-md mt-2">Warsztaty tworzą nowe możliwości i twoje użyteczne umiejętności.</p>
                            <Image src={WarsztatyImage} alt={""} className="w-full aspect-video rounded-md object-cover mt-4" />
                        </div>
                        <div className="backdrop-blur-sm rounded-lg bg-gray-400/20 p-2 flex items-center text-center flex-col justify-center relative">
                            <div className="rounded-full absolute left-4 border border-zinc-600 top-[-10px] w-[35px] aspect-square bg-zinc-800 flex items-center justify-center"><span>4</span></div>
                            <Image src={WykladyIcon} alt={""} className="w-[50px] aspect-square" />
                            <h1 className="mt-2 text-lg font-medium">WYKŁADY</h1>
                            <p className="text-balanced font-[200] text-md mt-2">Odkrywaj innowację i zdobywaj wiedzę: Przyjdź do nas na wykłady.</p>
                            <Image src={WykladyImage} alt={""} className="w-full aspect-video rounded-md object-cover mt-4" />
                        </div>
                        <div className="backdrop-blur-sm rounded-lg bg-gray-400/20 p-2 flex items-center text-center flex-col justify-center relative">
                            <div className="rounded-full absolute left-4 border border-zinc-600 top-[-10px] w-[35px] aspect-square bg-zinc-800 flex items-center justify-center"><span>5</span></div>
                            <Image src={ProjektyIcon} alt={""} className="w-[50px] aspect-square" />
                            <h1 className="mt-2 text-lg font-medium">PROJEKTY</h1>
                            <p className="text-balanced font-[200] text-md mt-2">Kreatywność, rozwój, realizacja: Projekty przekształcają wizje w działania i sukcesy.</p>
                            <Image src={ProjektyImage} alt={""} className="w-full aspect-video rounded-md object-cover mt-4" />
                        </div>
                        <div className="backdrop-blur-sm rounded-lg bg-gray-400/20 p-2 flex items-center text-center flex-col justify-center relative">
                            <div className="rounded-full absolute left-4 border border-zinc-600 top-[-10px] w-[35px] aspect-square bg-zinc-800 flex items-center justify-center"><span>6</span></div>
                            <Image src={CennikIcon} alt={""} className="w-[50px] aspect-square" />
                            <h1 className="mt-2 text-lg font-medium">CENNIK</h1>
                            <p className="text-balanced font-[200] text-md mt-2">Cena usług i oferty: nasz cennik zapewnia transparentność i wybór.</p>
                            <Image src={CennikImage} alt={""} className="w-full aspect-video rounded-md object-cover mt-4" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-8 px-4 md:px-0">
                <div className="flex items-center gap-2 mt-6">
                    <h1 className="text-2xl font-bold text-zinc-800">Dojazd do Obserwatorium</h1>
                    <Icons.car />
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 list-decimal list-inside">
                    <li className="text-lg">Transport publiczny: Można skorzystać z autobusu lub tramwaju, które mogą zawieźć do najbliższego punktu przesiadkowego w okolicy obserwatorium. Warto sprawdzić rozkłady jazdy na stronie lokalnego przewoźnika.</li>
                    <li className="text-lg">Samochód: Trasa może obejmować ulice prowadzące w kierunku południowo-zachodnim od centrum. Warto skorzystać z nawigacji lub aplikacji mapowych, wpisując adres obserwatorium, aby uzyskać optymalną trasę.</li>
                </ul>

                <Image src={MapaNavigationImage} alt="" className="my-12 rounded-md shadow-md" />
            </section>
        </>
    );
}
