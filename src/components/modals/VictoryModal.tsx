import ModalTemplate from "./ModalTemplate";
import { useModals } from "@/src/context/ModalsProvider";

export default function VictoryModal() {
  const { showVictory, toggleShowVictory } = useModals()

  return (
    <ModalTemplate showModal={showVictory} closeModal={() => toggleShowVictory(false)} title="Item was guessed!">
      <p>yo</p>
    </ModalTemplate>
  )
}