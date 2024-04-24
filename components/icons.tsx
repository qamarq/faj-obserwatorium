import {
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CoffeeIcon,
    FileIcon,
    HomeIcon,
    Image as ImageIcon,
    LucideProps,
    MailIcon,
    MinusIcon,
    MousePointer,
    PlusIcon,
    UserIcon,
    X,
    //   type Icon as LucideIcon,
} from 'lucide-react';

import Image from "next/image"
import FAJLogo from '@/public/assets/logo.png'
import FAJLogoLight from '@/public/assets/logo_light.png'
import UMKLogo from '@/public/assets/umk_logo.png'

import TelescopeImage from "@/public/assets/icons/telescope.png"
import TreeImage from "@/public/assets/icons/tree.png"
import AntennaImage from "@/public/assets/icons/antenna.png"
import StudentImage from "@/public/assets/icons/student.png"
import CarImage from "@/public/assets/icons/car.png"
import GirlImage from "@/public/assets/icons/girl.png"
import PhoneImage from "@/public/assets/icons/phone.png"
import WatchImage from "@/public/assets/icons/watch.png"
import LetterImage from "@/public/assets/icons/letter.png"
import CoinImage from "@/public/assets/icons/coin.png"
import ManImage from "@/public/assets/icons/man.png"
import BooksImage from "@/public/assets/icons/books.png"
import PaperImage from "@/public/assets/icons/paper.png"

// import type { Icon as LucideIcon } from "lucide-react"

// export type Icon = LucideIcon

export const Icons = {
    logo: () => (
        <Image draggable={false} src={FAJLogo} alt={"FAJ Obserwatorium"} className='w-24' />
    ),
    logoLight: () => (
        <Image draggable={false} src={FAJLogoLight} alt={"FAJ Obserwatorium"} className='w-30' />
    ),
    umkLogo: () => (
        <Image draggable={false} src={UMKLogo} alt={"FAJ Obserwatorium"} className='w-24' />
    ),
    close: X,
    home: HomeIcon,
    mouse: MousePointer,
    user: UserIcon,
    coffee: CoffeeIcon,
    file: FileIcon,
    arrowLeft: ChevronLeftIcon,
    arrowRight: ChevronRightIcon,
    minus: MinusIcon,
    plus: PlusIcon,
    mail: MailIcon,
    success: CheckIcon,
    gitHub: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}>
            <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
        </svg>
    ),
    yellowArrowRight: () => (
        <div className='bg-amber-500 rounded-md h-[24px] w-[24px] min-w-[24px] flex items-center justify-center'>
            <ChevronRightIcon size={18} />
        </div>
    ),
    telescope: () => ( <Image draggable={false} src={TelescopeImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    tree: () => ( <Image draggable={false} src={TreeImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    antenna: () => ( <Image draggable={false} src={AntennaImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    student: () => ( <Image draggable={false} src={StudentImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    car: () => ( <Image draggable={false} src={CarImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    girl: () => ( <Image draggable={false} src={GirlImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    phone: () => ( <Image draggable={false} src={PhoneImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    watch: () => ( <Image draggable={false} src={WatchImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    letter: () => ( <Image draggable={false} src={LetterImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    coin: () => ( <Image draggable={false} src={CoinImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    man: () => ( <Image draggable={false} src={ManImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    books: () => ( <Image draggable={false} src={BooksImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
    paper: () => ( <Image draggable={false} src={PaperImage} alt={""} className='w-[24px] h-[24px] min-w-[24px]' /> ),
};
