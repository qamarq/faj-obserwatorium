/* eslint-disable @next/next/no-img-element */
import { Icons } from '@/components/icons'
import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'

interface YearItem {
    year: string,
    year_items: {
        image: { url: string },
        title: string,
        description: string,
        participants: number
    }[]
}

export default async function ProjektyPage() {
    const payload = await getPayloadHMR({ config })
    // const myHeaders = headers()
    // const { user } = await payload.auth({ headers: myHeaders })
    // console.log(user)

    const projects: any = await payload.findGlobal({
        slug: 'projects'
    })
    
    return (
        <>
            <section className="w-full min-h-[15dvh] flex items-center text-white justify-center bg-stars-image bg-center bg-cover bg-fixed">
                <div className="container mx-auto my-10">
                    <div className='flex items-center gap-3'>
                        <h1 className='text-3xl font-semibold'>Zrealizowane projekty</h1>
                        <Icons.books />
                    </div>

                    {projects.items.map((projectYear: YearItem) => (
                        <div className="p-9 backdrop-blur-sm rounded-lg bg-gray-400/20 my-6 space-y-[24px]" key={projectYear.year}>
                            <div className='flex items-center gap-4'>
                                <Icons.yellowArrowRight />
                                <h1 className='text-3xl'>Rok {projectYear.year}</h1>
                            </div>

                            {projectYear.year_items.map((project, index) => (
                                <div className='grid grid-cols-3 gap-[23px] text-center' key={`${project.title}-${index}`}>
                                    <div className='flex items-center justify-center rounded-lg bg-white/5'>
                                        {/* <p className='text-xl font-semibold'>{project.period}</p> */}
                                        <img src={project.image.url} alt={project.title} className='w-full aspect-video object-contain rounded-lg' />
                                    </div>
                                    
                                    <div className='col-span-2 flex items-center justify-center rounded-lg bg-white/5'>
                                        <div className='flex flex-col items-start space-y-[8px] max-w-[480px] my-6'>
                                            <h1 className='text-xl font-semibold'>{project.title}</h1>
                                            <div className='flex items-center justify-start text-left gap-2'>
                                                <Icons.arrowRight size={20} className='min-w-[20px]' />
                                                <p className='text-md ml-2 font-[300]'>{project.description}</p>
                                            </div>
                                            <div className='flex items-center justify-start text-left gap-2'>
                                                <Icons.arrowRight size={20} className='min-w-[20px]' />
                                                <p className='text-md ml-2 font-[300]'>Liczba uczestników: {project.participants}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
