import S from "@sanity/desk-tool/structure-builder";
import { AiFillCopy, AiFillFile, AiFillHome } from "react-icons/ai";

export default S.listItem()
  .title("Categories")
  .icon(AiFillCopy)
  .child(
    S.list()
      .title("Categories")
      .items([
        S.documentTypeListItem("swatchCard")
          .title("Swatches")
          .icon(AiFillCopy)
          .id("swatchCards"),
        S.documentTypeListItem("textureCard")
          .title("Textures")
          .icon(AiFillCopy)
          .id("textureCards"),
        S.documentTypeListItem("statement")
          .title("Testimonials")
          .icon(AiFillCopy)
          .id("statement"),
      ])
  );
