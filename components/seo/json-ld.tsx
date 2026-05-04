import { serializeJsonLd, type JsonLdData } from "@/lib/seo/json-ld"

type JsonLdProps = {
  data: JsonLdData | JsonLdData[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}
