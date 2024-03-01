import S from "@sanity/desk-tool/structure-builder";
import { AiFillDollarCircle } from "react-icons/ai";

export default S.documentTypeListItem("products")
  .title("Products")
  .icon(AiFillDollarCircle);
