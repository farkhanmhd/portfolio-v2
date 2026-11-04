interface MetaHeadProps {
  canonicalPath?: string;
  description?: string;
  jsonLdContent?: string;
  title?: string;
  type?: "website" | "article" | "profile";
}

const DEFAULT_TITLE = "Farkhan Muhammad — Full-Stack Developer";

const DEFAULT_DESCRIPTION =
  "Full-stack developer portfolio building scalable web applications from interface to infrastructure with Next.js, React, TypeScript, Bun, Golang, and Cloud.";

const BASE_URL = "https://farkhanmhd.vercel.app";

export const MetaHead = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "",
  type = "website",
  jsonLdContent,
}: MetaHeadProps) => {
  const fullUrl = `${BASE_URL}${canonicalPath}`;

  return (
    <>
      <title>{title}</title>
      <meta content={description} name="description" />
      <link href={fullUrl} rel="canonical" />

      {/* Open Graph */}
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={fullUrl} property="og:url" />
      <meta content={type} property="og:type" />

      {/* Twitter */}
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />

      {/* Structured Data JSON-LD */}
      {Boolean(jsonLdContent) && (
        <script type="application/ld+json">{jsonLdContent}</script>
      )}
    </>
  );
};
