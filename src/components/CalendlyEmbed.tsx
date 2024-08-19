'use client'
import { useEffect } from 'react'
import { InlineWidget } from 'react-calendly'

export const CalendlyEmbed = ({ url }: { url: string }) => {
  return (
    <InlineWidget
      url={url}
      iframeTitle={url}
      LoadingSpinner={() => <div>Loading...</div>}
      styles={{
        height: '1000px',
      }}
      pageSettings={{
        backgroundColor: 'red',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '00a2ff',
        textColor: '4d5055',
      }}
    />
  )
}
