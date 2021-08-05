import Link from "next/link";
import Head from "next/head";
import { Sty_FancyButton } from "../styles/FancyButton";
import {
  Sty_Container,
  Sty_Main,
  Sty_PictureBlock,
  Sty_Footer,
  Sty_Title,
} from "../styles/IndexPage.sty";

export default function Home() {
  return (
    <Sty_Container>
      <Head>
        <title>The Strorm Gallery</title>
        <meta
          name="description"
          content="A simple art gallery with a number of my favorite artists."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Sty_Main>
        <Sty_Title>Welcome to the Strorm Gallery</Sty_Title>

        <Sty_PictureBlock>
          <Link href="/gallery">
            <a>
              <picture>
                <source type="image/webp" srcSet="hero_opt.webp" />
                <source type="image/jpeg" srcSet="hero_opt.jpg" />
                <img
                  src="hero_opt.jpg"
                  alt="Wanderer above the Sea of Fog by Caspar David Friedrich"
                />
              </picture>
            </a>
          </Link>
        </Sty_PictureBlock>
        <Sty_FancyButton>
          <Link href="/gallery">
            <a>Enter Gallery</a>
          </Link>
        </Sty_FancyButton>
      </Sty_Main>

      <Sty_Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js
        </a>
      </Sty_Footer>
    </Sty_Container>
  );
}
