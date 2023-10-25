import { useModals } from "@/src/context/ModalsProvider";
import { useItems } from "@/src/context/ItemsProvider";
import ModalTemplate from "./ModalTemplate";

export default function VictoryModal() {
  const { showVictory, toggleShowVictory } = useModals()
  const { answer } = useItems()

  return (
    <ModalTemplate showModal={showVictory} closeModal={() => toggleShowVictory(false)} title="Item was guessed!">
      <p className="text-xl text-center">
        <span>You succesfully guessed </span>
        <span className={`text-${answer?.quality}`}>{answer?.name}</span>
        <span>in 5 guesses.</span>
      </p>
    </ModalTemplate>
  )
}