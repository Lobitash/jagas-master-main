// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// -------------- Collections --------------- //

// -------------- Documents --------------- //
import home from "./documents/pages/home";
import swatchCard from "./documents/swatchCard";
import header from "./documents/header";
import about from "./documents/pages/about";
import pavingLanding from "./documents/pages/pavingLanding";
import precastLanding from "./documents/pages/precastLanding";
import projects from "./documents/projects/projects";
import textureCard from "./documents/textureCard";
import productInner from "./documents/templates/productInner";
import precastTechnicalInfo from "./documents/pages/precastTechnicalInfo";
import projectsLanding from "./documents/pages/projectsLanding";
import contact from "./documents/pages/contact";
import sustainabilityLanding from "./documents/pages/sustainabilityLanding";

// -------------- Components --------------- //
import kitchenSink from "./development/kitchenSink";
import heroSlide from "./components/global/hero/heroSlide";
import landingHero from "./components/global/hero/landingHero";
import homeHero from "./components/global/hero/homeHero";
import tabItem from "./components/global/tabs/tabItem";
import tabsDisplay from "./components/global/tabs/tabsDisplay";
import previewProducts from "./components/products/previewProducts";
import productPreview from "./components/products/productPreview";
import slide from "./components/slider/slide";
import slider from "./components/slider/slider";
import cta from "./components/cta";
import rangeInformationBlock from "./components/rangeInformationBlock";
import blockContent from "./components/global/blockContent";
import leftRightBlock from "./components/global/leftRightBlock";
import homeMenu from "./components/pages/home/homeMenu";
import blogs from "./documents/pages/blogs/blogs";
import blogsLanding from "./documents/pages/blogsLanding";
import freeQuote from "./documents/pages/freeQuote";
import pageNotFound from "./documents/pages/404";

// -------------- Global Components --------------- //
import column from "./components/global/column";
import link from "./components/global/link";
import seo from "./components/global/seo";
import socialLinks from "./components/global/socialLinks/index";
import socialLink from "./components/global/socialLinks/socialLink";
import navigation from "./components/global/navigation/index";
import menuItem from "./components/global/navigation/menuItem";
import navigationButtonIcon from "./components/global/navigation/navigationIconButton";
import footer from "./documents/footer/index";
import siteConfig from "./documents/siteConfig";
import menu from "./components/global/header/menu";
import menuTab from "./components/global/header/menuTab";
import plainHero from "./components/global/hero/plainHero";
import textSection from "./components/global/textSection";
import getInTouch from "./components/global/getInTouch";
import projectPreview from "./components/projects/projectPreview";
import blockWithHeader from "./components/global/blockWithHeader";
import productTab from "./components/rangeTabs/productTab";
import productRangeTabs from "./components/rangeTabs/productRangeTabs";
import standardTab from "./components/rangeTabs/standardTab";
import detailedTab from "./components/rangeTabs/detailedTab";
import swatchlessTab from "./components/rangeTabs/swatchlessTab";
import plainTab from "./components/rangeTabs/plainTab";
import productHero from "./components/products/productHero";
import customProductsPreview from "./components/products/customProductsPreview";
import customPreview from "./components/products/customPreview";
import teamMember from "./components/pages/aboutPage/teamMember";
import ourTeam from "./components/pages/aboutPage/ourTeam";
import statement from "./components/pages/aboutPage/statement";
import testimonials from "./components/pages/aboutPage/testimonials";
import downloadableFile from "./components/pages/technicalInfo/downloadableFile";
import pavingTechnicalInfo from "./documents/pages/pacingTechnicalInfo";
import downloadGrid from "./components/pages/technicalInfo/downloadGrid";
import projectsGrid from "./components/projects/projectsGrid";
import productSlider from "./components/slider/productSlider";
import blogImageBlock from "./components/blogs/blogImageBlock";
import blogTextBlock from "./components/blogs/blogTextBlock";
import relatedPosts from "./components/blogs/relatedPosts";
import contactCard from "./components/pages/contact/contactCard";
import contactDetails from "./components/pages/contact/contactDetails";
import contactForm from "./components/pages/contact/contactForm";
import wideImageBlock from "./components/pages/contact/wideImageBlock";
// -------------- Objects --------------- //

// -------------- Development --------------- //

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    column,
    link,
    seo,
    socialLinks,
    socialLink,
    navigationButtonIcon,
    menuItem,
    navigation,
    footer,
    siteConfig,

    kitchenSink,

    // PAGES
    home,
    about,
    sustainabilityLanding,

    // SHARED
    header,

    // GLOBAL
    blockContent,
    leftRightBlock,
    heroSlide,
    landingHero,
    homeHero,
    tabItem,
    tabsDisplay,
    previewProducts,
    productPreview,
    slide,
    slider,
    cta,
    rangeInformationBlock,
    swatchCard,
    textureCard,
    menu,
    menuTab,
    plainHero,
    textSection,
    getInTouch,
    blockWithHeader,

    // PRODUCT RANGE TAB TYPES
    productRangeTabs,
    productTab,
    standardTab,
    detailedTab,
    swatchlessTab,
    plainTab,

    // HOMEPAGE
    homeMenu,

    // ABOUT PAGE
    teamMember,
    ourTeam,
    testimonials,
    statement,

    // PAVING LANDING
    pavingLanding,

    // PRECAST LANDING
    precastLanding,

    // PROJECTS
    projectsLanding,
    projects,
    projectPreview,
    projectsGrid,

    // PRODUCT PAGES
    productInner,
    productHero,
    customProductsPreview,
    customPreview,
    productSlider,

    // TECHNICAL INFO
    downloadableFile,
    pavingTechnicalInfo,
    precastTechnicalInfo,
    downloadGrid,

    // BLOGS
    blogsLanding,
    blogImageBlock,
    blogTextBlock,
    blogs,
    relatedPosts,

    // CONTACT US
    contact,
    contactCard,
    contactDetails,
    contactForm,
    wideImageBlock,

    // FREE QUOTE
    freeQuote,

    // 404 PAGE
    pageNotFound,
  ]),
});
