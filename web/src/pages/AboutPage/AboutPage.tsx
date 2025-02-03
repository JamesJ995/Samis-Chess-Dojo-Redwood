import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />

      <p>
        This is a page to opt in for chess text messages sent using Twilio. I
        plan on pushing daily chess puzzles and chess rating delta updates.
      </p>
    </>
  )
}

export default AboutPage
