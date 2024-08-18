'use client'
import { useEffect } from 'react'
import { InlineWidget } from 'react-calendly'

export const CalendlyEmbed = ({ url }: { url: string }) => {
  return <InlineWidget url={url} />
}
