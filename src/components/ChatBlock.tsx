import ChatBox from '@/templates/ChatBox'
import LeftBar from '@/templates/LeftBar'
import RightBar from '@/templates/RightBar'
import React from 'react'

const ChatBlock = () => {
  return (
    <div className='flex gap-3 bg-slate-500 rounded-lg px-5 py-5 justify-between min-w-[80%]'>
      <ChatBox />
      <RightBar />
    </div>
  )
}

export default ChatBlock