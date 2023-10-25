import { useState } from "react";
import GuessedModal from "./GuessedModal";

export default function ModalsContainer() {
  const [showModal, setShowModal] = useState<boolean>(true)

  function closeModal() {
    setShowModal(false)
  }

  return (
    <>
      <GuessedModal closeModal={closeModal}/>
      {/* { showModal && <GuessedModal closeModal={closeModal}/>} */}
    </>
  )
}