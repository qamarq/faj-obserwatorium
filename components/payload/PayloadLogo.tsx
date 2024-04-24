import Image from 'next/image'
import React from 'react'
import LogoImage from "@/public/assets/logo_light.png"

export default function PayloadLogo() {
    return (
        <Image src={LogoImage} alt='' style={{ width: 70 }}/>
    )
}
