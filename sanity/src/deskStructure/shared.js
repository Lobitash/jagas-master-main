import S from "@sanity/desk-tool/structure-builder";
import {
  AiFillCopy,
  AiOutlineMenu,
  AiOutlineAlignLeft,
  AiFillCaretRight,
  AiOutlineSearch,
} from "react-icons/ai";

export default S.listItem()
  .title("Shared")
  .icon(AiFillCopy)
  .child(
    S.list()
      .title("Shared")
      .items([
        S.listItem()
          .title("Header")
          .icon(AiOutlineMenu)
          .child(
            S.editor()
              .title("Header")
              .id("header")
              .schemaType("header")
              .documentId("header")
          ),
        S.listItem()
          .title("Footer")
          .icon(AiOutlineAlignLeft)
          .child(
            S.editor()
              .title("Footer")
              .id("footer")
              .schemaType("footer")
              .documentId("footer")
          ),
        S.listItem()
          .title("Get in touch CTA")
          .icon(AiFillCaretRight)
          .child(
            S.editor()
              .title("Get in touch CTA")
              .id("getInTouchCTA")
              .schemaType("getInTouchCTA")
              .documentId("getInTouchCTA")
          ),
        S.listItem()
          .title("SEO")
          .icon(AiOutlineSearch)
          .child(
            S.editor()
              .title("SEO")
              .id("siteConfig")
              .schemaType("siteConfig")
              .documentId("siteConfig")
          ),
      ])
  );
