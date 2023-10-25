import Button from "../layout/Button";

export default function GuessedModal() {
  return (
    <aside className='fixed top-0 w-full h-[100dvh] grid p-4'>
      <div className="max-w-xl w-full bg-black text-white m-auto p-4">
        <p className="text-2xl text-center">Item was guessed!</p>
        <p>Lorem ipsum dolor sit amet</p>
        <div className="grid place-content-center mt-4">
          <Button onClick={() => console.log('yo')} text="Close"/>
        </div>
      </div>
    </aside>
  )
}