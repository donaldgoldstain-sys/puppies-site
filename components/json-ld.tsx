type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

// "<" is escaped so a stray sequence in authored copy cannot close the script tag.
const serialize = (graph: Record<string, unknown>[]) =>
  JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");

export function JsonLd({ data }: Props) {
  const graph = Array.isArray(data) ? data : [data];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(graph) }} />;
}
