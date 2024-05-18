import React, { useEffect, useState } from 'react'
import Modal from './UI/Modal'
import Cart from './Cart'

function Header() {
    const[isModalOpen,setIsModalOpen]=useState(false)

    function closeModal(){
        setIsModalOpen(false)
    }

    // To stop scrolling in background when modal is opened, we change the html overFlowY=hidden to stop scrolling
    useEffect(()=>{
        if(isModalOpen){
            document.documentElement.style.overflowY="hidden"
        }else{
            document.documentElement.style.overflowY="scroll"
        }
    },[isModalOpen])

  return (
    <header>
    <nav>
        <h1 className="logo">ARC Logo</h1>
        <button onClick={()=>{
            setIsModalOpen(true)
        }}>Show Cart</button>
      </nav>

      {isModalOpen &&
        <Modal closeModal={closeModal}>
            <Cart/>
        </Modal>}
      
    </header>
    
  )
}

export default Header
