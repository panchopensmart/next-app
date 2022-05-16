import Head from 'next/head'
import Image from 'next/image'
import { Button, Htag, Paragragh, Tag } from '../components'

export default function Home() {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' className='test' arrow='right'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <Paragragh size='l'>Большой</Paragragh>
      <Paragragh>Средний</Paragragh>
      <Paragragh size='m'>Маленький</Paragragh>
      <Tag size='s'>TEXT</Tag>
      <Tag size='m' color='red'>TEXT</Tag>
      <Tag size='m' color='green'>TEXT</Tag>
      <Tag color='primary'>TEXT</Tag>
    </>
  )
}
