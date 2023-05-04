import PlusIcon from './images/plus.inline.svg'
import MinusIcon from './images/minus.inline.svg'

const PlusModifierButton = () => {
  return (
    <button className='px-5 bg-light-green rounded-r-3xl'>
      <PlusIcon width={30} height={30}/>
    </button>
  )
}




const MinusModifierButton = () => {
  return (
    <button className='px-5 bg-light-green rounded-l-3xl'>
      <MinusIcon width={30} height={30}/>
    </button>
  )


}
const TextModifierButton = () => {
  return (
    <div className='w-34 flex justify-center items-center text-center py-5 px-3 bg-light-green mx-2.5'>
      <span className='text-base leading-6 text-deep-green font-bold uppercase'>Modify roll</span>
    </div>
  )
}



const ModifyButton = () => {
    return (
      <div className='flex justify-center self-center flex-row h-[80px]'>
        <MinusModifierButton />
        <TextModifierButton />
        <PlusModifierButton />
      </div>
    )
}


export { ModifyButton };