import Head from "next/head";

const defaultTitle = "The Strorm Gallery";
const HtmlHead = ({ title = defaultTitle }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="A simple art gallery with a number of my favorite artists."
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export { HtmlHead };
