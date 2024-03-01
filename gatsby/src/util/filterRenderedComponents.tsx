import React from "react";

import Hero from "@components/shared/hero/hero";
import PlainHero from "@components/shared/hero/plainHero";
import TextSection from "@components/shared/textSection";
import ProductSlider from "@components/shared/productSlider";
import Slider from "@components/shared/slider";
import LeftRightBlock from "@components/shared/leftRightBlock";
import ProductPreview from "@components/shared/productPreview/productPreview";
import ProjectsPreview from "@components/shared/projects/projectsPreview";
import RangeInformation from "@components/shared/rangeInformation";
import ProductRangeTabs from "@components/shared/productRangeTabs/productRangeTabs";
import Cta from "@components/shared/cta";
import ProductHero from "../components/shared/productHero";
import CustomPreview from "@components/shared/productPreview/customPreview";
import Testimonials from "@components/about/testimonials";
import OurTeam from "@components/about/ourTeam";
import DownloadsGrid from "@components/technicalInfo/downloadsGrid";
import ProjectsGrid from "@components/shared/projects/projectsGrid";
import BlogTextBlock from "@components/blogs/blogTextBlock";
import BlogImageBlock from "@components/blogs/blogImageBlock";
import RelatedPosts from "@components/blogs/relatedPosts";
import ContactDetails from "@components/contact/contactDetails";
import WideImageBlock from "@components/contact/wideImageBlock";

interface Props {
  pageContent: any[];
  category?: string;
}

function FilterRenderedComponents(props: Props) {
  const { pageContent, category } = props;
  return (
    <>
      {pageContent.map((component) => {
        return component._type === "rangeInformationBlock" ? (
          <RangeInformation
            header={component.header}
            infoBlocks={component.infoBlocks}
            colours={component.rangeColours}
          />
        ) : component._type === "cta" ? (
          <Cta content={component} />
        ) : component._type === "slider" ? (
          <Slider
            sliderContent={component.slides}
            sliderTitle={component.sliderTitle}
          />
        ) : component._type === "productSlider" ? (
          <ProductSlider
            sliderContent={component.slides}
            sliderTitle={component.sliderTitle}
          />
        ) : component._type === "textSection" ? (
          <TextSection blocks={component} />
        ) : component._type === "leftRightBlock" ? (
          <LeftRightBlock content={component} />
        ) : component._type === "landingHero" ? (
          <Hero
            heroText={component.heroTitle}
            heroLink={component.HeroLink}
            heroSlides={component.landingHeroSlides}
          />
        ) : component._type === "heroPlain" ? (
          <PlainHero heroText={component.heroText} />
        ) : component._type === "previewProducts" ? (
          <ProductPreview products={component} />
        ) : component._type === "projectsPreview" ? (
          <ProjectsPreview projects={component.projectsList} />
        ) : component._type === "productRangeTabs" ? (
          <ProductRangeTabs rangeTabs={component} />
        ) : component._type === "productHero" ? (
          <ProductHero content={component} category={category} />
        ) : component._type === "customProductPreview" ? (
          <CustomPreview products={component} />
        ) : component._type === "testimonials" ? (
          <Testimonials
            header={component.header}
            subHeader={component.subHeader}
          />
        ) : component._type === "ourTeam" ? (
          <OurTeam team={component} />
        ) : component._type === "downloadGrid" ? (
          <DownloadsGrid content={component} />
        ) : component._type === "projectsGrid" ? (
          <ProjectsGrid />
        ) : component._type === "blogTextBlock" ? (
          <BlogTextBlock textContent={component.blockText} />
        ) : component._type === "blogImageBlock" ? (
          <BlogImageBlock image={component.blockImage} />
        ) : component._type === "relatedPosts" ? (
          <RelatedPosts header={component.header} posts={component.posts} />
        ) : component._type === "wideImageBlock" ? (
          <WideImageBlock image={component.wideImage} />
        ) : component._type === "contactDetails" ? (
          <ContactDetails details={component} />
        ) : null;
      })}
    </>
  );
}

export default FilterRenderedComponents;
