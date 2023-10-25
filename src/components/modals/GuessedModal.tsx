import { useState } from "react";
import ModalTemplate from "./ModalTemplate";

export default function GuessedModal() {
  const [showModal, setShowModal] = useState<boolean>(true)

  function closeModal() {
    setShowModal(false)
  }

  return (
    <ModalTemplate showModal={showModal} closeModal={closeModal} title="Item was guessed!">
      <p>yo</p>
    </ModalTemplate>
  )
}