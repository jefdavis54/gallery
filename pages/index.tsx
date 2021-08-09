import Link from "next/link";
import { HtmlHead } from "../components/HtmlHead.com";
import { Sty_FancyAnchor } from "../styles/FancyLinkOptions.sty";
import {
  Sty_Container,
  Sty_Main,
  Sty_PictureBlock,
  Sty_TitleOverlayContainer,
  Sty_Footer,
  Sty_Title,
  Sty_LinkBlock,
} from "../styles/Page_Index.sty";

export default function Home() {
  return (
    <Sty_Container>
      <HtmlHead></HtmlHead>
      <Sty_Main>
        <Sty_TitleOverlayContainer>
          <Sty_Title>
            <span>Welcome to </span>
            <span>Strorm Gallery</span>
          </Sty_Title>
        </Sty_TitleOverlayContainer>

        <Sty_PictureBlock>
          <Link href="/gallery">
            <a>
              <picture>
                <source
                  type="image/webp"
                  media="(max-width: 599px)"
                  srcSet="hero_opt-500w.webp"
                ></source>
                <source
                  type="image/webp"
                  media="(min-width:600px) and (max-width: 799px)"
                  srcSet="hero_opt-600w.webp"
                ></source>
                <source
                  type="image/webp"
                  media="(min-width:800px) and (max-width: 999px)"
                  srcSet="hero_opt-800w.webp"
                ></source>
                <source
                  type="image/webp"
                  media="(min-width:1000px) and (max-width: 1149px)"
                  srcSet="hero_opt-1000w.webp"
                ></source>
                <source
                  type="image/jpeg"
                  media="(max-width: 599px)"
                  srcSet="hero_opt-500w.jpg"
                ></source>
                <source
                  type="image/jpeg"
                  media="(min-width:600px) and (max-width: 799px)"
                  srcSet="hero_opt-600w.jpg"
                ></source>
                <source
                  type="image/jpeg"
                  media="(min-width:800px) and (max-width: 999px)"
                  srcSet="hero_opt-800w.jpg"
                ></source>
                <source
                  type="image/jpeg"
                  media="(min-width:1000px) and (max-width: 1149px)"
                  srcSet="hero_opt-1000w.jpg"
                ></source>
                <img
                  src="hero_opt-1150w.jpg"
                  alt="Wanderer above the Sea of Fog by Caspar David Friedrich"
                />
              </picture>
            </a>
          </Link>
        </Sty_PictureBlock>
        <Sty_LinkBlock>
          <Link href="/gallery" passHref>
            <Sty_FancyAnchor>Enter Gallery</Sty_FancyAnchor>
          </Link>
        </Sty_LinkBlock>
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
