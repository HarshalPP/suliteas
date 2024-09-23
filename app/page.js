 "use client"
import React, { useState } from 'react'
import Landing from './components/landing-page'
import { useRouter } from 'next/navigation';


const page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  return (
<>
  <Landing loading={loading}/>
</>  )
}

export default page