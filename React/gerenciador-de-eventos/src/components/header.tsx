
import { NavLink } from "./nav-link"
import thumbnsil_chosen from "../assets/thumbnail_chosen-logo.svg"

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={thumbnsil_chosen} />
            <nav className="flex items-center gap-5">
                <NavLink>Eventos</NavLink>                
                <NavLink>Participantes</NavLink>
            </nav>
            
        </div>
    )
    
}