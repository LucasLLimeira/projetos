import { useState } from "react";
import { Eventos } from "./tabs/eventos";
import { Participantes } from "./tabs/participantes";
import thumbnsil_chosen from "../src/assets/thumbnail_chosen-logo.svg";
import { NavLink } from "./components/nav-link";

type Aba = "eventos" | "participantes";

export function App() {
  const [abaSelecionada, setAbaSelecionada] = useState<Aba>("eventos");

  const handleAbaSelecionada = (aba: Aba) => {
    setAbaSelecionada(aba);};

  return (
    <div className="max-w-[1216px] bg-black text-white mx-auto py-5 flex-col gap-5">
      <div className="flex items-center gap-5 py-2">
      <img src={thumbnsil_chosen} />
        <nav className="flex items-center gap-5">
          <NavLink
            className={abaSelecionada === "eventos" ? "selected" : ""}
            onClick={() => handleAbaSelecionada("eventos")}
          >
            Eventos
          </NavLink>
          <NavLink
            className={abaSelecionada === "participantes" ? "selected" : ""}
            onClick={() => handleAbaSelecionada("participantes")}
          >
            Participantes
          </NavLink>
        </nav>
      </div>
      {abaSelecionada === "eventos" ? <Eventos /> : <Participantes />}
    </div>
      
  )
}