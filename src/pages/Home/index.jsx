import { useState } from 'react'
import { Header } from '../../layout/Header'
import { MainContainer } from '../../layout/MainContainer'
import { Nav } from '../../layout/Nav'
import { NavMobile } from '../../layout/NavMobile'

export const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
        <Header open={open} setOpen={setOpen}/>
        <NavMobile open={open} setOpen={setOpen}/>
        <MainContainer/>
    </>
  )
}
