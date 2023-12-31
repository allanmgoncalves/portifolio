import { LifeBuoy, Search, Settings } from 'lucide-react'
import { NavItem } from './NavItem'
import { Logo } from './Logo'
import { UserSpaceWidget } from './UserSpaceWidget'
import { MainNavigation } from './MainNavigation'
import { Profile } from './Profile'
import * as Input from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <div className="space-y-0.5 ">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Settings} />
        </div>

        <UserSpaceWidget />

        <hr className="border-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
