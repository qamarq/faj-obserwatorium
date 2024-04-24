import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import PageCennik from './_components/PageCennik'

export default async function CennikPage() {
    const payload = await getPayloadHMR({ config })

    const pricing: any = await payload.findGlobal({
        slug: 'pricing'
    })

    return (
        <PageCennik pricing={pricing} />
    )
}
