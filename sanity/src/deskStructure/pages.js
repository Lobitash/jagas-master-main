import S from "@sanity/desk-tool/structure-builder";
import { FaRecycle } from "react-icons/fa";
import {
  AiFillCopy,
  AiFillFile,
  AiFillHome,
  AiOutlineRead,
  AiOutlinePicLeft,
  AiOutlineAppstore,
  AiOutlineBook,
  AiFillFilePpt,
  AiFillPhone,
  AiFillDollarCircle,
  AiFillMessage,
  AiFillWarning,
} from "react-icons/ai";


export default S.listItem()
  .title("Pages")
  .icon(AiFillCopy)
  .child(
    S.list()
      .title("Pages")
      .items([
        S.listItem()
          .title("Home")
          .icon(AiFillHome)
          .child(
            S.editor()
              .title("Home")
              .id("homePage")
              .schemaType("homePage")
              .documentId("homePage")
          ),
        S.listItem()
          .title("About")
          .icon(AiOutlineRead)
          .child(
            S.editor()
              .title("About")
              .id("aboutPage")
              .schemaType("aboutPage")
              .documentId("aboutPage")
          ),
        S.listItem()
          .title("Paving Landing")
          .icon(AiOutlineAppstore)
          .child(
            S.editor()
              .title("Paving Landing")
              .id("pavingLanding")
              .schemaType("pavingLanding")
              .documentId("pavingLanding")
          ),
        S.listItem()
          .title("Precast Landing")
          .icon(AiOutlineAppstore)
          .child(
            S.editor()
              .title("Precast Landing")
              .id("precastLanding")
              .schemaType("precastLanding")
              .documentId("precastLanding")
          ),

        S.listItem()
          .title("Paving Technical Info")
          .icon(AiOutlineBook)
          .child(
            S.editor()
              .title("Paving Technical Info")
              .id("pavingTechnicalInfo")
              .schemaType("pavingTechnicalInfo")
              .documentId("pavingTechnicalInfo")
          ),
        S.listItem()
          .title("Precast Technical Info")
          .icon(AiOutlineBook)
          .child(
            S.editor()
              .title("Precast Technical Info")
              .id("precastTechnicalInfo")
              .schemaType("precastTechnicalInfo")
              .documentId("precastTechnicalInfo")
          ),
        S.listItem()
          .title("Projects Landing")
          .icon(AiFillFilePpt)
          .child(
            S.editor()
              .title("Projects Landing")
              .id("projectsLanding")
              .schemaType("projectsLanding")
              .documentId("projectsLanding")
          ),
        S.listItem()
          .title("Blogs Landing")
          .icon(AiOutlinePicLeft)
          .child(
            S.editor()
              .title("Blogs Landing")
              .id("blogsLanding")
              .schemaType("blogsLanding")
              .documentId("blogsLanding")
          ),
        S.listItem()
          .title("Contact Page")
          .icon(AiFillPhone)
          .child(
            S.editor()
              .title("Contact Page")
              .id("contactPage")
              .schemaType("contactPage")
              .documentId("contactPage")
          ),
        S.listItem()
          .title("Free Quote")
          .icon(AiFillMessage)
          .child(
            S.editor()
              .title("Free Quote")
              .id("freeQuotePage")
              .schemaType("freeQuotePage")
              .documentId("freeQuotePage")
          ),
        S.listItem()
          .title("404 Page")
          .icon(AiFillWarning)
          .child(
            S.editor()
              .title("404 Page")
              .id("pageNotFound")
              .schemaType("pageNotFound")
              .documentId("pageNotFound")
          ),
          S.listItem()
          .title("Sustainability Page")
          .icon(FaRecycle)
          .child(
            S.editor()
              .title("Sustainability Page")
              .id("sustainabilityPage")
              .schemaType("sustainabilityPage")
              .documentId("sustainabilityPage")
          ),
      ])
  );
