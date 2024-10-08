import React from 'react'

import {
  Html,
  Text,
  Hr,
  Body,
  Head,
  Tailwind,
  Preview,
  Container,
  Heading,
} from '@react-email/components'

type WelcomeEmailProps = {
  username: string
  when?: string
}

export function WelcomeEmail({
  when = new Date().toLocaleString('nl'),
}: WelcomeEmailProps) {
  return (
    <Html lang="nl">
      <Head />
      <Preview>Welkom bij Fleckz</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Welkom Bij Fleckz
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Bezoek alstublieft{' '}
              <a href="https://fleckz.nl" target="_blank" rel="noreferrer">
                fleckz.nl
              </a>{' '}
              om de website te kunnen gebruiken.
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Bericht werd verstuurd op {when}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
