import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Test</h1>
      <Image src={'/next.svg'} alt='next' width={100} height={100} />
    </div>
  )
}
