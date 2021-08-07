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
                <source type="image/webp" srcSet="hero_opt1.webp" />
                <source type="image/jpeg" srcSet="hero_opt1.jpg" />
                <img
                  src="hero_opt.jpg"
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
