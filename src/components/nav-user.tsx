"use client"

import {
    BadgeCheck,
    ChevronsUpDown,
    LogOut,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import { ROUTES } from "@/lib/constants"
import { useAuth } from "@/hooks/useAuth"

export function NavUser({
    user,
    }: {
    user: {
        first_name: string
        last_name: string
        email: string
        avatar: string
    }
    }) {
    const { logout } = useAuth()

    const { isMobile } = useSidebar()

    return (
        <SidebarMenu>
        <SidebarMenuItem>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>
                    <AvatarFallback className="rounded-lg">
                        {user.first_name.charAt(0) + user.last_name.charAt(0)}
                    </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{`${user.first_name} ${user.last_name}`}</span>
                    <span className="truncate text-xs">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{`${user.first_name} ${user.last_name}`}</span>
                    <span className="truncate text-xs">{user.email}</span>
                    </div>
                </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to={ROUTES.PROFILE}>
                <DropdownMenuItem className="cursor-pointer">
                        <BadgeCheck />
                        Account
                </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()} className="cursor-pointer">
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
        </SidebarMenu>
    )
}
