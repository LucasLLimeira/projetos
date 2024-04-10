
import { NavLink } from "./nav-link"
import thumbnsil_chosen from "../assets/thumbnail_chosen-logo.svg"

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={thumbnsil_chosen} />
            <nav className="flex items-center gap-5">
                <NavLink href="/eventos">Eventos</NavLink>                
                <NavLink href="/Participantes">Participantes</NavLink>
            </nav>
            
        </div>
    )
    
}