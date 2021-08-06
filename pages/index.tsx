import Link from "next/link";
import { HtmlHead } from "../components/HtmlHead.com";
import { Sty_BtnFancy } from "../styles/BtnFancy.sty";
import {
  Sty_Container,
  Sty_Main,
  Sty_PictureBlock,
  Sty_Footer,
  Sty_Title,
} from "../styles/Page_Index.sty";

export default function Home() {
  return (
    <Sty_Container>
      <HtmlHead></HtmlHead>
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
        <Sty_BtnFancy>
          <Link href="/gallery">
            <a>Enter Gallery</a>
          </Link>
        </Sty_BtnFancy>
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
