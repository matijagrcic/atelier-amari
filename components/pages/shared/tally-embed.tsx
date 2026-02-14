"use client"

import Script from "next/script"

type TallyEmbedProps = {
  formUrl: string
  title: string
}

export function TallyEmbed({ formUrl, title }: TallyEmbedProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/70">
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      <iframe
        src={formUrl}
        title={title}
        className="h-[620px] w-full"
        loading="lazy"
        allow="camera; microphone; clipboard-write"
      />
    </div>
  )
}
