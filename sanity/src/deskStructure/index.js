import S from "@sanity/desk-tool/structure-builder";

import pages from "./pages";
import shared from "./shared";
import projects from "./projects";
import categories from "./categories";
import products from "./products";
import blogs from "./blogs";

export default () =>
  S.list()
    .title("Content")
    .items([pages, products, shared, projects, categories, blogs]);
