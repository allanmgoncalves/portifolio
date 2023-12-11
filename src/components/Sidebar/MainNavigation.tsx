import { NavItem } from './NavItem'
import {
  Home,
  BarChart2,
  CheckSquare,
  Flag,
  Layers3,
  Users,
} from 'lucide-react'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5 ">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart2} />
      <NavItem title="Projects" icon={Layers3} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
