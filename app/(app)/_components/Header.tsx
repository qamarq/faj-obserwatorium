'use client';

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, cn } from "@nextui-org/react";
import { navigationMenu } from '@/config/navigation';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import { Icons } from '@/components/icons';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const segment = useSelectedLayoutSegment();

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered isMenuOpen={isMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/"><Icons.logo /></Link>
                    {/* <p className="font-bold text-inherit">FAJ</p> */}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                {/* <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem> */}
                {navigationMenu.map((item, index) => (
                    <NavbarItem key={`${item.link}-${index}`} isActive={segment === null && index === 0 || segment === item.link.slice(1)}>
                        <Link color="foreground" href={item.link} className={cn({ 'text-amber-500': segment === null && index === 0 || segment === item.link.slice(1) })}>
                            {item.title}
                        </Link>
                    </NavbarItem>  
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/kontakt">
                        Kontakt
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {navigationMenu.map((item, index) => (
                    <NavbarMenuItem key={`${item.link}-${index}`}>
                        <Link
                            color={
                                index === 2 ? 'primary' : index === navigationMenu.length - 1 ? 'danger' : 'foreground'
                            }
                            className="w-full"
                            href={item.link}
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
