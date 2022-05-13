import Head from 'next/head'
import Image from 'next/image'
import { Button, Htag } from '../components'

export default function Home() {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary'>Кнопка</Button>
    </>
  )
}
