import Head from 'next/head'
import Landing from '../components/Landing'
import Election from '../components/Election'
import Start from '../components/Start'
import VoteTime from '../components/VoteTime'
import Conclusion from '../components/Conclusion'

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Process of Election - Civics Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing/>
      <Election/>
      <Start/>
      <VoteTime/>
      <Conclusion/>
    </div>
  )
}
