import {AiOutlineMenu } from 'react-icons/ai'

import{
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from '@/components/sidebar';

export const MobileSidebar = () => {
    return(
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
            <AiOutlineMenu />
            </SheetTrigger>
            <SheetContent side="left" className='p-0 bg-secondary pt-10 w-32'>
            <Sidebar/>
            </SheetContent>
        </Sheet>
    )
}