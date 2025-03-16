"use client"
import Image from 'next/image'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { sidebarNavigation } from "@/config/sidebar-navigation";
import { SignedIn, SignedOut, SignInButton, SignOutButton, useAuth, UserButton } from "@clerk/nextjs"
import Logo from "../../../public/logo.svg"
import { LogIn } from 'lucide-react';

export function AppSidebar() {
    const { isSignedIn } = useAuth();
    const sidebar_items = sidebarNavigation.filter(
        item => !item.requiresAuth || !isSignedIn
    )
    return (
        <Sidebar>
            <SidebarHeader >
                <div className='flex gap-2'>
                    <Image
                        src={Logo}
                        //width={500}
                        //height={500}
                        alt="Picture of the author"
                    />
                    <span className='font-bold'>JobWizard</span>
                </div>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {
                            sidebar_items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.href}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                        <SignedOut>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <SignInButton>
                                        <div className='flex'>
                                            <LogIn />
                                            <span>Sign In</span>
                                        </div>
                                    </SignInButton>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SignedOut>
                        <SignedIn>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <div>
                                        <UserButton />
                                        <SignOutButton />

                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SignedIn>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
