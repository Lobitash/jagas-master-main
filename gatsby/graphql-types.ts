export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type LocalSearchProducts = Node & {
  /** The name of the index. */
  name: Scalars['String'];
  /** The search engine used to create the index. */
  engine: Scalars['String'];
  /** The search index created using the selected engine. */
  index: Scalars['String'];
  /** A JSON object used to map search results to their data. */
  store: Scalars['JSON'];
  /** Save the index to the site's static directory and return a public URL to it. */
  publicIndexURL: Scalars['String'];
  /** Save the store to the site's static directory and return a public URL to it. */
  publicStoreURL: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type LocalSearchProductsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocalSearchProductsEdge>;
  nodes: Array<LocalSearchProducts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<LocalSearchProductsGroupConnection>;
};


export type LocalSearchProductsConnectionDistinctArgs = {
  field: LocalSearchProductsFieldsEnum;
};


export type LocalSearchProductsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: LocalSearchProductsFieldsEnum;
};

export type LocalSearchProductsEdge = {
  next?: Maybe<LocalSearchProducts>;
  node: LocalSearchProducts;
  previous?: Maybe<LocalSearchProducts>;
};

export type LocalSearchProductsFieldsEnum =
  | 'name'
  | 'engine'
  | 'index'
  | 'store'
  | 'publicIndexURL'
  | 'publicStoreURL'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type LocalSearchProductsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  engine?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<StringQueryOperatorInput>;
  store?: Maybe<JsonQueryOperatorInput>;
  publicIndexURL?: Maybe<StringQueryOperatorInput>;
  publicStoreURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type LocalSearchProductsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocalSearchProductsEdge>;
  nodes: Array<LocalSearchProducts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type LocalSearchProductsSortInput = {
  fields?: Maybe<Array<Maybe<LocalSearchProductsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sanityAboutPage?: Maybe<SanityAboutPage>;
  allSanityAboutPage: SanityAboutPageConnection;
  sanityBlog?: Maybe<SanityBlog>;
  allSanityBlog: SanityBlogConnection;
  sanityBlogsLanding?: Maybe<SanityBlogsLanding>;
  allSanityBlogsLanding: SanityBlogsLandingConnection;
  sanityContactPage?: Maybe<SanityContactPage>;
  allSanityContactPage: SanityContactPageConnection;
  sanityFooter?: Maybe<SanityFooter>;
  allSanityFooter: SanityFooterConnection;
  sanityFreeQuotePage?: Maybe<SanityFreeQuotePage>;
  allSanityFreeQuotePage: SanityFreeQuotePageConnection;
  sanityGetInTouchCta?: Maybe<SanityGetInTouchCta>;
  allSanityGetInTouchCta: SanityGetInTouchCtaConnection;
  sanityHeader?: Maybe<SanityHeader>;
  allSanityHeader: SanityHeaderConnection;
  sanityHomePage?: Maybe<SanityHomePage>;
  allSanityHomePage: SanityHomePageConnection;
  sanityKitchenSink?: Maybe<SanityKitchenSink>;
  allSanityKitchenSink: SanityKitchenSinkConnection;
  sanityNavigation?: Maybe<SanityNavigation>;
  allSanityNavigation: SanityNavigationConnection;
  sanityPageNotFound?: Maybe<SanityPageNotFound>;
  allSanityPageNotFound: SanityPageNotFoundConnection;
  sanityPavingLanding?: Maybe<SanityPavingLanding>;
  allSanityPavingLanding: SanityPavingLandingConnection;
  sanityPavingTechnicalInfo?: Maybe<SanityPavingTechnicalInfo>;
  allSanityPavingTechnicalInfo: SanityPavingTechnicalInfoConnection;
  sanityPrecastLanding?: Maybe<SanityPrecastLanding>;
  allSanityPrecastLanding: SanityPrecastLandingConnection;
  sanityPrecastTechnicalInfo?: Maybe<SanityPrecastTechnicalInfo>;
  allSanityPrecastTechnicalInfo: SanityPrecastTechnicalInfoConnection;
  sanityProducts?: Maybe<SanityProducts>;
  allSanityProducts: SanityProductsConnection;
  sanityProjects?: Maybe<SanityProjects>;
  allSanityProjects: SanityProjectsConnection;
  sanityProjectsLanding?: Maybe<SanityProjectsLanding>;
  allSanityProjectsLanding: SanityProjectsLandingConnection;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  allSanityFileAsset: SanityFileAssetConnection;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  allSanityImageAsset: SanityImageAssetConnection;
  sanitySiteConfig?: Maybe<SanitySiteConfig>;
  allSanitySiteConfig: SanitySiteConfigConnection;
  sanitySocialLinks?: Maybe<SanitySocialLinks>;
  allSanitySocialLinks: SanitySocialLinksConnection;
  sanityStatement?: Maybe<SanityStatement>;
  allSanityStatement: SanityStatementConnection;
  sanitySustainabilityPage?: Maybe<SanitySustainabilityPage>;
  allSanitySustainabilityPage: SanitySustainabilityPageConnection;
  sanitySwatchCard?: Maybe<SanitySwatchCard>;
  allSanitySwatchCard: SanitySwatchCardConnection;
  sanityTextureCard?: Maybe<SanityTextureCard>;
  allSanityTextureCard: SanityTextureCardConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  localSearchProducts?: Maybe<LocalSearchProducts>;
  allLocalSearchProducts: LocalSearchProductsConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityAboutPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityAboutPageArgs = {
  filter?: Maybe<SanityAboutPageFilterInput>;
  sort?: Maybe<SanityAboutPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityBlogArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  hiddenToggle?: Maybe<BooleanQueryOperatorInput>;
  pageName?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  postFeatureImage?: Maybe<SanityImageFilterInput>;
  blogSummary?: Maybe<StringQueryOperatorInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawPostFeatureImage?: Maybe<JsonQueryOperatorInput>;
  _rawBlogContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityBlogArgs = {
  filter?: Maybe<SanityBlogFilterInput>;
  sort?: Maybe<SanityBlogSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityBlogsLandingArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityBlogsLandingArgs = {
  filter?: Maybe<SanityBlogsLandingFilterInput>;
  sort?: Maybe<SanityBlogsLandingSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityContactPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  contactFormCustomerTypes?: Maybe<StringQueryOperatorInput>;
  contactFormText?: Maybe<SanityContactFormTextFilterInput>;
  contactFormThankYouMessage?: Maybe<SanityBlockContentFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  _rawContactFormText?: Maybe<JsonQueryOperatorInput>;
  _rawContactFormThankYouMessage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityContactPageArgs = {
  filter?: Maybe<SanityContactPageFilterInput>;
  sort?: Maybe<SanityContactPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityFooterArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  footerSocialLinks?: Maybe<SanitySocialLinkFilterListInput>;
  menus?: Maybe<SanityMenuFilterListInput>;
  _rawFooterSocialLinks?: Maybe<JsonQueryOperatorInput>;
  _rawMenus?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityFooterArgs = {
  filter?: Maybe<SanityFooterFilterInput>;
  sort?: Maybe<SanityFooterSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityFreeQuotePageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  header?: Maybe<StringQueryOperatorInput>;
  subHeader?: Maybe<StringQueryOperatorInput>;
  thankYouMessage?: Maybe<SanityBlockContentFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawThankYouMessage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityFreeQuotePageArgs = {
  filter?: Maybe<SanityFreeQuotePageFilterInput>;
  sort?: Maybe<SanityFreeQuotePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityGetInTouchCtaArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  mainText?: Maybe<StringQueryOperatorInput>;
  subText?: Maybe<StringQueryOperatorInput>;
  buttonText?: Maybe<StringQueryOperatorInput>;
  buttonLink?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityGetInTouchCtaArgs = {
  filter?: Maybe<SanityGetInTouchCtaFilterInput>;
  sort?: Maybe<SanityGetInTouchCtaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityHeaderArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  headerLogo?: Maybe<SanityImageFilterInput>;
  MobileLogo?: Maybe<SanityImageFilterInput>;
  headerButton?: Maybe<SanityLinkFilterInput>;
  topBarLinks?: Maybe<SanityLinkFilterListInput>;
  menuTabs?: Maybe<SanityMenuTabFilterListInput>;
  headerSocialLinks?: Maybe<SanitySocialLinkFilterListInput>;
  _rawHeaderLogo?: Maybe<JsonQueryOperatorInput>;
  _rawMobileLogo?: Maybe<JsonQueryOperatorInput>;
  _rawHeaderButton?: Maybe<JsonQueryOperatorInput>;
  _rawTopBarLinks?: Maybe<JsonQueryOperatorInput>;
  _rawMenuTabs?: Maybe<JsonQueryOperatorInput>;
  _rawHeaderSocialLinks?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityHeaderArgs = {
  filter?: Maybe<SanityHeaderFilterInput>;
  sort?: Maybe<SanityHeaderSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityHomePageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  homeHero?: Maybe<SanityHomeHeroFilterInput>;
  textSection?: Maybe<SanityTextSectionFilterInput>;
  homeMenu?: Maybe<SanityHomeMenuTabFilterListInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawHomeHero?: Maybe<JsonQueryOperatorInput>;
  _rawTextSection?: Maybe<JsonQueryOperatorInput>;
  _rawHomeMenu?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityHomePageArgs = {
  filter?: Maybe<SanityHomePageFilterInput>;
  sort?: Maybe<SanityHomePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityKitchenSinkArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawSink?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityKitchenSinkArgs = {
  filter?: Maybe<SanityKitchenSinkFilterInput>;
  sort?: Maybe<SanityKitchenSinkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityNavigationArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<SanityImageFilterInput>;
  menuItems?: Maybe<SanityMenuItemFilterListInput>;
  mobileMenuItems?: Maybe<SanityMenuItemFilterListInput>;
  _rawLogo?: Maybe<JsonQueryOperatorInput>;
  _rawMenuItems?: Maybe<JsonQueryOperatorInput>;
  _rawMobileMenuItems?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityNavigationArgs = {
  filter?: Maybe<SanityNavigationFilterInput>;
  sort?: Maybe<SanityNavigationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPageNotFoundArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  pageHeader?: Maybe<StringQueryOperatorInput>;
  pageSubHeader?: Maybe<StringQueryOperatorInput>;
  notFoundImage?: Maybe<SanityImageFilterInput>;
  pageLinks?: Maybe<SanityLinkFilterListInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawNotFoundImage?: Maybe<JsonQueryOperatorInput>;
  _rawPageLinks?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPageNotFoundArgs = {
  filter?: Maybe<SanityPageNotFoundFilterInput>;
  sort?: Maybe<SanityPageNotFoundSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPavingLandingArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPavingLandingArgs = {
  filter?: Maybe<SanityPavingLandingFilterInput>;
  sort?: Maybe<SanityPavingLandingSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPavingTechnicalInfoArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  formThankYouMessage?: Maybe<SanityBlockContentFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  _rawFormThankYouMessage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPavingTechnicalInfoArgs = {
  filter?: Maybe<SanityPavingTechnicalInfoFilterInput>;
  sort?: Maybe<SanityPavingTechnicalInfoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPrecastLandingArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPrecastLandingArgs = {
  filter?: Maybe<SanityPrecastLandingFilterInput>;
  sort?: Maybe<SanityPrecastLandingSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPrecastTechnicalInfoArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPrecastTechnicalInfoArgs = {
  filter?: Maybe<SanityPrecastTechnicalInfoFilterInput>;
  sort?: Maybe<SanityPrecastTechnicalInfoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityProductsArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  pageName?: Maybe<StringQueryOperatorInput>;
  pageCategory?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  productPagePreview?: Maybe<SanityProductPreviewFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawProductPagePreview?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityProductsArgs = {
  filter?: Maybe<SanityProductsFilterInput>;
  sort?: Maybe<SanityProductsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityProjectsArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  projectName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  category?: Maybe<StringQueryOperatorInput>;
  client?: Maybe<StringQueryOperatorInput>;
  team?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  newDescription?: Maybe<SanityColumnFilterInput>;
  projectImages?: Maybe<SanityImageFilterListInput>;
  projectPreview?: Maybe<SanityProjectsPreviewFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawNewDescription?: Maybe<JsonQueryOperatorInput>;
  _rawProjectImages?: Maybe<JsonQueryOperatorInput>;
  _rawProjectPreview?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityProjectsArgs = {
  filter?: Maybe<SanityProjectsFilterInput>;
  sort?: Maybe<SanityProjectsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityProjectsLandingArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityProjectsLandingArgs = {
  filter?: Maybe<SanityProjectsLandingFilterInput>;
  sort?: Maybe<SanityProjectsLandingSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>;
  sort?: Maybe<SanityFileAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  fixed?: Maybe<SanityImageFixedFilterInput>;
  fluid?: Maybe<SanityImageFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>;
  sort?: Maybe<SanityImageAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanitySiteConfigArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  defaultSEO?: Maybe<SanitySeoFilterInput>;
  _rawDefaultSeo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanitySiteConfigArgs = {
  filter?: Maybe<SanitySiteConfigFilterInput>;
  sort?: Maybe<SanitySiteConfigSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanitySocialLinksArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  socialLinks?: Maybe<SanitySocialLinkFilterListInput>;
  _rawSocialLinks?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanitySocialLinksArgs = {
  filter?: Maybe<SanitySocialLinksFilterInput>;
  sort?: Maybe<SanitySocialLinksSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityStatementArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  statementName?: Maybe<StringQueryOperatorInput>;
  statementRole?: Maybe<StringQueryOperatorInput>;
  statementText?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityStatementArgs = {
  filter?: Maybe<SanityStatementFilterInput>;
  sort?: Maybe<SanityStatementSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanitySustainabilityPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanitySustainabilityPageArgs = {
  filter?: Maybe<SanitySustainabilityPageFilterInput>;
  sort?: Maybe<SanitySustainabilityPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanitySwatchCardArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  swatchName?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  featureImage?: Maybe<SanityImageFilterInput>;
  textures?: Maybe<SanityTextureCardFilterListInput>;
  _rawFeatureImage?: Maybe<JsonQueryOperatorInput>;
  _rawTextures?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanitySwatchCardArgs = {
  filter?: Maybe<SanitySwatchCardFilterInput>;
  sort?: Maybe<SanitySwatchCardSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityTextureCardArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  textureName?: Maybe<StringQueryOperatorInput>;
  textureThumbnail?: Maybe<SanityImageFilterInput>;
  images?: Maybe<SanityImageFilterListInput>;
  _rawTextureThumbnail?: Maybe<JsonQueryOperatorInput>;
  _rawImages?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityTextureCardArgs = {
  filter?: Maybe<SanityTextureCardFilterInput>;
  sort?: Maybe<SanityTextureCardSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryLocalSearchProductsArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  engine?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<StringQueryOperatorInput>;
  store?: Maybe<JsonQueryOperatorInput>;
  publicIndexURL?: Maybe<StringQueryOperatorInput>;
  publicStoreURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllLocalSearchProductsArgs = {
  filter?: Maybe<LocalSearchProductsFilterInput>;
  sort?: Maybe<LocalSearchProductsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SanityAboutPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageContent?: Maybe<Array<Maybe<SanityCtaOrHeroPlainOrLeftRightBlockOrOurTeamOrPreviewProductsOrRangeInformationBlockOrSliderOrTestimonialsOrTextSection>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityAboutPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityAboutPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityAboutPage_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityAboutPage_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityAboutPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityAboutPageEdge>;
  nodes: Array<SanityAboutPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityAboutPageGroupConnection>;
};


export type SanityAboutPageConnectionDistinctArgs = {
  field: SanityAboutPageFieldsEnum;
};


export type SanityAboutPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityAboutPageFieldsEnum;
};

export type SanityAboutPageEdge = {
  next?: Maybe<SanityAboutPage>;
  node: SanityAboutPage;
  previous?: Maybe<SanityAboutPage>;
};

export type SanityAboutPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | '_rawSeoBlock'
  | '_rawPageContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityAboutPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityAboutPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityAboutPageEdge>;
  nodes: Array<SanityAboutPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityAboutPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityAboutPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityAssetSourceData = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SanityBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockContent = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawContent?: Maybe<Scalars['JSON']>;
};


export type SanityBlockContent_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockContentFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
};

export type SanityBlockFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<SanitySpanFilterListInput>;
  style?: Maybe<StringQueryOperatorInput>;
  list?: Maybe<StringQueryOperatorInput>;
  _rawChildren?: Maybe<JsonQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: Maybe<SanityBlockFilterInput>;
};

export type SanityBlockOrImageOrLink = SanityBlock | SanityImage | SanityLink;

export type SanityBlockWithHeader = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blockHeader?: Maybe<Scalars['String']>;
  textBlock?: Maybe<SanityBlockContent>;
  _rawTextBlock?: Maybe<Scalars['JSON']>;
};


export type SanityBlockWithHeader_RawTextBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlog = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  hiddenToggle?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  slug?: Maybe<SanitySlug>;
  postFeatureImage?: Maybe<SanityImage>;
  blogSummary?: Maybe<Scalars['String']>;
  blogContent?: Maybe<Array<Maybe<SanityBlogImageBlockOrBlogTextBlockOrRelatedPosts>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawPostFeatureImage?: Maybe<Scalars['JSON']>;
  _rawBlogContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityBlog_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityBlog_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityBlogPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityBlog_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBlog_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBlog_RawPostFeatureImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBlog_RawBlogContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlogConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityBlogEdge>;
  nodes: Array<SanityBlog>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityBlogGroupConnection>;
};


export type SanityBlogConnectionDistinctArgs = {
  field: SanityBlogFieldsEnum;
};


export type SanityBlogConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityBlogFieldsEnum;
};

export type SanityBlogEdge = {
  next?: Maybe<SanityBlog>;
  node: SanityBlog;
  previous?: Maybe<SanityBlog>;
};

export type SanityBlogFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | 'hiddenToggle'
  | 'pageName'
  | 'publishDate'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'postFeatureImage____key'
  | 'postFeatureImage____type'
  | 'postFeatureImage___asset____id'
  | 'postFeatureImage___asset____type'
  | 'postFeatureImage___asset____createdAt'
  | 'postFeatureImage___asset____updatedAt'
  | 'postFeatureImage___asset____rev'
  | 'postFeatureImage___asset____key'
  | 'postFeatureImage___asset___originalFilename'
  | 'postFeatureImage___asset___label'
  | 'postFeatureImage___asset___title'
  | 'postFeatureImage___asset___description'
  | 'postFeatureImage___asset___sha1hash'
  | 'postFeatureImage___asset___extension'
  | 'postFeatureImage___asset___mimeType'
  | 'postFeatureImage___asset___size'
  | 'postFeatureImage___asset___assetId'
  | 'postFeatureImage___asset___path'
  | 'postFeatureImage___asset___url'
  | 'postFeatureImage___asset___metadata____key'
  | 'postFeatureImage___asset___metadata____type'
  | 'postFeatureImage___asset___metadata___lqip'
  | 'postFeatureImage___asset___metadata___hasAlpha'
  | 'postFeatureImage___asset___metadata___isOpaque'
  | 'postFeatureImage___asset___metadata____rawLocation'
  | 'postFeatureImage___asset___metadata____rawDimensions'
  | 'postFeatureImage___asset___metadata____rawPalette'
  | 'postFeatureImage___asset___source____key'
  | 'postFeatureImage___asset___source____type'
  | 'postFeatureImage___asset___source___name'
  | 'postFeatureImage___asset___source___id'
  | 'postFeatureImage___asset___source___url'
  | 'postFeatureImage___asset____rawMetadata'
  | 'postFeatureImage___asset____rawSource'
  | 'postFeatureImage___asset___fixed___width'
  | 'postFeatureImage___asset___fixed___height'
  | 'postFeatureImage___asset___fixed___src'
  | 'postFeatureImage___asset___fixed___srcSet'
  | 'postFeatureImage___asset___fixed___base64'
  | 'postFeatureImage___asset___fixed___srcWebp'
  | 'postFeatureImage___asset___fixed___srcSetWebp'
  | 'postFeatureImage___asset___fluid___aspectRatio'
  | 'postFeatureImage___asset___fluid___src'
  | 'postFeatureImage___asset___fluid___srcSet'
  | 'postFeatureImage___asset___fluid___sizes'
  | 'postFeatureImage___asset___fluid___base64'
  | 'postFeatureImage___asset___fluid___srcWebp'
  | 'postFeatureImage___asset___fluid___srcSetWebp'
  | 'postFeatureImage___asset___id'
  | 'postFeatureImage___asset___parent___id'
  | 'postFeatureImage___asset___parent___children'
  | 'postFeatureImage___asset___children'
  | 'postFeatureImage___asset___children___id'
  | 'postFeatureImage___asset___children___children'
  | 'postFeatureImage___asset___internal___content'
  | 'postFeatureImage___asset___internal___contentDigest'
  | 'postFeatureImage___asset___internal___description'
  | 'postFeatureImage___asset___internal___fieldOwners'
  | 'postFeatureImage___asset___internal___ignoreType'
  | 'postFeatureImage___asset___internal___mediaType'
  | 'postFeatureImage___asset___internal___owner'
  | 'postFeatureImage___asset___internal___type'
  | 'postFeatureImage___hotspot____key'
  | 'postFeatureImage___hotspot____type'
  | 'postFeatureImage___hotspot___x'
  | 'postFeatureImage___hotspot___y'
  | 'postFeatureImage___hotspot___height'
  | 'postFeatureImage___hotspot___width'
  | 'postFeatureImage___crop____key'
  | 'postFeatureImage___crop____type'
  | 'postFeatureImage___crop___top'
  | 'postFeatureImage___crop___bottom'
  | 'postFeatureImage___crop___left'
  | 'postFeatureImage___crop___right'
  | 'postFeatureImage____rawAsset'
  | 'postFeatureImage____rawHotspot'
  | 'postFeatureImage____rawCrop'
  | 'blogSummary'
  | '_rawSeoBlock'
  | '_rawSlug'
  | '_rawPostFeatureImage'
  | '_rawBlogContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityBlogFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  hiddenToggle?: Maybe<BooleanQueryOperatorInput>;
  pageName?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  postFeatureImage?: Maybe<SanityImageFilterInput>;
  blogSummary?: Maybe<StringQueryOperatorInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawPostFeatureImage?: Maybe<JsonQueryOperatorInput>;
  _rawBlogContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityBlogGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityBlogEdge>;
  nodes: Array<SanityBlog>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityBlogImageBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blockImage?: Maybe<SanityImage>;
  _rawBlockImage?: Maybe<Scalars['JSON']>;
};


export type SanityBlogImageBlock_RawBlockImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlogImageBlockOrBlogTextBlockOrRelatedPosts = SanityBlogImageBlock | SanityBlogTextBlock | SanityRelatedPosts;

export type SanityBlogsLanding = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageContent?: Maybe<Array<Maybe<SanityHeroPlainOrTextSection>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityBlogsLanding_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityBlogsLanding_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityBlogsLanding_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBlogsLanding_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlogsLandingConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityBlogsLandingEdge>;
  nodes: Array<SanityBlogsLanding>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityBlogsLandingGroupConnection>;
};


export type SanityBlogsLandingConnectionDistinctArgs = {
  field: SanityBlogsLandingFieldsEnum;
};


export type SanityBlogsLandingConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityBlogsLandingFieldsEnum;
};

export type SanityBlogsLandingEdge = {
  next?: Maybe<SanityBlogsLanding>;
  node: SanityBlogsLanding;
  previous?: Maybe<SanityBlogsLanding>;
};

export type SanityBlogsLandingFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | '_rawSeoBlock'
  | '_rawPageContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityBlogsLandingFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityBlogsLandingGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityBlogsLandingEdge>;
  nodes: Array<SanityBlogsLanding>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityBlogsLandingSortInput = {
  fields?: Maybe<Array<Maybe<SanityBlogsLandingFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityBlogSortInput = {
  fields?: Maybe<Array<Maybe<SanityBlogFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityBlogTextBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  blockText?: Maybe<SanityBlockContent>;
  _rawBlockText?: Maybe<Scalars['JSON']>;
};


export type SanityBlogTextBlock_RawBlockTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityColumn = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  columnContent?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawColumnContent?: Maybe<Scalars['JSON']>;
};


export type SanityColumn_RawColumnContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityColumnFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  columnContent?: Maybe<SanityBlockFilterListInput>;
  _rawColumnContent?: Maybe<JsonQueryOperatorInput>;
};

export type SanityColumnOrLinkOrSeo = SanityColumn | SanityLink | SanitySeo;

export type SanityContactCard = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  contactDetailName?: Maybe<Scalars['String']>;
  contactDetailValue?: Maybe<Scalars['String']>;
};

export type SanityContactDetails = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blockTitle?: Maybe<Scalars['String']>;
  getInTouchTextBlock?: Maybe<SanityBlockContent>;
  contactCards?: Maybe<Array<Maybe<SanityContactCard>>>;
  _rawGetInTouchTextBlock?: Maybe<Scalars['JSON']>;
  _rawContactCards?: Maybe<Scalars['JSON']>;
};


export type SanityContactDetails_RawGetInTouchTextBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityContactDetails_RawContactCardsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityContactDetailsOrHeroPlainOrWideImageBlock = SanityContactDetails | SanityHeroPlain | SanityWideImageBlock;

export type SanityContactFormText = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  formHeader?: Maybe<Scalars['String']>;
  formDescription?: Maybe<Scalars['String']>;
};

export type SanityContactFormTextFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  formHeader?: Maybe<StringQueryOperatorInput>;
  formDescription?: Maybe<StringQueryOperatorInput>;
};

export type SanityContactPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageContent?: Maybe<Array<Maybe<SanityContactDetailsOrHeroPlainOrWideImageBlock>>>;
  contactFormCustomerTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  contactFormText?: Maybe<SanityContactFormText>;
  contactFormThankYouMessage?: Maybe<SanityBlockContent>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  _rawContactFormText?: Maybe<Scalars['JSON']>;
  _rawContactFormThankYouMessage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityContactPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityContactPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityContactPage_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityContactPage_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityContactPage_RawContactFormTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityContactPage_RawContactFormThankYouMessageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityContactPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityContactPageEdge>;
  nodes: Array<SanityContactPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityContactPageGroupConnection>;
};


export type SanityContactPageConnectionDistinctArgs = {
  field: SanityContactPageFieldsEnum;
};


export type SanityContactPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityContactPageFieldsEnum;
};

export type SanityContactPageEdge = {
  next?: Maybe<SanityContactPage>;
  node: SanityContactPage;
  previous?: Maybe<SanityContactPage>;
};

export type SanityContactPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | 'contactFormCustomerTypes'
  | 'contactFormText____key'
  | 'contactFormText____type'
  | 'contactFormText___formHeader'
  | 'contactFormText___formDescription'
  | 'contactFormThankYouMessage____key'
  | 'contactFormThankYouMessage____type'
  | 'contactFormThankYouMessage___content'
  | 'contactFormThankYouMessage___content____key'
  | 'contactFormThankYouMessage___content____type'
  | 'contactFormThankYouMessage___content___children'
  | 'contactFormThankYouMessage___content___children____key'
  | 'contactFormThankYouMessage___content___children____type'
  | 'contactFormThankYouMessage___content___children___marks'
  | 'contactFormThankYouMessage___content___children___text'
  | 'contactFormThankYouMessage___content___style'
  | 'contactFormThankYouMessage___content___list'
  | 'contactFormThankYouMessage___content____rawChildren'
  | 'contactFormThankYouMessage____rawContent'
  | '_rawSeoBlock'
  | '_rawPageContent'
  | '_rawContactFormText'
  | '_rawContactFormThankYouMessage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityContactPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  contactFormCustomerTypes?: Maybe<StringQueryOperatorInput>;
  contactFormText?: Maybe<SanityContactFormTextFilterInput>;
  contactFormThankYouMessage?: Maybe<SanityBlockContentFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  _rawContactFormText?: Maybe<JsonQueryOperatorInput>;
  _rawContactFormThankYouMessage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityContactPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityContactPageEdge>;
  nodes: Array<SanityContactPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityContactPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityContactPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityCta = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  ctaText?: Maybe<SanityBlockContent>;
  ctaLink?: Maybe<SanityLink>;
  _rawCtaText?: Maybe<Scalars['JSON']>;
  _rawCtaLink?: Maybe<Scalars['JSON']>;
};


export type SanityCta_RawCtaTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityCta_RawCtaLinkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityCtaOrCustomProductPreviewOrLandingHeroOrLeftRightBlockOrPreviewProductsOrProductHeroOrProductRangeTabsOrProductSliderOrProjectsPreviewOrRangeInformationBlockOrTextSection = SanityCta | SanityCustomProductPreview | SanityLandingHero | SanityLeftRightBlock | SanityPreviewProducts | SanityProductHero | SanityProductRangeTabs | SanityProductSlider | SanityProjectsPreview | SanityRangeInformationBlock | SanityTextSection;

export type SanityCtaOrHeroPlainOrLeftRightBlockOrOurTeamOrPreviewProductsOrRangeInformationBlockOrSliderOrTestimonialsOrTextSection = SanityCta | SanityHeroPlain | SanityLeftRightBlock | SanityOurTeam | SanityPreviewProducts | SanityRangeInformationBlock | SanitySlider | SanityTestimonials | SanityTextSection;

export type SanityCtaOrHeroPlainOrLeftRightBlockOrProjectsPreviewOrTextSection = SanityCta | SanityHeroPlain | SanityLeftRightBlock | SanityProjectsPreview | SanityTextSection;

export type SanityCtaOrLandingHeroOrLeftRightBlockOrPreviewProductsOrProductRangeTabsOrProjectsPreviewOrRangeInformationBlockOrSliderOrTextSection = SanityCta | SanityLandingHero | SanityLeftRightBlock | SanityPreviewProducts | SanityProductRangeTabs | SanityProjectsPreview | SanityRangeInformationBlock | SanitySlider | SanityTextSection;

export type SanityCtaOrLandingHeroOrLeftRightBlockOrPreviewProductsOrProjectsPreviewOrRangeInformationBlockOrSliderOrTextSection = SanityCta | SanityLandingHero | SanityLeftRightBlock | SanityPreviewProducts | SanityProjectsPreview | SanityRangeInformationBlock | SanitySlider | SanityTextSection;

export type SanityCustomProduct = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  productTitle?: Maybe<Scalars['String']>;
  productDescription?: Maybe<Scalars['String']>;
  productImage?: Maybe<Array<Maybe<SanityImage>>>;
  _rawProductImage?: Maybe<Scalars['JSON']>;
};


export type SanityCustomProduct_RawProductImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityCustomProductPreview = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  productTitle?: Maybe<Scalars['String']>;
  customProducts?: Maybe<Array<Maybe<SanityCustomProduct>>>;
  _rawCustomProducts?: Maybe<Scalars['JSON']>;
};


export type SanityCustomProductPreview_RawCustomProductsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityDetailedTab = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  productImage?: Maybe<SanityImage>;
  productDescription?: Maybe<Scalars['String']>;
  productDetails?: Maybe<Array<Maybe<SanityBlockWithHeader>>>;
  productColors?: Maybe<Array<Maybe<SanityTextureCard>>>;
  buttonLink?: Maybe<SanityLink>;
  _rawProductImage?: Maybe<Scalars['JSON']>;
  _rawProductDetails?: Maybe<Scalars['JSON']>;
  _rawProductColors?: Maybe<Scalars['JSON']>;
  _rawButtonLink?: Maybe<Scalars['JSON']>;
};


export type SanityDetailedTab_RawProductImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityDetailedTab_RawProductDetailsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityDetailedTab_RawProductColorsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityDetailedTab_RawButtonLinkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityDetailedTabOrPlainTabOrStandardTabOrSwatchlessTab = SanityDetailedTab | SanityPlainTab | SanityStandardTab | SanitySwatchlessTab;

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
};

export type SanityDownloadableFile = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  documentImage?: Maybe<SanityImage>;
  fileObject?: Maybe<SanityFile>;
  _rawDocumentImage?: Maybe<Scalars['JSON']>;
  _rawFileObject?: Maybe<Scalars['JSON']>;
};


export type SanityDownloadableFile_RawDocumentImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityDownloadableFile_RawFileObjectArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityDownloadGrid = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  downloadableDocuments?: Maybe<Array<Maybe<SanityDownloadableFile>>>;
  _rawDownloadableDocuments?: Maybe<Scalars['JSON']>;
};


export type SanityDownloadGrid_RawDownloadableDocumentsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityDownloadGridOrLandingHeroOrLeftRightBlock = SanityDownloadGrid | SanityLandingHero | SanityLeftRightBlock;

export type SanityFile = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
  _rawAsset?: Maybe<Scalars['JSON']>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
  _rawSource?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityFileAssetGroupConnection>;
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export type SanityFileAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'path'
  | 'url'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawSource'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFileAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityFooter = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  footerSocialLinks?: Maybe<Array<Maybe<SanitySocialLink>>>;
  menus?: Maybe<Array<Maybe<SanityMenu>>>;
  _rawFooterSocialLinks?: Maybe<Scalars['JSON']>;
  _rawMenus?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFooter_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFooter_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFooter_RawFooterSocialLinksArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFooter_RawMenusArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFooterConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFooterEdge>;
  nodes: Array<SanityFooter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityFooterGroupConnection>;
};


export type SanityFooterConnectionDistinctArgs = {
  field: SanityFooterFieldsEnum;
};


export type SanityFooterConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFooterFieldsEnum;
};

export type SanityFooterEdge = {
  next?: Maybe<SanityFooter>;
  node: SanityFooter;
  previous?: Maybe<SanityFooter>;
};

export type SanityFooterFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'footerSocialLinks'
  | 'footerSocialLinks____key'
  | 'footerSocialLinks____type'
  | 'footerSocialLinks___socialIcon____key'
  | 'footerSocialLinks___socialIcon____type'
  | 'footerSocialLinks___socialIcon___asset____id'
  | 'footerSocialLinks___socialIcon___asset____type'
  | 'footerSocialLinks___socialIcon___asset____createdAt'
  | 'footerSocialLinks___socialIcon___asset____updatedAt'
  | 'footerSocialLinks___socialIcon___asset____rev'
  | 'footerSocialLinks___socialIcon___asset____key'
  | 'footerSocialLinks___socialIcon___asset___originalFilename'
  | 'footerSocialLinks___socialIcon___asset___label'
  | 'footerSocialLinks___socialIcon___asset___title'
  | 'footerSocialLinks___socialIcon___asset___description'
  | 'footerSocialLinks___socialIcon___asset___sha1hash'
  | 'footerSocialLinks___socialIcon___asset___extension'
  | 'footerSocialLinks___socialIcon___asset___mimeType'
  | 'footerSocialLinks___socialIcon___asset___size'
  | 'footerSocialLinks___socialIcon___asset___assetId'
  | 'footerSocialLinks___socialIcon___asset___path'
  | 'footerSocialLinks___socialIcon___asset___url'
  | 'footerSocialLinks___socialIcon___asset____rawMetadata'
  | 'footerSocialLinks___socialIcon___asset____rawSource'
  | 'footerSocialLinks___socialIcon___asset___id'
  | 'footerSocialLinks___socialIcon___asset___children'
  | 'footerSocialLinks___socialIcon___hotspot____key'
  | 'footerSocialLinks___socialIcon___hotspot____type'
  | 'footerSocialLinks___socialIcon___hotspot___x'
  | 'footerSocialLinks___socialIcon___hotspot___y'
  | 'footerSocialLinks___socialIcon___hotspot___height'
  | 'footerSocialLinks___socialIcon___hotspot___width'
  | 'footerSocialLinks___socialIcon___crop____key'
  | 'footerSocialLinks___socialIcon___crop____type'
  | 'footerSocialLinks___socialIcon___crop___top'
  | 'footerSocialLinks___socialIcon___crop___bottom'
  | 'footerSocialLinks___socialIcon___crop___left'
  | 'footerSocialLinks___socialIcon___crop___right'
  | 'footerSocialLinks___socialIcon____rawAsset'
  | 'footerSocialLinks___socialIcon____rawHotspot'
  | 'footerSocialLinks___socialIcon____rawCrop'
  | 'footerSocialLinks___linkTo'
  | 'footerSocialLinks____rawSocialIcon'
  | 'menus'
  | 'menus____key'
  | 'menus____type'
  | 'menus___title'
  | 'menus___menuNameLink'
  | 'menus___menuItems'
  | 'menus___menuItems____key'
  | 'menus___menuItems____type'
  | 'menus___menuItems___linktext'
  | 'menus___menuItems___url'
  | 'menus____rawMenuItems'
  | '_rawFooterSocialLinks'
  | '_rawMenus'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFooterFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  footerSocialLinks?: Maybe<SanitySocialLinkFilterListInput>;
  menus?: Maybe<SanityMenuFilterListInput>;
  _rawFooterSocialLinks?: Maybe<JsonQueryOperatorInput>;
  _rawMenus?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFooterGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFooterEdge>;
  nodes: Array<SanityFooter>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityFooterSortInput = {
  fields?: Maybe<Array<Maybe<SanityFooterFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityFreeQuotePage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  header?: Maybe<Scalars['String']>;
  subHeader?: Maybe<Scalars['String']>;
  thankYouMessage?: Maybe<SanityBlockContent>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawThankYouMessage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFreeQuotePage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFreeQuotePage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFreeQuotePage_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFreeQuotePage_RawThankYouMessageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFreeQuotePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFreeQuotePageEdge>;
  nodes: Array<SanityFreeQuotePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityFreeQuotePageGroupConnection>;
};


export type SanityFreeQuotePageConnectionDistinctArgs = {
  field: SanityFreeQuotePageFieldsEnum;
};


export type SanityFreeQuotePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFreeQuotePageFieldsEnum;
};

export type SanityFreeQuotePageEdge = {
  next?: Maybe<SanityFreeQuotePage>;
  node: SanityFreeQuotePage;
  previous?: Maybe<SanityFreeQuotePage>;
};

export type SanityFreeQuotePageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | 'header'
  | 'subHeader'
  | 'thankYouMessage____key'
  | 'thankYouMessage____type'
  | 'thankYouMessage___content'
  | 'thankYouMessage___content____key'
  | 'thankYouMessage___content____type'
  | 'thankYouMessage___content___children'
  | 'thankYouMessage___content___children____key'
  | 'thankYouMessage___content___children____type'
  | 'thankYouMessage___content___children___marks'
  | 'thankYouMessage___content___children___text'
  | 'thankYouMessage___content___style'
  | 'thankYouMessage___content___list'
  | 'thankYouMessage___content____rawChildren'
  | 'thankYouMessage____rawContent'
  | '_rawSeoBlock'
  | '_rawThankYouMessage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFreeQuotePageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  header?: Maybe<StringQueryOperatorInput>;
  subHeader?: Maybe<StringQueryOperatorInput>;
  thankYouMessage?: Maybe<SanityBlockContentFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawThankYouMessage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFreeQuotePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFreeQuotePageEdge>;
  nodes: Array<SanityFreeQuotePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityFreeQuotePageSortInput = {
  fields?: Maybe<Array<Maybe<SanityFreeQuotePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityGeopoint = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
  lng?: Maybe<FloatQueryOperatorInput>;
  alt?: Maybe<FloatQueryOperatorInput>;
};

export type SanityGetInTouchCta = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  mainText?: Maybe<Scalars['String']>;
  subText?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  buttonLink?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityGetInTouchCta_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityGetInTouchCta_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityGetInTouchCtaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityGetInTouchCtaEdge>;
  nodes: Array<SanityGetInTouchCta>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityGetInTouchCtaGroupConnection>;
};


export type SanityGetInTouchCtaConnectionDistinctArgs = {
  field: SanityGetInTouchCtaFieldsEnum;
};


export type SanityGetInTouchCtaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityGetInTouchCtaFieldsEnum;
};

export type SanityGetInTouchCtaEdge = {
  next?: Maybe<SanityGetInTouchCta>;
  node: SanityGetInTouchCta;
  previous?: Maybe<SanityGetInTouchCta>;
};

export type SanityGetInTouchCtaFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'mainText'
  | 'subText'
  | 'buttonText'
  | 'buttonLink'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityGetInTouchCtaFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  mainText?: Maybe<StringQueryOperatorInput>;
  subText?: Maybe<StringQueryOperatorInput>;
  buttonText?: Maybe<StringQueryOperatorInput>;
  buttonLink?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityGetInTouchCtaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityGetInTouchCtaEdge>;
  nodes: Array<SanityGetInTouchCta>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityGetInTouchCtaSortInput = {
  fields?: Maybe<Array<Maybe<SanityGetInTouchCtaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityHeader = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  headerLogo?: Maybe<SanityImage>;
  MobileLogo?: Maybe<SanityImage>;
  headerButton?: Maybe<SanityLink>;
  topBarLinks?: Maybe<Array<Maybe<SanityLink>>>;
  menuTabs?: Maybe<Array<Maybe<SanityMenuTab>>>;
  headerSocialLinks?: Maybe<Array<Maybe<SanitySocialLink>>>;
  _rawHeaderLogo?: Maybe<Scalars['JSON']>;
  _rawMobileLogo?: Maybe<Scalars['JSON']>;
  _rawHeaderButton?: Maybe<Scalars['JSON']>;
  _rawTopBarLinks?: Maybe<Scalars['JSON']>;
  _rawMenuTabs?: Maybe<Scalars['JSON']>;
  _rawHeaderSocialLinks?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityHeader_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityHeader_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityHeader_RawHeaderLogoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHeader_RawMobileLogoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHeader_RawHeaderButtonArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHeader_RawTopBarLinksArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHeader_RawMenuTabsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHeader_RawHeaderSocialLinksArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityHeaderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityHeaderEdge>;
  nodes: Array<SanityHeader>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityHeaderGroupConnection>;
};


export type SanityHeaderConnectionDistinctArgs = {
  field: SanityHeaderFieldsEnum;
};


export type SanityHeaderConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityHeaderFieldsEnum;
};

export type SanityHeaderEdge = {
  next?: Maybe<SanityHeader>;
  node: SanityHeader;
  previous?: Maybe<SanityHeader>;
};

export type SanityHeaderFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'headerLogo____key'
  | 'headerLogo____type'
  | 'headerLogo___asset____id'
  | 'headerLogo___asset____type'
  | 'headerLogo___asset____createdAt'
  | 'headerLogo___asset____updatedAt'
  | 'headerLogo___asset____rev'
  | 'headerLogo___asset____key'
  | 'headerLogo___asset___originalFilename'
  | 'headerLogo___asset___label'
  | 'headerLogo___asset___title'
  | 'headerLogo___asset___description'
  | 'headerLogo___asset___sha1hash'
  | 'headerLogo___asset___extension'
  | 'headerLogo___asset___mimeType'
  | 'headerLogo___asset___size'
  | 'headerLogo___asset___assetId'
  | 'headerLogo___asset___path'
  | 'headerLogo___asset___url'
  | 'headerLogo___asset___metadata____key'
  | 'headerLogo___asset___metadata____type'
  | 'headerLogo___asset___metadata___lqip'
  | 'headerLogo___asset___metadata___hasAlpha'
  | 'headerLogo___asset___metadata___isOpaque'
  | 'headerLogo___asset___metadata____rawLocation'
  | 'headerLogo___asset___metadata____rawDimensions'
  | 'headerLogo___asset___metadata____rawPalette'
  | 'headerLogo___asset___source____key'
  | 'headerLogo___asset___source____type'
  | 'headerLogo___asset___source___name'
  | 'headerLogo___asset___source___id'
  | 'headerLogo___asset___source___url'
  | 'headerLogo___asset____rawMetadata'
  | 'headerLogo___asset____rawSource'
  | 'headerLogo___asset___fixed___width'
  | 'headerLogo___asset___fixed___height'
  | 'headerLogo___asset___fixed___src'
  | 'headerLogo___asset___fixed___srcSet'
  | 'headerLogo___asset___fixed___base64'
  | 'headerLogo___asset___fixed___srcWebp'
  | 'headerLogo___asset___fixed___srcSetWebp'
  | 'headerLogo___asset___fluid___aspectRatio'
  | 'headerLogo___asset___fluid___src'
  | 'headerLogo___asset___fluid___srcSet'
  | 'headerLogo___asset___fluid___sizes'
  | 'headerLogo___asset___fluid___base64'
  | 'headerLogo___asset___fluid___srcWebp'
  | 'headerLogo___asset___fluid___srcSetWebp'
  | 'headerLogo___asset___id'
  | 'headerLogo___asset___parent___id'
  | 'headerLogo___asset___parent___children'
  | 'headerLogo___asset___children'
  | 'headerLogo___asset___children___id'
  | 'headerLogo___asset___children___children'
  | 'headerLogo___asset___internal___content'
  | 'headerLogo___asset___internal___contentDigest'
  | 'headerLogo___asset___internal___description'
  | 'headerLogo___asset___internal___fieldOwners'
  | 'headerLogo___asset___internal___ignoreType'
  | 'headerLogo___asset___internal___mediaType'
  | 'headerLogo___asset___internal___owner'
  | 'headerLogo___asset___internal___type'
  | 'headerLogo___hotspot____key'
  | 'headerLogo___hotspot____type'
  | 'headerLogo___hotspot___x'
  | 'headerLogo___hotspot___y'
  | 'headerLogo___hotspot___height'
  | 'headerLogo___hotspot___width'
  | 'headerLogo___crop____key'
  | 'headerLogo___crop____type'
  | 'headerLogo___crop___top'
  | 'headerLogo___crop___bottom'
  | 'headerLogo___crop___left'
  | 'headerLogo___crop___right'
  | 'headerLogo____rawAsset'
  | 'headerLogo____rawHotspot'
  | 'headerLogo____rawCrop'
  | 'MobileLogo____key'
  | 'MobileLogo____type'
  | 'MobileLogo___asset____id'
  | 'MobileLogo___asset____type'
  | 'MobileLogo___asset____createdAt'
  | 'MobileLogo___asset____updatedAt'
  | 'MobileLogo___asset____rev'
  | 'MobileLogo___asset____key'
  | 'MobileLogo___asset___originalFilename'
  | 'MobileLogo___asset___label'
  | 'MobileLogo___asset___title'
  | 'MobileLogo___asset___description'
  | 'MobileLogo___asset___sha1hash'
  | 'MobileLogo___asset___extension'
  | 'MobileLogo___asset___mimeType'
  | 'MobileLogo___asset___size'
  | 'MobileLogo___asset___assetId'
  | 'MobileLogo___asset___path'
  | 'MobileLogo___asset___url'
  | 'MobileLogo___asset___metadata____key'
  | 'MobileLogo___asset___metadata____type'
  | 'MobileLogo___asset___metadata___lqip'
  | 'MobileLogo___asset___metadata___hasAlpha'
  | 'MobileLogo___asset___metadata___isOpaque'
  | 'MobileLogo___asset___metadata____rawLocation'
  | 'MobileLogo___asset___metadata____rawDimensions'
  | 'MobileLogo___asset___metadata____rawPalette'
  | 'MobileLogo___asset___source____key'
  | 'MobileLogo___asset___source____type'
  | 'MobileLogo___asset___source___name'
  | 'MobileLogo___asset___source___id'
  | 'MobileLogo___asset___source___url'
  | 'MobileLogo___asset____rawMetadata'
  | 'MobileLogo___asset____rawSource'
  | 'MobileLogo___asset___fixed___width'
  | 'MobileLogo___asset___fixed___height'
  | 'MobileLogo___asset___fixed___src'
  | 'MobileLogo___asset___fixed___srcSet'
  | 'MobileLogo___asset___fixed___base64'
  | 'MobileLogo___asset___fixed___srcWebp'
  | 'MobileLogo___asset___fixed___srcSetWebp'
  | 'MobileLogo___asset___fluid___aspectRatio'
  | 'MobileLogo___asset___fluid___src'
  | 'MobileLogo___asset___fluid___srcSet'
  | 'MobileLogo___asset___fluid___sizes'
  | 'MobileLogo___asset___fluid___base64'
  | 'MobileLogo___asset___fluid___srcWebp'
  | 'MobileLogo___asset___fluid___srcSetWebp'
  | 'MobileLogo___asset___id'
  | 'MobileLogo___asset___parent___id'
  | 'MobileLogo___asset___parent___children'
  | 'MobileLogo___asset___children'
  | 'MobileLogo___asset___children___id'
  | 'MobileLogo___asset___children___children'
  | 'MobileLogo___asset___internal___content'
  | 'MobileLogo___asset___internal___contentDigest'
  | 'MobileLogo___asset___internal___description'
  | 'MobileLogo___asset___internal___fieldOwners'
  | 'MobileLogo___asset___internal___ignoreType'
  | 'MobileLogo___asset___internal___mediaType'
  | 'MobileLogo___asset___internal___owner'
  | 'MobileLogo___asset___internal___type'
  | 'MobileLogo___hotspot____key'
  | 'MobileLogo___hotspot____type'
  | 'MobileLogo___hotspot___x'
  | 'MobileLogo___hotspot___y'
  | 'MobileLogo___hotspot___height'
  | 'MobileLogo___hotspot___width'
  | 'MobileLogo___crop____key'
  | 'MobileLogo___crop____type'
  | 'MobileLogo___crop___top'
  | 'MobileLogo___crop___bottom'
  | 'MobileLogo___crop___left'
  | 'MobileLogo___crop___right'
  | 'MobileLogo____rawAsset'
  | 'MobileLogo____rawHotspot'
  | 'MobileLogo____rawCrop'
  | 'headerButton____key'
  | 'headerButton____type'
  | 'headerButton___linktext'
  | 'headerButton___url'
  | 'topBarLinks'
  | 'topBarLinks____key'
  | 'topBarLinks____type'
  | 'topBarLinks___linktext'
  | 'topBarLinks___url'
  | 'menuTabs'
  | 'menuTabs____key'
  | 'menuTabs____type'
  | 'menuTabs___menuName'
  | 'menuTabs___menuItems'
  | 'menuTabs___menuItems____key'
  | 'menuTabs___menuItems____type'
  | 'menuTabs___menuItems___title'
  | 'menuTabs___menuItems___menuNameLink'
  | 'menuTabs___menuItems___menuItems'
  | 'menuTabs___menuItems___menuItems____key'
  | 'menuTabs___menuItems___menuItems____type'
  | 'menuTabs___menuItems___menuItems___linktext'
  | 'menuTabs___menuItems___menuItems___url'
  | 'menuTabs___menuItems____rawMenuItems'
  | 'menuTabs____rawMenuItems'
  | 'headerSocialLinks'
  | 'headerSocialLinks____key'
  | 'headerSocialLinks____type'
  | 'headerSocialLinks___socialIcon____key'
  | 'headerSocialLinks___socialIcon____type'
  | 'headerSocialLinks___socialIcon___asset____id'
  | 'headerSocialLinks___socialIcon___asset____type'
  | 'headerSocialLinks___socialIcon___asset____createdAt'
  | 'headerSocialLinks___socialIcon___asset____updatedAt'
  | 'headerSocialLinks___socialIcon___asset____rev'
  | 'headerSocialLinks___socialIcon___asset____key'
  | 'headerSocialLinks___socialIcon___asset___originalFilename'
  | 'headerSocialLinks___socialIcon___asset___label'
  | 'headerSocialLinks___socialIcon___asset___title'
  | 'headerSocialLinks___socialIcon___asset___description'
  | 'headerSocialLinks___socialIcon___asset___sha1hash'
  | 'headerSocialLinks___socialIcon___asset___extension'
  | 'headerSocialLinks___socialIcon___asset___mimeType'
  | 'headerSocialLinks___socialIcon___asset___size'
  | 'headerSocialLinks___socialIcon___asset___assetId'
  | 'headerSocialLinks___socialIcon___asset___path'
  | 'headerSocialLinks___socialIcon___asset___url'
  | 'headerSocialLinks___socialIcon___asset____rawMetadata'
  | 'headerSocialLinks___socialIcon___asset____rawSource'
  | 'headerSocialLinks___socialIcon___asset___id'
  | 'headerSocialLinks___socialIcon___asset___children'
  | 'headerSocialLinks___socialIcon___hotspot____key'
  | 'headerSocialLinks___socialIcon___hotspot____type'
  | 'headerSocialLinks___socialIcon___hotspot___x'
  | 'headerSocialLinks___socialIcon___hotspot___y'
  | 'headerSocialLinks___socialIcon___hotspot___height'
  | 'headerSocialLinks___socialIcon___hotspot___width'
  | 'headerSocialLinks___socialIcon___crop____key'
  | 'headerSocialLinks___socialIcon___crop____type'
  | 'headerSocialLinks___socialIcon___crop___top'
  | 'headerSocialLinks___socialIcon___crop___bottom'
  | 'headerSocialLinks___socialIcon___crop___left'
  | 'headerSocialLinks___socialIcon___crop___right'
  | 'headerSocialLinks___socialIcon____rawAsset'
  | 'headerSocialLinks___socialIcon____rawHotspot'
  | 'headerSocialLinks___socialIcon____rawCrop'
  | 'headerSocialLinks___linkTo'
  | 'headerSocialLinks____rawSocialIcon'
  | '_rawHeaderLogo'
  | '_rawMobileLogo'
  | '_rawHeaderButton'
  | '_rawTopBarLinks'
  | '_rawMenuTabs'
  | '_rawHeaderSocialLinks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityHeaderFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  headerLogo?: Maybe<SanityImageFilterInput>;
  MobileLogo?: Maybe<SanityImageFilterInput>;
  headerButton?: Maybe<SanityLinkFilterInput>;
  topBarLinks?: Maybe<SanityLinkFilterListInput>;
  menuTabs?: Maybe<SanityMenuTabFilterListInput>;
  headerSocialLinks?: Maybe<SanitySocialLinkFilterListInput>;
  _rawHeaderLogo?: Maybe<JsonQueryOperatorInput>;
  _rawMobileLogo?: Maybe<JsonQueryOperatorInput>;
  _rawHeaderButton?: Maybe<JsonQueryOperatorInput>;
  _rawTopBarLinks?: Maybe<JsonQueryOperatorInput>;
  _rawMenuTabs?: Maybe<JsonQueryOperatorInput>;
  _rawHeaderSocialLinks?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityHeaderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityHeaderEdge>;
  nodes: Array<SanityHeader>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityHeaderSortInput = {
  fields?: Maybe<Array<Maybe<SanityHeaderFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityHeroPlain = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  heroText?: Maybe<Scalars['String']>;
};

export type SanityHeroPlainOrTextSection = SanityHeroPlain | SanityTextSection;

export type SanityHeroSlide = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  slideImage?: Maybe<SanityImage>;
  _rawSlideImage?: Maybe<Scalars['JSON']>;
};


export type SanityHeroSlide_RawSlideImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityHeroSlideFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  slideImage?: Maybe<SanityImageFilterInput>;
  _rawSlideImage?: Maybe<JsonQueryOperatorInput>;
};

export type SanityHeroSlideFilterListInput = {
  elemMatch?: Maybe<SanityHeroSlideFilterInput>;
};

export type SanityHomeHero = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  heroText?: Maybe<SanityBlockContent>;
  links?: Maybe<Array<Maybe<SanityLink>>>;
  heroSlides?: Maybe<Array<Maybe<SanityHeroSlide>>>;
  _rawHeroText?: Maybe<Scalars['JSON']>;
  _rawLinks?: Maybe<Scalars['JSON']>;
  _rawHeroSlides?: Maybe<Scalars['JSON']>;
};


export type SanityHomeHero_RawHeroTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomeHero_RawLinksArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomeHero_RawHeroSlidesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityHomeHeroFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  heroText?: Maybe<SanityBlockContentFilterInput>;
  links?: Maybe<SanityLinkFilterListInput>;
  heroSlides?: Maybe<SanityHeroSlideFilterListInput>;
  _rawHeroText?: Maybe<JsonQueryOperatorInput>;
  _rawLinks?: Maybe<JsonQueryOperatorInput>;
  _rawHeroSlides?: Maybe<JsonQueryOperatorInput>;
};

export type SanityHomeMenuTab = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  tabTitle?: Maybe<Scalars['String']>;
  tabLinkUrl?: Maybe<Scalars['String']>;
  tabImages?: Maybe<Array<Maybe<SanityImage>>>;
  _rawTabImages?: Maybe<Scalars['JSON']>;
};


export type SanityHomeMenuTab_RawTabImagesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityHomeMenuTabFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  tabTitle?: Maybe<StringQueryOperatorInput>;
  tabLinkUrl?: Maybe<StringQueryOperatorInput>;
  tabImages?: Maybe<SanityImageFilterListInput>;
  _rawTabImages?: Maybe<JsonQueryOperatorInput>;
};

export type SanityHomeMenuTabFilterListInput = {
  elemMatch?: Maybe<SanityHomeMenuTabFilterInput>;
};

export type SanityHomePage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  homeHero?: Maybe<SanityHomeHero>;
  textSection?: Maybe<SanityTextSection>;
  homeMenu?: Maybe<Array<Maybe<SanityHomeMenuTab>>>;
  pageContent?: Maybe<Array<Maybe<SanityLeftRightBlockOrProjectsPreviewOrSliderOrTextSection>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawHomeHero?: Maybe<Scalars['JSON']>;
  _rawTextSection?: Maybe<Scalars['JSON']>;
  _rawHomeMenu?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityHomePage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityHomePage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityHomePage_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomePage_RawHomeHeroArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomePage_RawTextSectionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomePage_RawHomeMenuArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomePage_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityHomePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityHomePageEdge>;
  nodes: Array<SanityHomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityHomePageGroupConnection>;
};


export type SanityHomePageConnectionDistinctArgs = {
  field: SanityHomePageFieldsEnum;
};


export type SanityHomePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityHomePageFieldsEnum;
};

export type SanityHomePageEdge = {
  next?: Maybe<SanityHomePage>;
  node: SanityHomePage;
  previous?: Maybe<SanityHomePage>;
};

export type SanityHomePageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | 'homeHero____key'
  | 'homeHero____type'
  | 'homeHero___heroText____key'
  | 'homeHero___heroText____type'
  | 'homeHero___heroText___content'
  | 'homeHero___heroText___content____key'
  | 'homeHero___heroText___content____type'
  | 'homeHero___heroText___content___children'
  | 'homeHero___heroText___content___style'
  | 'homeHero___heroText___content___list'
  | 'homeHero___heroText___content____rawChildren'
  | 'homeHero___heroText____rawContent'
  | 'homeHero___links'
  | 'homeHero___links____key'
  | 'homeHero___links____type'
  | 'homeHero___links___linktext'
  | 'homeHero___links___url'
  | 'homeHero___heroSlides'
  | 'homeHero___heroSlides____key'
  | 'homeHero___heroSlides____type'
  | 'homeHero___heroSlides___slideImage____key'
  | 'homeHero___heroSlides___slideImage____type'
  | 'homeHero___heroSlides___slideImage____rawAsset'
  | 'homeHero___heroSlides___slideImage____rawHotspot'
  | 'homeHero___heroSlides___slideImage____rawCrop'
  | 'homeHero___heroSlides____rawSlideImage'
  | 'homeHero____rawHeroText'
  | 'homeHero____rawLinks'
  | 'homeHero____rawHeroSlides'
  | 'textSection____key'
  | 'textSection____type'
  | 'textSection___title'
  | 'textSection___textContent____key'
  | 'textSection___textContent____type'
  | 'textSection___textContent___content'
  | 'textSection___textContent___content____key'
  | 'textSection___textContent___content____type'
  | 'textSection___textContent___content___children'
  | 'textSection___textContent___content___style'
  | 'textSection___textContent___content___list'
  | 'textSection___textContent___content____rawChildren'
  | 'textSection___textContent____rawContent'
  | 'textSection____rawTextContent'
  | 'homeMenu'
  | 'homeMenu____key'
  | 'homeMenu____type'
  | 'homeMenu___tabTitle'
  | 'homeMenu___tabLinkUrl'
  | 'homeMenu___tabImages'
  | 'homeMenu___tabImages____key'
  | 'homeMenu___tabImages____type'
  | 'homeMenu___tabImages___asset____id'
  | 'homeMenu___tabImages___asset____type'
  | 'homeMenu___tabImages___asset____createdAt'
  | 'homeMenu___tabImages___asset____updatedAt'
  | 'homeMenu___tabImages___asset____rev'
  | 'homeMenu___tabImages___asset____key'
  | 'homeMenu___tabImages___asset___originalFilename'
  | 'homeMenu___tabImages___asset___label'
  | 'homeMenu___tabImages___asset___title'
  | 'homeMenu___tabImages___asset___description'
  | 'homeMenu___tabImages___asset___sha1hash'
  | 'homeMenu___tabImages___asset___extension'
  | 'homeMenu___tabImages___asset___mimeType'
  | 'homeMenu___tabImages___asset___size'
  | 'homeMenu___tabImages___asset___assetId'
  | 'homeMenu___tabImages___asset___path'
  | 'homeMenu___tabImages___asset___url'
  | 'homeMenu___tabImages___asset____rawMetadata'
  | 'homeMenu___tabImages___asset____rawSource'
  | 'homeMenu___tabImages___asset___id'
  | 'homeMenu___tabImages___asset___children'
  | 'homeMenu___tabImages___hotspot____key'
  | 'homeMenu___tabImages___hotspot____type'
  | 'homeMenu___tabImages___hotspot___x'
  | 'homeMenu___tabImages___hotspot___y'
  | 'homeMenu___tabImages___hotspot___height'
  | 'homeMenu___tabImages___hotspot___width'
  | 'homeMenu___tabImages___crop____key'
  | 'homeMenu___tabImages___crop____type'
  | 'homeMenu___tabImages___crop___top'
  | 'homeMenu___tabImages___crop___bottom'
  | 'homeMenu___tabImages___crop___left'
  | 'homeMenu___tabImages___crop___right'
  | 'homeMenu___tabImages____rawAsset'
  | 'homeMenu___tabImages____rawHotspot'
  | 'homeMenu___tabImages____rawCrop'
  | 'homeMenu____rawTabImages'
  | '_rawSeoBlock'
  | '_rawHomeHero'
  | '_rawTextSection'
  | '_rawHomeMenu'
  | '_rawPageContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityHomePageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  homeHero?: Maybe<SanityHomeHeroFilterInput>;
  textSection?: Maybe<SanityTextSectionFilterInput>;
  homeMenu?: Maybe<SanityHomeMenuTabFilterListInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawHomeHero?: Maybe<JsonQueryOperatorInput>;
  _rawTextSection?: Maybe<JsonQueryOperatorInput>;
  _rawHomeMenu?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityHomePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityHomePageEdge>;
  nodes: Array<SanityHomePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityHomePageSortInput = {
  fields?: Maybe<Array<Maybe<SanityHomePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  fixed?: Maybe<SanityImageFixed>;
  fluid?: Maybe<SanityImageFluid>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<SanityImageFormat>;
};


export type SanityImageAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  toFormat?: Maybe<SanityImageFormat>;
};

export type SanityImageAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityImageAssetGroupConnection>;
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export type SanityImageAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'path'
  | 'url'
  | 'metadata____key'
  | 'metadata____type'
  | 'metadata___location____key'
  | 'metadata___location____type'
  | 'metadata___location___lat'
  | 'metadata___location___lng'
  | 'metadata___location___alt'
  | 'metadata___dimensions____key'
  | 'metadata___dimensions____type'
  | 'metadata___dimensions___height'
  | 'metadata___dimensions___width'
  | 'metadata___dimensions___aspectRatio'
  | 'metadata___palette____key'
  | 'metadata___palette____type'
  | 'metadata___palette___darkMuted____key'
  | 'metadata___palette___darkMuted____type'
  | 'metadata___palette___darkMuted___background'
  | 'metadata___palette___darkMuted___foreground'
  | 'metadata___palette___darkMuted___population'
  | 'metadata___palette___darkMuted___title'
  | 'metadata___palette___lightVibrant____key'
  | 'metadata___palette___lightVibrant____type'
  | 'metadata___palette___lightVibrant___background'
  | 'metadata___palette___lightVibrant___foreground'
  | 'metadata___palette___lightVibrant___population'
  | 'metadata___palette___lightVibrant___title'
  | 'metadata___palette___darkVibrant____key'
  | 'metadata___palette___darkVibrant____type'
  | 'metadata___palette___darkVibrant___background'
  | 'metadata___palette___darkVibrant___foreground'
  | 'metadata___palette___darkVibrant___population'
  | 'metadata___palette___darkVibrant___title'
  | 'metadata___palette___vibrant____key'
  | 'metadata___palette___vibrant____type'
  | 'metadata___palette___vibrant___background'
  | 'metadata___palette___vibrant___foreground'
  | 'metadata___palette___vibrant___population'
  | 'metadata___palette___vibrant___title'
  | 'metadata___palette___dominant____key'
  | 'metadata___palette___dominant____type'
  | 'metadata___palette___dominant___background'
  | 'metadata___palette___dominant___foreground'
  | 'metadata___palette___dominant___population'
  | 'metadata___palette___dominant___title'
  | 'metadata___palette___lightMuted____key'
  | 'metadata___palette___lightMuted____type'
  | 'metadata___palette___lightMuted___background'
  | 'metadata___palette___lightMuted___foreground'
  | 'metadata___palette___lightMuted___population'
  | 'metadata___palette___lightMuted___title'
  | 'metadata___palette___muted____key'
  | 'metadata___palette___muted____type'
  | 'metadata___palette___muted___background'
  | 'metadata___palette___muted___foreground'
  | 'metadata___palette___muted___population'
  | 'metadata___palette___muted___title'
  | 'metadata___palette____rawDarkMuted'
  | 'metadata___palette____rawLightVibrant'
  | 'metadata___palette____rawDarkVibrant'
  | 'metadata___palette____rawVibrant'
  | 'metadata___palette____rawDominant'
  | 'metadata___palette____rawLightMuted'
  | 'metadata___palette____rawMuted'
  | 'metadata___lqip'
  | 'metadata___hasAlpha'
  | 'metadata___isOpaque'
  | 'metadata____rawLocation'
  | 'metadata____rawDimensions'
  | 'metadata____rawPalette'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawMetadata'
  | '_rawSource'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___base64'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___sizes'
  | 'fluid___base64'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  fixed?: Maybe<SanityImageFixedFilterInput>;
  fluid?: Maybe<SanityImageFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityImageAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  top?: Maybe<FloatQueryOperatorInput>;
  bottom?: Maybe<FloatQueryOperatorInput>;
  left?: Maybe<FloatQueryOperatorInput>;
  right?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensions = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  asset?: Maybe<SanityImageAssetFilterInput>;
  hotspot?: Maybe<SanityImageHotspotFilterInput>;
  crop?: Maybe<SanityImageCropFilterInput>;
  _rawAsset?: Maybe<JsonQueryOperatorInput>;
  _rawHotspot?: Maybe<JsonQueryOperatorInput>;
  _rawCrop?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImageFilterListInput = {
  elemMatch?: Maybe<SanityImageFilterInput>;
};

export type SanityImageFixed = {
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  base64?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type SanityImageFixedFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type SanityImageFluid = {
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes: Scalars['String'];
  base64?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type SanityImageFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type SanityImageFormat =
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type SanityImageHotspot = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  x?: Maybe<FloatQueryOperatorInput>;
  y?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<SanityGeopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<SanityGeopointFilterInput>;
  dimensions?: Maybe<SanityImageDimensionsFilterInput>;
  palette?: Maybe<SanityImagePaletteFilterInput>;
  lqip?: Maybe<StringQueryOperatorInput>;
  hasAlpha?: Maybe<BooleanQueryOperatorInput>;
  isOpaque?: Maybe<BooleanQueryOperatorInput>;
  _rawLocation?: Maybe<JsonQueryOperatorInput>;
  _rawDimensions?: Maybe<JsonQueryOperatorInput>;
  _rawPalette?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePalette = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  _rawDarkMuted?: Maybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDominant?: Maybe<JsonQueryOperatorInput>;
  _rawLightMuted?: Maybe<JsonQueryOperatorInput>;
  _rawMuted?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatch = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  foreground?: Maybe<StringQueryOperatorInput>;
  population?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SanityKitchenSink = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  sink?: Maybe<Array<Maybe<SanityColumnOrLinkOrSeo>>>;
  _rawSink?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityKitchenSink_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityKitchenSink_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityKitchenSink_RawSinkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityKitchenSinkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityKitchenSinkEdge>;
  nodes: Array<SanityKitchenSink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityKitchenSinkGroupConnection>;
};


export type SanityKitchenSinkConnectionDistinctArgs = {
  field: SanityKitchenSinkFieldsEnum;
};


export type SanityKitchenSinkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityKitchenSinkFieldsEnum;
};

export type SanityKitchenSinkEdge = {
  next?: Maybe<SanityKitchenSink>;
  node: SanityKitchenSink;
  previous?: Maybe<SanityKitchenSink>;
};

export type SanityKitchenSinkFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | '_rawSink'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityKitchenSinkFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawSink?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityKitchenSinkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityKitchenSinkEdge>;
  nodes: Array<SanityKitchenSink>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityKitchenSinkSortInput = {
  fields?: Maybe<Array<Maybe<SanityKitchenSinkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityLandingHero = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  HeroLink?: Maybe<SanityLink>;
  landingHeroSlides?: Maybe<Array<Maybe<SanityHeroSlide>>>;
  _rawHeroLink?: Maybe<Scalars['JSON']>;
  _rawLandingHeroSlides?: Maybe<Scalars['JSON']>;
};


export type SanityLandingHero_RawHeroLinkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityLandingHero_RawLandingHeroSlidesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityLeftRightBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blockTitle?: Maybe<Scalars['String']>;
  leftRightText?: Maybe<SanityBlockContent>;
  blockImage?: Maybe<SanityImage>;
  imageAlignRight?: Maybe<Scalars['Boolean']>;
  blockLink?: Maybe<SanityLink>;
  _rawLeftRightText?: Maybe<Scalars['JSON']>;
  _rawBlockImage?: Maybe<Scalars['JSON']>;
  _rawBlockLink?: Maybe<Scalars['JSON']>;
};


export type SanityLeftRightBlock_RawLeftRightTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityLeftRightBlock_RawBlockImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityLeftRightBlock_RawBlockLinkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityLeftRightBlockOrProjectsPreviewOrSliderOrTextSection = SanityLeftRightBlock | SanityProjectsPreview | SanitySlider | SanityTextSection;

export type SanityLink = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  linktext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityLinkFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  linktext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SanityLinkFilterListInput = {
  elemMatch?: Maybe<SanityLinkFilterInput>;
};

export type SanityMenu = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuNameLink?: Maybe<Scalars['String']>;
  menuItems?: Maybe<Array<Maybe<SanityLink>>>;
  _rawMenuItems?: Maybe<Scalars['JSON']>;
};


export type SanityMenu_RawMenuItemsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityMenuFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  menuNameLink?: Maybe<StringQueryOperatorInput>;
  menuItems?: Maybe<SanityLinkFilterListInput>;
  _rawMenuItems?: Maybe<JsonQueryOperatorInput>;
};

export type SanityMenuFilterListInput = {
  elemMatch?: Maybe<SanityMenuFilterInput>;
};

export type SanityMenuItem = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['Boolean']>;
  link?: Maybe<SanityLink>;
  nestedlinks?: Maybe<Array<Maybe<SanityLink>>>;
  _rawLink?: Maybe<Scalars['JSON']>;
  _rawNestedlinks?: Maybe<Scalars['JSON']>;
};


export type SanityMenuItem_RawLinkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityMenuItem_RawNestedlinksArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityMenuItemFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  tag?: Maybe<BooleanQueryOperatorInput>;
  link?: Maybe<SanityLinkFilterInput>;
  nestedlinks?: Maybe<SanityLinkFilterListInput>;
  _rawLink?: Maybe<JsonQueryOperatorInput>;
  _rawNestedlinks?: Maybe<JsonQueryOperatorInput>;
};

export type SanityMenuItemFilterListInput = {
  elemMatch?: Maybe<SanityMenuItemFilterInput>;
};

export type SanityMenuTab = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  menuName?: Maybe<Scalars['String']>;
  menuItems?: Maybe<Array<Maybe<SanityMenu>>>;
  _rawMenuItems?: Maybe<Scalars['JSON']>;
};


export type SanityMenuTab_RawMenuItemsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityMenuTabFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  menuName?: Maybe<StringQueryOperatorInput>;
  menuItems?: Maybe<SanityMenuFilterListInput>;
  _rawMenuItems?: Maybe<JsonQueryOperatorInput>;
};

export type SanityMenuTabFilterListInput = {
  elemMatch?: Maybe<SanityMenuTabFilterInput>;
};

export type SanityNavigation = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<SanityImage>;
  menuItems?: Maybe<Array<Maybe<SanityMenuItem>>>;
  mobileMenuItems?: Maybe<Array<Maybe<SanityMenuItem>>>;
  _rawLogo?: Maybe<Scalars['JSON']>;
  _rawMenuItems?: Maybe<Scalars['JSON']>;
  _rawMobileMenuItems?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityNavigation_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityNavigation_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityNavigation_RawLogoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityNavigation_RawMenuItemsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityNavigation_RawMobileMenuItemsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityNavigationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityNavigationEdge>;
  nodes: Array<SanityNavigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityNavigationGroupConnection>;
};


export type SanityNavigationConnectionDistinctArgs = {
  field: SanityNavigationFieldsEnum;
};


export type SanityNavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityNavigationFieldsEnum;
};

export type SanityNavigationEdge = {
  next?: Maybe<SanityNavigation>;
  node: SanityNavigation;
  previous?: Maybe<SanityNavigation>;
};

export type SanityNavigationFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'logo____key'
  | 'logo____type'
  | 'logo___asset____id'
  | 'logo___asset____type'
  | 'logo___asset____createdAt'
  | 'logo___asset____updatedAt'
  | 'logo___asset____rev'
  | 'logo___asset____key'
  | 'logo___asset___originalFilename'
  | 'logo___asset___label'
  | 'logo___asset___title'
  | 'logo___asset___description'
  | 'logo___asset___sha1hash'
  | 'logo___asset___extension'
  | 'logo___asset___mimeType'
  | 'logo___asset___size'
  | 'logo___asset___assetId'
  | 'logo___asset___path'
  | 'logo___asset___url'
  | 'logo___asset___metadata____key'
  | 'logo___asset___metadata____type'
  | 'logo___asset___metadata___lqip'
  | 'logo___asset___metadata___hasAlpha'
  | 'logo___asset___metadata___isOpaque'
  | 'logo___asset___metadata____rawLocation'
  | 'logo___asset___metadata____rawDimensions'
  | 'logo___asset___metadata____rawPalette'
  | 'logo___asset___source____key'
  | 'logo___asset___source____type'
  | 'logo___asset___source___name'
  | 'logo___asset___source___id'
  | 'logo___asset___source___url'
  | 'logo___asset____rawMetadata'
  | 'logo___asset____rawSource'
  | 'logo___asset___fixed___width'
  | 'logo___asset___fixed___height'
  | 'logo___asset___fixed___src'
  | 'logo___asset___fixed___srcSet'
  | 'logo___asset___fixed___base64'
  | 'logo___asset___fixed___srcWebp'
  | 'logo___asset___fixed___srcSetWebp'
  | 'logo___asset___fluid___aspectRatio'
  | 'logo___asset___fluid___src'
  | 'logo___asset___fluid___srcSet'
  | 'logo___asset___fluid___sizes'
  | 'logo___asset___fluid___base64'
  | 'logo___asset___fluid___srcWebp'
  | 'logo___asset___fluid___srcSetWebp'
  | 'logo___asset___id'
  | 'logo___asset___parent___id'
  | 'logo___asset___parent___children'
  | 'logo___asset___children'
  | 'logo___asset___children___id'
  | 'logo___asset___children___children'
  | 'logo___asset___internal___content'
  | 'logo___asset___internal___contentDigest'
  | 'logo___asset___internal___description'
  | 'logo___asset___internal___fieldOwners'
  | 'logo___asset___internal___ignoreType'
  | 'logo___asset___internal___mediaType'
  | 'logo___asset___internal___owner'
  | 'logo___asset___internal___type'
  | 'logo___hotspot____key'
  | 'logo___hotspot____type'
  | 'logo___hotspot___x'
  | 'logo___hotspot___y'
  | 'logo___hotspot___height'
  | 'logo___hotspot___width'
  | 'logo___crop____key'
  | 'logo___crop____type'
  | 'logo___crop___top'
  | 'logo___crop___bottom'
  | 'logo___crop___left'
  | 'logo___crop___right'
  | 'logo____rawAsset'
  | 'logo____rawHotspot'
  | 'logo____rawCrop'
  | 'menuItems'
  | 'menuItems____key'
  | 'menuItems____type'
  | 'menuItems___title'
  | 'menuItems___tag'
  | 'menuItems___link____key'
  | 'menuItems___link____type'
  | 'menuItems___link___linktext'
  | 'menuItems___link___url'
  | 'menuItems___nestedlinks'
  | 'menuItems___nestedlinks____key'
  | 'menuItems___nestedlinks____type'
  | 'menuItems___nestedlinks___linktext'
  | 'menuItems___nestedlinks___url'
  | 'menuItems____rawLink'
  | 'menuItems____rawNestedlinks'
  | 'mobileMenuItems'
  | 'mobileMenuItems____key'
  | 'mobileMenuItems____type'
  | 'mobileMenuItems___title'
  | 'mobileMenuItems___tag'
  | 'mobileMenuItems___link____key'
  | 'mobileMenuItems___link____type'
  | 'mobileMenuItems___link___linktext'
  | 'mobileMenuItems___link___url'
  | 'mobileMenuItems___nestedlinks'
  | 'mobileMenuItems___nestedlinks____key'
  | 'mobileMenuItems___nestedlinks____type'
  | 'mobileMenuItems___nestedlinks___linktext'
  | 'mobileMenuItems___nestedlinks___url'
  | 'mobileMenuItems____rawLink'
  | 'mobileMenuItems____rawNestedlinks'
  | '_rawLogo'
  | '_rawMenuItems'
  | '_rawMobileMenuItems'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityNavigationFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<SanityImageFilterInput>;
  menuItems?: Maybe<SanityMenuItemFilterListInput>;
  mobileMenuItems?: Maybe<SanityMenuItemFilterListInput>;
  _rawLogo?: Maybe<JsonQueryOperatorInput>;
  _rawMenuItems?: Maybe<JsonQueryOperatorInput>;
  _rawMobileMenuItems?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityNavigationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityNavigationEdge>;
  nodes: Array<SanityNavigation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityNavigationIconButton = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  linktext?: Maybe<Scalars['String']>;
  icon?: Maybe<SanityImage>;
  url?: Maybe<Scalars['String']>;
  internallink?: Maybe<Scalars['Boolean']>;
  newwindow?: Maybe<Scalars['Boolean']>;
  _rawIcon?: Maybe<Scalars['JSON']>;
};


export type SanityNavigationIconButton_RawIconArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityNavigationSortInput = {
  fields?: Maybe<Array<Maybe<SanityNavigationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityOurTeam = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  teamMembers?: Maybe<Array<Maybe<SanityTeamMember>>>;
  _rawTeamMembers?: Maybe<Scalars['JSON']>;
};


export type SanityOurTeam_RawTeamMembersArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageNotFound = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageHeader?: Maybe<Scalars['String']>;
  pageSubHeader?: Maybe<Scalars['String']>;
  notFoundImage?: Maybe<SanityImage>;
  pageLinks?: Maybe<Array<Maybe<SanityLink>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawNotFoundImage?: Maybe<Scalars['JSON']>;
  _rawPageLinks?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPageNotFound_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPageNotFound_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPageNotFound_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPageNotFound_RawNotFoundImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPageNotFound_RawPageLinksArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageNotFoundConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageNotFoundEdge>;
  nodes: Array<SanityPageNotFound>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityPageNotFoundGroupConnection>;
};


export type SanityPageNotFoundConnectionDistinctArgs = {
  field: SanityPageNotFoundFieldsEnum;
};


export type SanityPageNotFoundConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPageNotFoundFieldsEnum;
};

export type SanityPageNotFoundEdge = {
  next?: Maybe<SanityPageNotFound>;
  node: SanityPageNotFound;
  previous?: Maybe<SanityPageNotFound>;
};

export type SanityPageNotFoundFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | 'pageHeader'
  | 'pageSubHeader'
  | 'notFoundImage____key'
  | 'notFoundImage____type'
  | 'notFoundImage___asset____id'
  | 'notFoundImage___asset____type'
  | 'notFoundImage___asset____createdAt'
  | 'notFoundImage___asset____updatedAt'
  | 'notFoundImage___asset____rev'
  | 'notFoundImage___asset____key'
  | 'notFoundImage___asset___originalFilename'
  | 'notFoundImage___asset___label'
  | 'notFoundImage___asset___title'
  | 'notFoundImage___asset___description'
  | 'notFoundImage___asset___sha1hash'
  | 'notFoundImage___asset___extension'
  | 'notFoundImage___asset___mimeType'
  | 'notFoundImage___asset___size'
  | 'notFoundImage___asset___assetId'
  | 'notFoundImage___asset___path'
  | 'notFoundImage___asset___url'
  | 'notFoundImage___asset___metadata____key'
  | 'notFoundImage___asset___metadata____type'
  | 'notFoundImage___asset___metadata___lqip'
  | 'notFoundImage___asset___metadata___hasAlpha'
  | 'notFoundImage___asset___metadata___isOpaque'
  | 'notFoundImage___asset___metadata____rawLocation'
  | 'notFoundImage___asset___metadata____rawDimensions'
  | 'notFoundImage___asset___metadata____rawPalette'
  | 'notFoundImage___asset___source____key'
  | 'notFoundImage___asset___source____type'
  | 'notFoundImage___asset___source___name'
  | 'notFoundImage___asset___source___id'
  | 'notFoundImage___asset___source___url'
  | 'notFoundImage___asset____rawMetadata'
  | 'notFoundImage___asset____rawSource'
  | 'notFoundImage___asset___fixed___width'
  | 'notFoundImage___asset___fixed___height'
  | 'notFoundImage___asset___fixed___src'
  | 'notFoundImage___asset___fixed___srcSet'
  | 'notFoundImage___asset___fixed___base64'
  | 'notFoundImage___asset___fixed___srcWebp'
  | 'notFoundImage___asset___fixed___srcSetWebp'
  | 'notFoundImage___asset___fluid___aspectRatio'
  | 'notFoundImage___asset___fluid___src'
  | 'notFoundImage___asset___fluid___srcSet'
  | 'notFoundImage___asset___fluid___sizes'
  | 'notFoundImage___asset___fluid___base64'
  | 'notFoundImage___asset___fluid___srcWebp'
  | 'notFoundImage___asset___fluid___srcSetWebp'
  | 'notFoundImage___asset___id'
  | 'notFoundImage___asset___parent___id'
  | 'notFoundImage___asset___parent___children'
  | 'notFoundImage___asset___children'
  | 'notFoundImage___asset___children___id'
  | 'notFoundImage___asset___children___children'
  | 'notFoundImage___asset___internal___content'
  | 'notFoundImage___asset___internal___contentDigest'
  | 'notFoundImage___asset___internal___description'
  | 'notFoundImage___asset___internal___fieldOwners'
  | 'notFoundImage___asset___internal___ignoreType'
  | 'notFoundImage___asset___internal___mediaType'
  | 'notFoundImage___asset___internal___owner'
  | 'notFoundImage___asset___internal___type'
  | 'notFoundImage___hotspot____key'
  | 'notFoundImage___hotspot____type'
  | 'notFoundImage___hotspot___x'
  | 'notFoundImage___hotspot___y'
  | 'notFoundImage___hotspot___height'
  | 'notFoundImage___hotspot___width'
  | 'notFoundImage___crop____key'
  | 'notFoundImage___crop____type'
  | 'notFoundImage___crop___top'
  | 'notFoundImage___crop___bottom'
  | 'notFoundImage___crop___left'
  | 'notFoundImage___crop___right'
  | 'notFoundImage____rawAsset'
  | 'notFoundImage____rawHotspot'
  | 'notFoundImage____rawCrop'
  | 'pageLinks'
  | 'pageLinks____key'
  | 'pageLinks____type'
  | 'pageLinks___linktext'
  | 'pageLinks___url'
  | '_rawSeoBlock'
  | '_rawNotFoundImage'
  | '_rawPageLinks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPageNotFoundFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  pageHeader?: Maybe<StringQueryOperatorInput>;
  pageSubHeader?: Maybe<StringQueryOperatorInput>;
  notFoundImage?: Maybe<SanityImageFilterInput>;
  pageLinks?: Maybe<SanityLinkFilterListInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawNotFoundImage?: Maybe<JsonQueryOperatorInput>;
  _rawPageLinks?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPageNotFoundGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageNotFoundEdge>;
  nodes: Array<SanityPageNotFound>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPageNotFoundSortInput = {
  fields?: Maybe<Array<Maybe<SanityPageNotFoundFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPavingLanding = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageContent?: Maybe<Array<Maybe<SanityCtaOrLandingHeroOrLeftRightBlockOrPreviewProductsOrProductRangeTabsOrProjectsPreviewOrRangeInformationBlockOrSliderOrTextSection>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPavingLanding_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPavingLanding_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPavingLanding_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPavingLanding_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPavingLandingConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPavingLandingEdge>;
  nodes: Array<SanityPavingLanding>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityPavingLandingGroupConnection>;
};


export type SanityPavingLandingConnectionDistinctArgs = {
  field: SanityPavingLandingFieldsEnum;
};


export type SanityPavingLandingConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPavingLandingFieldsEnum;
};

export type SanityPavingLandingEdge = {
  next?: Maybe<SanityPavingLanding>;
  node: SanityPavingLanding;
  previous?: Maybe<SanityPavingLanding>;
};

export type SanityPavingLandingFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | '_rawSeoBlock'
  | '_rawPageContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPavingLandingFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPavingLandingGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPavingLandingEdge>;
  nodes: Array<SanityPavingLanding>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPavingLandingSortInput = {
  fields?: Maybe<Array<Maybe<SanityPavingLandingFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPavingTechnicalInfo = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageContent?: Maybe<Array<Maybe<SanityDownloadGridOrLandingHeroOrLeftRightBlock>>>;
  formThankYouMessage?: Maybe<SanityBlockContent>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  _rawFormThankYouMessage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPavingTechnicalInfo_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPavingTechnicalInfo_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPavingTechnicalInfo_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPavingTechnicalInfo_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPavingTechnicalInfo_RawFormThankYouMessageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPavingTechnicalInfoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPavingTechnicalInfoEdge>;
  nodes: Array<SanityPavingTechnicalInfo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityPavingTechnicalInfoGroupConnection>;
};


export type SanityPavingTechnicalInfoConnectionDistinctArgs = {
  field: SanityPavingTechnicalInfoFieldsEnum;
};


export type SanityPavingTechnicalInfoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPavingTechnicalInfoFieldsEnum;
};

export type SanityPavingTechnicalInfoEdge = {
  next?: Maybe<SanityPavingTechnicalInfo>;
  node: SanityPavingTechnicalInfo;
  previous?: Maybe<SanityPavingTechnicalInfo>;
};

export type SanityPavingTechnicalInfoFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | 'formThankYouMessage____key'
  | 'formThankYouMessage____type'
  | 'formThankYouMessage___content'
  | 'formThankYouMessage___content____key'
  | 'formThankYouMessage___content____type'
  | 'formThankYouMessage___content___children'
  | 'formThankYouMessage___content___children____key'
  | 'formThankYouMessage___content___children____type'
  | 'formThankYouMessage___content___children___marks'
  | 'formThankYouMessage___content___children___text'
  | 'formThankYouMessage___content___style'
  | 'formThankYouMessage___content___list'
  | 'formThankYouMessage___content____rawChildren'
  | 'formThankYouMessage____rawContent'
  | '_rawSeoBlock'
  | '_rawPageContent'
  | '_rawFormThankYouMessage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPavingTechnicalInfoFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  formThankYouMessage?: Maybe<SanityBlockContentFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  _rawFormThankYouMessage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPavingTechnicalInfoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPavingTechnicalInfoEdge>;
  nodes: Array<SanityPavingTechnicalInfo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPavingTechnicalInfoSortInput = {
  fields?: Maybe<Array<Maybe<SanityPavingTechnicalInfoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPlainTab = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  productImage?: Maybe<SanityImage>;
  productDescriptionBlock?: Maybe<SanityBlockContent>;
  buttonLink?: Maybe<SanityLink>;
  _rawProductImage?: Maybe<Scalars['JSON']>;
  _rawProductDescriptionBlock?: Maybe<Scalars['JSON']>;
  _rawButtonLink?: Maybe<Scalars['JSON']>;
};


export type SanityPlainTab_RawProductImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPlainTab_RawProductDescriptionBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPlainTab_RawButtonLinkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPrecastLanding = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageContent?: Maybe<Array<Maybe<SanityCtaOrLandingHeroOrLeftRightBlockOrPreviewProductsOrProjectsPreviewOrRangeInformationBlockOrSliderOrTextSection>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPrecastLanding_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPrecastLanding_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPrecastLanding_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPrecastLanding_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPrecastLandingConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPrecastLandingEdge>;
  nodes: Array<SanityPrecastLanding>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityPrecastLandingGroupConnection>;
};


export type SanityPrecastLandingConnectionDistinctArgs = {
  field: SanityPrecastLandingFieldsEnum;
};


export type SanityPrecastLandingConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPrecastLandingFieldsEnum;
};

export type SanityPrecastLandingEdge = {
  next?: Maybe<SanityPrecastLanding>;
  node: SanityPrecastLanding;
  previous?: Maybe<SanityPrecastLanding>;
};

export type SanityPrecastLandingFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | '_rawSeoBlock'
  | '_rawPageContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPrecastLandingFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPrecastLandingGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPrecastLandingEdge>;
  nodes: Array<SanityPrecastLanding>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPrecastLandingSortInput = {
  fields?: Maybe<Array<Maybe<SanityPrecastLandingFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPrecastTechnicalInfo = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageContent?: Maybe<Array<Maybe<SanityDownloadGridOrLandingHeroOrLeftRightBlock>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPrecastTechnicalInfo_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPrecastTechnicalInfo_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPrecastTechnicalInfo_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPrecastTechnicalInfo_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPrecastTechnicalInfoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPrecastTechnicalInfoEdge>;
  nodes: Array<SanityPrecastTechnicalInfo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityPrecastTechnicalInfoGroupConnection>;
};


export type SanityPrecastTechnicalInfoConnectionDistinctArgs = {
  field: SanityPrecastTechnicalInfoFieldsEnum;
};


export type SanityPrecastTechnicalInfoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPrecastTechnicalInfoFieldsEnum;
};

export type SanityPrecastTechnicalInfoEdge = {
  next?: Maybe<SanityPrecastTechnicalInfo>;
  node: SanityPrecastTechnicalInfo;
  previous?: Maybe<SanityPrecastTechnicalInfo>;
};

export type SanityPrecastTechnicalInfoFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | '_rawSeoBlock'
  | '_rawPageContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPrecastTechnicalInfoFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPrecastTechnicalInfoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPrecastTechnicalInfoEdge>;
  nodes: Array<SanityPrecastTechnicalInfo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPrecastTechnicalInfoSortInput = {
  fields?: Maybe<Array<Maybe<SanityPrecastTechnicalInfoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPreviewProducts = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  previewStyle?: Maybe<Scalars['String']>;
  productsArray?: Maybe<Array<Maybe<SanityProducts>>>;
  _rawProductsArray?: Maybe<Scalars['JSON']>;
};


export type SanityPreviewProducts_RawProductsArrayArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProductHero = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  heroText?: Maybe<SanityBlockContent>;
  heroImage?: Maybe<SanityImage>;
  heroIcon?: Maybe<SanityImage>;
  _rawHeroText?: Maybe<Scalars['JSON']>;
  _rawHeroImage?: Maybe<Scalars['JSON']>;
  _rawHeroIcon?: Maybe<Scalars['JSON']>;
};


export type SanityProductHero_RawHeroTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProductHero_RawHeroImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProductHero_RawHeroIconArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProductPreview = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  productTitle?: Maybe<Scalars['String']>;
  productImage?: Maybe<SanityImage>;
  productIcon?: Maybe<SanityImage>;
  _rawProductImage?: Maybe<Scalars['JSON']>;
  _rawProductIcon?: Maybe<Scalars['JSON']>;
};


export type SanityProductPreview_RawProductImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProductPreview_RawProductIconArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProductPreviewFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  productTitle?: Maybe<StringQueryOperatorInput>;
  productImage?: Maybe<SanityImageFilterInput>;
  productIcon?: Maybe<SanityImageFilterInput>;
  _rawProductImage?: Maybe<JsonQueryOperatorInput>;
  _rawProductIcon?: Maybe<JsonQueryOperatorInput>;
};

export type SanityProductRangeTabs = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tabs?: Maybe<Array<Maybe<SanityProductTab>>>;
  _rawTabs?: Maybe<Scalars['JSON']>;
};


export type SanityProductRangeTabs_RawTabsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProducts = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageName?: Maybe<Scalars['String']>;
  pageCategory?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  productPagePreview?: Maybe<SanityProductPreview>;
  pageContent?: Maybe<Array<Maybe<SanityCtaOrCustomProductPreviewOrLandingHeroOrLeftRightBlockOrPreviewProductsOrProductHeroOrProductRangeTabsOrProductSliderOrProjectsPreviewOrRangeInformationBlockOrTextSection>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawProductPagePreview?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityProducts_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityProducts_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityProducts_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProducts_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProducts_RawProductPagePreviewArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProducts_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProductsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductsEdge>;
  nodes: Array<SanityProducts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityProductsGroupConnection>;
};


export type SanityProductsConnectionDistinctArgs = {
  field: SanityProductsFieldsEnum;
};


export type SanityProductsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityProductsFieldsEnum;
};

export type SanityProductsEdge = {
  next?: Maybe<SanityProducts>;
  node: SanityProducts;
  previous?: Maybe<SanityProducts>;
};

export type SanityProductsFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | 'pageName'
  | 'pageCategory'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'productPagePreview____key'
  | 'productPagePreview____type'
  | 'productPagePreview___productTitle'
  | 'productPagePreview___productImage____key'
  | 'productPagePreview___productImage____type'
  | 'productPagePreview___productImage___asset____id'
  | 'productPagePreview___productImage___asset____type'
  | 'productPagePreview___productImage___asset____createdAt'
  | 'productPagePreview___productImage___asset____updatedAt'
  | 'productPagePreview___productImage___asset____rev'
  | 'productPagePreview___productImage___asset____key'
  | 'productPagePreview___productImage___asset___originalFilename'
  | 'productPagePreview___productImage___asset___label'
  | 'productPagePreview___productImage___asset___title'
  | 'productPagePreview___productImage___asset___description'
  | 'productPagePreview___productImage___asset___sha1hash'
  | 'productPagePreview___productImage___asset___extension'
  | 'productPagePreview___productImage___asset___mimeType'
  | 'productPagePreview___productImage___asset___size'
  | 'productPagePreview___productImage___asset___assetId'
  | 'productPagePreview___productImage___asset___path'
  | 'productPagePreview___productImage___asset___url'
  | 'productPagePreview___productImage___asset____rawMetadata'
  | 'productPagePreview___productImage___asset____rawSource'
  | 'productPagePreview___productImage___asset___id'
  | 'productPagePreview___productImage___asset___children'
  | 'productPagePreview___productImage___hotspot____key'
  | 'productPagePreview___productImage___hotspot____type'
  | 'productPagePreview___productImage___hotspot___x'
  | 'productPagePreview___productImage___hotspot___y'
  | 'productPagePreview___productImage___hotspot___height'
  | 'productPagePreview___productImage___hotspot___width'
  | 'productPagePreview___productImage___crop____key'
  | 'productPagePreview___productImage___crop____type'
  | 'productPagePreview___productImage___crop___top'
  | 'productPagePreview___productImage___crop___bottom'
  | 'productPagePreview___productImage___crop___left'
  | 'productPagePreview___productImage___crop___right'
  | 'productPagePreview___productImage____rawAsset'
  | 'productPagePreview___productImage____rawHotspot'
  | 'productPagePreview___productImage____rawCrop'
  | 'productPagePreview___productIcon____key'
  | 'productPagePreview___productIcon____type'
  | 'productPagePreview___productIcon___asset____id'
  | 'productPagePreview___productIcon___asset____type'
  | 'productPagePreview___productIcon___asset____createdAt'
  | 'productPagePreview___productIcon___asset____updatedAt'
  | 'productPagePreview___productIcon___asset____rev'
  | 'productPagePreview___productIcon___asset____key'
  | 'productPagePreview___productIcon___asset___originalFilename'
  | 'productPagePreview___productIcon___asset___label'
  | 'productPagePreview___productIcon___asset___title'
  | 'productPagePreview___productIcon___asset___description'
  | 'productPagePreview___productIcon___asset___sha1hash'
  | 'productPagePreview___productIcon___asset___extension'
  | 'productPagePreview___productIcon___asset___mimeType'
  | 'productPagePreview___productIcon___asset___size'
  | 'productPagePreview___productIcon___asset___assetId'
  | 'productPagePreview___productIcon___asset___path'
  | 'productPagePreview___productIcon___asset___url'
  | 'productPagePreview___productIcon___asset____rawMetadata'
  | 'productPagePreview___productIcon___asset____rawSource'
  | 'productPagePreview___productIcon___asset___id'
  | 'productPagePreview___productIcon___asset___children'
  | 'productPagePreview___productIcon___hotspot____key'
  | 'productPagePreview___productIcon___hotspot____type'
  | 'productPagePreview___productIcon___hotspot___x'
  | 'productPagePreview___productIcon___hotspot___y'
  | 'productPagePreview___productIcon___hotspot___height'
  | 'productPagePreview___productIcon___hotspot___width'
  | 'productPagePreview___productIcon___crop____key'
  | 'productPagePreview___productIcon___crop____type'
  | 'productPagePreview___productIcon___crop___top'
  | 'productPagePreview___productIcon___crop___bottom'
  | 'productPagePreview___productIcon___crop___left'
  | 'productPagePreview___productIcon___crop___right'
  | 'productPagePreview___productIcon____rawAsset'
  | 'productPagePreview___productIcon____rawHotspot'
  | 'productPagePreview___productIcon____rawCrop'
  | 'productPagePreview____rawProductImage'
  | 'productPagePreview____rawProductIcon'
  | '_rawSeoBlock'
  | '_rawSlug'
  | '_rawProductPagePreview'
  | '_rawPageContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityProductsFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  pageName?: Maybe<StringQueryOperatorInput>;
  pageCategory?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  productPagePreview?: Maybe<SanityProductPreviewFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawProductPagePreview?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityProductsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductsEdge>;
  nodes: Array<SanityProducts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityProductSlider = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  sliderTitle?: Maybe<Scalars['String']>;
  slides?: Maybe<Array<Maybe<SanitySliderItem>>>;
  _rawSlides?: Maybe<Scalars['JSON']>;
};


export type SanityProductSlider_RawSlidesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProductsSortInput = {
  fields?: Maybe<Array<Maybe<SanityProductsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityProductTab = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  productTabName?: Maybe<Scalars['String']>;
  tabContent?: Maybe<Array<Maybe<SanityDetailedTabOrPlainTabOrStandardTabOrSwatchlessTab>>>;
  _rawTabContent?: Maybe<Scalars['JSON']>;
};


export type SanityProductTab_RawTabContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProjects = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  projectName?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  category?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  newDescription?: Maybe<SanityColumn>;
  projectImages?: Maybe<Array<Maybe<SanityImage>>>;
  projectPreview?: Maybe<SanityProjectsPreview>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawNewDescription?: Maybe<Scalars['JSON']>;
  _rawProjectImages?: Maybe<Scalars['JSON']>;
  _rawProjectPreview?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityProjects_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityProjects_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityProjectsStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityProjectsEndDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityProjects_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProjects_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProjects_RawNewDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProjects_RawProjectImagesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProjects_RawProjectPreviewArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProjectsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProjectsEdge>;
  nodes: Array<SanityProjects>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityProjectsGroupConnection>;
};


export type SanityProjectsConnectionDistinctArgs = {
  field: SanityProjectsFieldsEnum;
};


export type SanityProjectsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityProjectsFieldsEnum;
};

export type SanityProjectsEdge = {
  next?: Maybe<SanityProjects>;
  node: SanityProjects;
  previous?: Maybe<SanityProjects>;
};

export type SanityProjectsFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | 'projectName'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'category'
  | 'client'
  | 'team'
  | 'value'
  | 'location'
  | 'startDate'
  | 'endDate'
  | 'description'
  | 'newDescription____key'
  | 'newDescription____type'
  | 'newDescription___columnContent'
  | 'newDescription___columnContent____key'
  | 'newDescription___columnContent____type'
  | 'newDescription___columnContent___children'
  | 'newDescription___columnContent___children____key'
  | 'newDescription___columnContent___children____type'
  | 'newDescription___columnContent___children___marks'
  | 'newDescription___columnContent___children___text'
  | 'newDescription___columnContent___style'
  | 'newDescription___columnContent___list'
  | 'newDescription___columnContent____rawChildren'
  | 'newDescription____rawColumnContent'
  | 'projectImages'
  | 'projectImages____key'
  | 'projectImages____type'
  | 'projectImages___asset____id'
  | 'projectImages___asset____type'
  | 'projectImages___asset____createdAt'
  | 'projectImages___asset____updatedAt'
  | 'projectImages___asset____rev'
  | 'projectImages___asset____key'
  | 'projectImages___asset___originalFilename'
  | 'projectImages___asset___label'
  | 'projectImages___asset___title'
  | 'projectImages___asset___description'
  | 'projectImages___asset___sha1hash'
  | 'projectImages___asset___extension'
  | 'projectImages___asset___mimeType'
  | 'projectImages___asset___size'
  | 'projectImages___asset___assetId'
  | 'projectImages___asset___path'
  | 'projectImages___asset___url'
  | 'projectImages___asset___metadata____key'
  | 'projectImages___asset___metadata____type'
  | 'projectImages___asset___metadata___lqip'
  | 'projectImages___asset___metadata___hasAlpha'
  | 'projectImages___asset___metadata___isOpaque'
  | 'projectImages___asset___metadata____rawLocation'
  | 'projectImages___asset___metadata____rawDimensions'
  | 'projectImages___asset___metadata____rawPalette'
  | 'projectImages___asset___source____key'
  | 'projectImages___asset___source____type'
  | 'projectImages___asset___source___name'
  | 'projectImages___asset___source___id'
  | 'projectImages___asset___source___url'
  | 'projectImages___asset____rawMetadata'
  | 'projectImages___asset____rawSource'
  | 'projectImages___asset___fixed___width'
  | 'projectImages___asset___fixed___height'
  | 'projectImages___asset___fixed___src'
  | 'projectImages___asset___fixed___srcSet'
  | 'projectImages___asset___fixed___base64'
  | 'projectImages___asset___fixed___srcWebp'
  | 'projectImages___asset___fixed___srcSetWebp'
  | 'projectImages___asset___fluid___aspectRatio'
  | 'projectImages___asset___fluid___src'
  | 'projectImages___asset___fluid___srcSet'
  | 'projectImages___asset___fluid___sizes'
  | 'projectImages___asset___fluid___base64'
  | 'projectImages___asset___fluid___srcWebp'
  | 'projectImages___asset___fluid___srcSetWebp'
  | 'projectImages___asset___id'
  | 'projectImages___asset___parent___id'
  | 'projectImages___asset___parent___children'
  | 'projectImages___asset___children'
  | 'projectImages___asset___children___id'
  | 'projectImages___asset___children___children'
  | 'projectImages___asset___internal___content'
  | 'projectImages___asset___internal___contentDigest'
  | 'projectImages___asset___internal___description'
  | 'projectImages___asset___internal___fieldOwners'
  | 'projectImages___asset___internal___ignoreType'
  | 'projectImages___asset___internal___mediaType'
  | 'projectImages___asset___internal___owner'
  | 'projectImages___asset___internal___type'
  | 'projectImages___hotspot____key'
  | 'projectImages___hotspot____type'
  | 'projectImages___hotspot___x'
  | 'projectImages___hotspot___y'
  | 'projectImages___hotspot___height'
  | 'projectImages___hotspot___width'
  | 'projectImages___crop____key'
  | 'projectImages___crop____type'
  | 'projectImages___crop___top'
  | 'projectImages___crop___bottom'
  | 'projectImages___crop___left'
  | 'projectImages___crop___right'
  | 'projectImages____rawAsset'
  | 'projectImages____rawHotspot'
  | 'projectImages____rawCrop'
  | 'projectPreview____key'
  | 'projectPreview____type'
  | 'projectPreview___title'
  | 'projectPreview___projectsList'
  | 'projectPreview___projectsList____id'
  | 'projectPreview___projectsList____type'
  | 'projectPreview___projectsList____createdAt'
  | 'projectPreview___projectsList____updatedAt'
  | 'projectPreview___projectsList____rev'
  | 'projectPreview___projectsList____key'
  | 'projectPreview___projectsList___seoBlock____key'
  | 'projectPreview___projectsList___seoBlock____type'
  | 'projectPreview___projectsList___seoBlock___pageTitle'
  | 'projectPreview___projectsList___seoBlock___pageDescription'
  | 'projectPreview___projectsList___seoBlock___pageKeyWords'
  | 'projectPreview___projectsList___seoBlock____rawSlug'
  | 'projectPreview___projectsList___seoBlock____rawOgImage'
  | 'projectPreview___projectsList___projectName'
  | 'projectPreview___projectsList___slug____key'
  | 'projectPreview___projectsList___slug____type'
  | 'projectPreview___projectsList___slug___current'
  | 'projectPreview___projectsList___category'
  | 'projectPreview___projectsList___client'
  | 'projectPreview___projectsList___team'
  | 'projectPreview___projectsList___value'
  | 'projectPreview___projectsList___location'
  | 'projectPreview___projectsList___startDate'
  | 'projectPreview___projectsList___endDate'
  | 'projectPreview___projectsList___description'
  | 'projectPreview___projectsList___newDescription____key'
  | 'projectPreview___projectsList___newDescription____type'
  | 'projectPreview___projectsList___newDescription___columnContent'
  | 'projectPreview___projectsList___newDescription____rawColumnContent'
  | 'projectPreview___projectsList___projectImages'
  | 'projectPreview___projectsList___projectImages____key'
  | 'projectPreview___projectsList___projectImages____type'
  | 'projectPreview___projectsList___projectImages____rawAsset'
  | 'projectPreview___projectsList___projectImages____rawHotspot'
  | 'projectPreview___projectsList___projectImages____rawCrop'
  | 'projectPreview___projectsList___projectPreview____key'
  | 'projectPreview___projectsList___projectPreview____type'
  | 'projectPreview___projectsList___projectPreview___title'
  | 'projectPreview___projectsList___projectPreview___projectsList'
  | 'projectPreview___projectsList___projectPreview____rawProjectsList'
  | 'projectPreview___projectsList____rawSeoBlock'
  | 'projectPreview___projectsList____rawSlug'
  | 'projectPreview___projectsList____rawNewDescription'
  | 'projectPreview___projectsList____rawProjectImages'
  | 'projectPreview___projectsList____rawProjectPreview'
  | 'projectPreview___projectsList___id'
  | 'projectPreview___projectsList___parent___id'
  | 'projectPreview___projectsList___parent___children'
  | 'projectPreview___projectsList___children'
  | 'projectPreview___projectsList___children___id'
  | 'projectPreview___projectsList___children___children'
  | 'projectPreview___projectsList___internal___content'
  | 'projectPreview___projectsList___internal___contentDigest'
  | 'projectPreview___projectsList___internal___description'
  | 'projectPreview___projectsList___internal___fieldOwners'
  | 'projectPreview___projectsList___internal___ignoreType'
  | 'projectPreview___projectsList___internal___mediaType'
  | 'projectPreview___projectsList___internal___owner'
  | 'projectPreview___projectsList___internal___type'
  | 'projectPreview____rawProjectsList'
  | '_rawSeoBlock'
  | '_rawSlug'
  | '_rawNewDescription'
  | '_rawProjectImages'
  | '_rawProjectPreview'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityProjectsFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  projectName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  category?: Maybe<StringQueryOperatorInput>;
  client?: Maybe<StringQueryOperatorInput>;
  team?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  newDescription?: Maybe<SanityColumnFilterInput>;
  projectImages?: Maybe<SanityImageFilterListInput>;
  projectPreview?: Maybe<SanityProjectsPreviewFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawNewDescription?: Maybe<JsonQueryOperatorInput>;
  _rawProjectImages?: Maybe<JsonQueryOperatorInput>;
  _rawProjectPreview?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityProjectsFilterListInput = {
  elemMatch?: Maybe<SanityProjectsFilterInput>;
};

export type SanityProjectsGrid = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  projectsList?: Maybe<Array<Maybe<SanityProjects>>>;
  _rawProjectsList?: Maybe<Scalars['JSON']>;
};


export type SanityProjectsGrid_RawProjectsListArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProjectsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProjectsEdge>;
  nodes: Array<SanityProjects>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityProjectsLanding = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageContent?: Maybe<Array<Maybe<SanityHeroPlainOrTextSection>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityProjectsLanding_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityProjectsLanding_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityProjectsLanding_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityProjectsLanding_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProjectsLandingConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProjectsLandingEdge>;
  nodes: Array<SanityProjectsLanding>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityProjectsLandingGroupConnection>;
};


export type SanityProjectsLandingConnectionDistinctArgs = {
  field: SanityProjectsLandingFieldsEnum;
};


export type SanityProjectsLandingConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityProjectsLandingFieldsEnum;
};

export type SanityProjectsLandingEdge = {
  next?: Maybe<SanityProjectsLanding>;
  node: SanityProjectsLanding;
  previous?: Maybe<SanityProjectsLanding>;
};

export type SanityProjectsLandingFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | '_rawSeoBlock'
  | '_rawPageContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityProjectsLandingFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityProjectsLandingGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProjectsLandingEdge>;
  nodes: Array<SanityProjectsLanding>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityProjectsLandingSortInput = {
  fields?: Maybe<Array<Maybe<SanityProjectsLandingFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityProjectsPreview = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  projectsList?: Maybe<Array<Maybe<SanityProjects>>>;
  _rawProjectsList?: Maybe<Scalars['JSON']>;
};


export type SanityProjectsPreview_RawProjectsListArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityProjectsPreviewFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  projectsList?: Maybe<SanityProjectsFilterListInput>;
  _rawProjectsList?: Maybe<JsonQueryOperatorInput>;
};

export type SanityProjectsSortInput = {
  fields?: Maybe<Array<Maybe<SanityProjectsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityRangeInformationBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  infoBlocks?: Maybe<Array<Maybe<SanityBlockWithHeader>>>;
  rangeColours?: Maybe<Array<Maybe<SanityTextureCard>>>;
  _rawInfoBlocks?: Maybe<Scalars['JSON']>;
  _rawRangeColours?: Maybe<Scalars['JSON']>;
};


export type SanityRangeInformationBlock_RawInfoBlocksArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityRangeInformationBlock_RawRangeColoursArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityRelatedPosts = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<SanityBlog>>>;
  _rawPosts?: Maybe<Scalars['JSON']>;
};


export type SanityRelatedPosts_RawPostsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type SanitySeo = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  pageDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<SanityImage>;
  pageKeyWords?: Maybe<Scalars['String']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawOgImage?: Maybe<Scalars['JSON']>;
};


export type SanitySeo_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanitySeo_RawOgImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySeoFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  pageTitle?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  pageDescription?: Maybe<StringQueryOperatorInput>;
  ogImage?: Maybe<SanityImageFilterInput>;
  pageKeyWords?: Maybe<StringQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawOgImage?: Maybe<JsonQueryOperatorInput>;
};

export type SanitySiteConfig = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  defaultSEO?: Maybe<SanitySeo>;
  _rawDefaultSeo?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySiteConfig_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySiteConfig_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySiteConfig_RawDefaultSeoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySiteConfigConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteConfigEdge>;
  nodes: Array<SanitySiteConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanitySiteConfigGroupConnection>;
};


export type SanitySiteConfigConnectionDistinctArgs = {
  field: SanitySiteConfigFieldsEnum;
};


export type SanitySiteConfigConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanitySiteConfigFieldsEnum;
};

export type SanitySiteConfigEdge = {
  next?: Maybe<SanitySiteConfig>;
  node: SanitySiteConfig;
  previous?: Maybe<SanitySiteConfig>;
};

export type SanitySiteConfigFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'defaultSEO____key'
  | 'defaultSEO____type'
  | 'defaultSEO___pageTitle'
  | 'defaultSEO___slug____key'
  | 'defaultSEO___slug____type'
  | 'defaultSEO___slug___current'
  | 'defaultSEO___pageDescription'
  | 'defaultSEO___ogImage____key'
  | 'defaultSEO___ogImage____type'
  | 'defaultSEO___ogImage___asset____id'
  | 'defaultSEO___ogImage___asset____type'
  | 'defaultSEO___ogImage___asset____createdAt'
  | 'defaultSEO___ogImage___asset____updatedAt'
  | 'defaultSEO___ogImage___asset____rev'
  | 'defaultSEO___ogImage___asset____key'
  | 'defaultSEO___ogImage___asset___originalFilename'
  | 'defaultSEO___ogImage___asset___label'
  | 'defaultSEO___ogImage___asset___title'
  | 'defaultSEO___ogImage___asset___description'
  | 'defaultSEO___ogImage___asset___sha1hash'
  | 'defaultSEO___ogImage___asset___extension'
  | 'defaultSEO___ogImage___asset___mimeType'
  | 'defaultSEO___ogImage___asset___size'
  | 'defaultSEO___ogImage___asset___assetId'
  | 'defaultSEO___ogImage___asset___path'
  | 'defaultSEO___ogImage___asset___url'
  | 'defaultSEO___ogImage___asset____rawMetadata'
  | 'defaultSEO___ogImage___asset____rawSource'
  | 'defaultSEO___ogImage___asset___id'
  | 'defaultSEO___ogImage___asset___children'
  | 'defaultSEO___ogImage___hotspot____key'
  | 'defaultSEO___ogImage___hotspot____type'
  | 'defaultSEO___ogImage___hotspot___x'
  | 'defaultSEO___ogImage___hotspot___y'
  | 'defaultSEO___ogImage___hotspot___height'
  | 'defaultSEO___ogImage___hotspot___width'
  | 'defaultSEO___ogImage___crop____key'
  | 'defaultSEO___ogImage___crop____type'
  | 'defaultSEO___ogImage___crop___top'
  | 'defaultSEO___ogImage___crop___bottom'
  | 'defaultSEO___ogImage___crop___left'
  | 'defaultSEO___ogImage___crop___right'
  | 'defaultSEO___ogImage____rawAsset'
  | 'defaultSEO___ogImage____rawHotspot'
  | 'defaultSEO___ogImage____rawCrop'
  | 'defaultSEO___pageKeyWords'
  | 'defaultSEO____rawSlug'
  | 'defaultSEO____rawOgImage'
  | '_rawDefaultSeo'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySiteConfigFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  defaultSEO?: Maybe<SanitySeoFilterInput>;
  _rawDefaultSeo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanitySiteConfigGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteConfigEdge>;
  nodes: Array<SanitySiteConfig>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanitySiteConfigSortInput = {
  fields?: Maybe<Array<Maybe<SanitySiteConfigFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanitySlider = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  sliderTitle?: Maybe<Scalars['String']>;
  slides?: Maybe<Array<Maybe<SanitySliderItem>>>;
  _rawSlides?: Maybe<Scalars['JSON']>;
};


export type SanitySlider_RawSlidesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySliderItem = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  slideContent?: Maybe<SanityImage>;
  _rawSlideContent?: Maybe<Scalars['JSON']>;
};


export type SanitySliderItem_RawSlideContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySlug = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  current?: Maybe<StringQueryOperatorInput>;
};

export type SanitySocialLink = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  socialIcon?: Maybe<SanityImage>;
  linkTo?: Maybe<Scalars['String']>;
  _rawSocialIcon?: Maybe<Scalars['JSON']>;
};


export type SanitySocialLink_RawSocialIconArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySocialLinkFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  socialIcon?: Maybe<SanityImageFilterInput>;
  linkTo?: Maybe<StringQueryOperatorInput>;
  _rawSocialIcon?: Maybe<JsonQueryOperatorInput>;
};

export type SanitySocialLinkFilterListInput = {
  elemMatch?: Maybe<SanitySocialLinkFilterInput>;
};

export type SanitySocialLinks = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<Array<Maybe<SanitySocialLink>>>;
  _rawSocialLinks?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySocialLinks_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySocialLinks_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySocialLinks_RawSocialLinksArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySocialLinksConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySocialLinksEdge>;
  nodes: Array<SanitySocialLinks>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanitySocialLinksGroupConnection>;
};


export type SanitySocialLinksConnectionDistinctArgs = {
  field: SanitySocialLinksFieldsEnum;
};


export type SanitySocialLinksConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanitySocialLinksFieldsEnum;
};

export type SanitySocialLinksEdge = {
  next?: Maybe<SanitySocialLinks>;
  node: SanitySocialLinks;
  previous?: Maybe<SanitySocialLinks>;
};

export type SanitySocialLinksFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'socialLinks'
  | 'socialLinks____key'
  | 'socialLinks____type'
  | 'socialLinks___socialIcon____key'
  | 'socialLinks___socialIcon____type'
  | 'socialLinks___socialIcon___asset____id'
  | 'socialLinks___socialIcon___asset____type'
  | 'socialLinks___socialIcon___asset____createdAt'
  | 'socialLinks___socialIcon___asset____updatedAt'
  | 'socialLinks___socialIcon___asset____rev'
  | 'socialLinks___socialIcon___asset____key'
  | 'socialLinks___socialIcon___asset___originalFilename'
  | 'socialLinks___socialIcon___asset___label'
  | 'socialLinks___socialIcon___asset___title'
  | 'socialLinks___socialIcon___asset___description'
  | 'socialLinks___socialIcon___asset___sha1hash'
  | 'socialLinks___socialIcon___asset___extension'
  | 'socialLinks___socialIcon___asset___mimeType'
  | 'socialLinks___socialIcon___asset___size'
  | 'socialLinks___socialIcon___asset___assetId'
  | 'socialLinks___socialIcon___asset___path'
  | 'socialLinks___socialIcon___asset___url'
  | 'socialLinks___socialIcon___asset____rawMetadata'
  | 'socialLinks___socialIcon___asset____rawSource'
  | 'socialLinks___socialIcon___asset___id'
  | 'socialLinks___socialIcon___asset___children'
  | 'socialLinks___socialIcon___hotspot____key'
  | 'socialLinks___socialIcon___hotspot____type'
  | 'socialLinks___socialIcon___hotspot___x'
  | 'socialLinks___socialIcon___hotspot___y'
  | 'socialLinks___socialIcon___hotspot___height'
  | 'socialLinks___socialIcon___hotspot___width'
  | 'socialLinks___socialIcon___crop____key'
  | 'socialLinks___socialIcon___crop____type'
  | 'socialLinks___socialIcon___crop___top'
  | 'socialLinks___socialIcon___crop___bottom'
  | 'socialLinks___socialIcon___crop___left'
  | 'socialLinks___socialIcon___crop___right'
  | 'socialLinks___socialIcon____rawAsset'
  | 'socialLinks___socialIcon____rawHotspot'
  | 'socialLinks___socialIcon____rawCrop'
  | 'socialLinks___linkTo'
  | 'socialLinks____rawSocialIcon'
  | '_rawSocialLinks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySocialLinksFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  socialLinks?: Maybe<SanitySocialLinkFilterListInput>;
  _rawSocialLinks?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanitySocialLinksGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySocialLinksEdge>;
  nodes: Array<SanitySocialLinks>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanitySocialLinksSortInput = {
  fields?: Maybe<Array<Maybe<SanitySocialLinksFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanitySpan = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanitySpanFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: Maybe<SanitySpanFilterInput>;
};

export type SanityStandardTab = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  productImage?: Maybe<SanityImage>;
  productDescription?: Maybe<Scalars['String']>;
  productColors?: Maybe<Array<Maybe<SanityTextureCard>>>;
  buttonLink?: Maybe<SanityLink>;
  _rawProductImage?: Maybe<Scalars['JSON']>;
  _rawProductColors?: Maybe<Scalars['JSON']>;
  _rawButtonLink?: Maybe<Scalars['JSON']>;
};


export type SanityStandardTab_RawProductImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityStandardTab_RawProductColorsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityStandardTab_RawButtonLinkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityStatement = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  statementName?: Maybe<Scalars['String']>;
  statementRole?: Maybe<Scalars['String']>;
  statementText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityStatement_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityStatement_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityStatementConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityStatementEdge>;
  nodes: Array<SanityStatement>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityStatementGroupConnection>;
};


export type SanityStatementConnectionDistinctArgs = {
  field: SanityStatementFieldsEnum;
};


export type SanityStatementConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityStatementFieldsEnum;
};

export type SanityStatementEdge = {
  next?: Maybe<SanityStatement>;
  node: SanityStatement;
  previous?: Maybe<SanityStatement>;
};

export type SanityStatementFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'statementName'
  | 'statementRole'
  | 'statementText'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityStatementFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  statementName?: Maybe<StringQueryOperatorInput>;
  statementRole?: Maybe<StringQueryOperatorInput>;
  statementText?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityStatementGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityStatementEdge>;
  nodes: Array<SanityStatement>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityStatementSortInput = {
  fields?: Maybe<Array<Maybe<SanityStatementFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanitySustainabilityPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seoBlock?: Maybe<SanitySeo>;
  pageContent?: Maybe<Array<Maybe<SanityCtaOrHeroPlainOrLeftRightBlockOrProjectsPreviewOrTextSection>>>;
  _rawSeoBlock?: Maybe<Scalars['JSON']>;
  _rawPageContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySustainabilityPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySustainabilityPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySustainabilityPage_RawSeoBlockArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanitySustainabilityPage_RawPageContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySustainabilityPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySustainabilityPageEdge>;
  nodes: Array<SanitySustainabilityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanitySustainabilityPageGroupConnection>;
};


export type SanitySustainabilityPageConnectionDistinctArgs = {
  field: SanitySustainabilityPageFieldsEnum;
};


export type SanitySustainabilityPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanitySustainabilityPageFieldsEnum;
};

export type SanitySustainabilityPageEdge = {
  next?: Maybe<SanitySustainabilityPage>;
  node: SanitySustainabilityPage;
  previous?: Maybe<SanitySustainabilityPage>;
};

export type SanitySustainabilityPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'seoBlock____key'
  | 'seoBlock____type'
  | 'seoBlock___pageTitle'
  | 'seoBlock___slug____key'
  | 'seoBlock___slug____type'
  | 'seoBlock___slug___current'
  | 'seoBlock___pageDescription'
  | 'seoBlock___ogImage____key'
  | 'seoBlock___ogImage____type'
  | 'seoBlock___ogImage___asset____id'
  | 'seoBlock___ogImage___asset____type'
  | 'seoBlock___ogImage___asset____createdAt'
  | 'seoBlock___ogImage___asset____updatedAt'
  | 'seoBlock___ogImage___asset____rev'
  | 'seoBlock___ogImage___asset____key'
  | 'seoBlock___ogImage___asset___originalFilename'
  | 'seoBlock___ogImage___asset___label'
  | 'seoBlock___ogImage___asset___title'
  | 'seoBlock___ogImage___asset___description'
  | 'seoBlock___ogImage___asset___sha1hash'
  | 'seoBlock___ogImage___asset___extension'
  | 'seoBlock___ogImage___asset___mimeType'
  | 'seoBlock___ogImage___asset___size'
  | 'seoBlock___ogImage___asset___assetId'
  | 'seoBlock___ogImage___asset___path'
  | 'seoBlock___ogImage___asset___url'
  | 'seoBlock___ogImage___asset____rawMetadata'
  | 'seoBlock___ogImage___asset____rawSource'
  | 'seoBlock___ogImage___asset___id'
  | 'seoBlock___ogImage___asset___children'
  | 'seoBlock___ogImage___hotspot____key'
  | 'seoBlock___ogImage___hotspot____type'
  | 'seoBlock___ogImage___hotspot___x'
  | 'seoBlock___ogImage___hotspot___y'
  | 'seoBlock___ogImage___hotspot___height'
  | 'seoBlock___ogImage___hotspot___width'
  | 'seoBlock___ogImage___crop____key'
  | 'seoBlock___ogImage___crop____type'
  | 'seoBlock___ogImage___crop___top'
  | 'seoBlock___ogImage___crop___bottom'
  | 'seoBlock___ogImage___crop___left'
  | 'seoBlock___ogImage___crop___right'
  | 'seoBlock___ogImage____rawAsset'
  | 'seoBlock___ogImage____rawHotspot'
  | 'seoBlock___ogImage____rawCrop'
  | 'seoBlock___pageKeyWords'
  | 'seoBlock____rawSlug'
  | 'seoBlock____rawOgImage'
  | '_rawSeoBlock'
  | '_rawPageContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySustainabilityPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  seoBlock?: Maybe<SanitySeoFilterInput>;
  _rawSeoBlock?: Maybe<JsonQueryOperatorInput>;
  _rawPageContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanitySustainabilityPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySustainabilityPageEdge>;
  nodes: Array<SanitySustainabilityPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanitySustainabilityPageSortInput = {
  fields?: Maybe<Array<Maybe<SanitySustainabilityPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanitySwatchCard = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  swatchName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featureImage?: Maybe<SanityImage>;
  textures?: Maybe<Array<Maybe<SanityTextureCard>>>;
  _rawFeatureImage?: Maybe<Scalars['JSON']>;
  _rawTextures?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySwatchCard_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySwatchCard_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySwatchCard_RawFeatureImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanitySwatchCard_RawTexturesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySwatchCardConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySwatchCardEdge>;
  nodes: Array<SanitySwatchCard>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanitySwatchCardGroupConnection>;
};


export type SanitySwatchCardConnectionDistinctArgs = {
  field: SanitySwatchCardFieldsEnum;
};


export type SanitySwatchCardConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanitySwatchCardFieldsEnum;
};

export type SanitySwatchCardEdge = {
  next?: Maybe<SanitySwatchCard>;
  node: SanitySwatchCard;
  previous?: Maybe<SanitySwatchCard>;
};

export type SanitySwatchCardFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'swatchName'
  | 'description'
  | 'featureImage____key'
  | 'featureImage____type'
  | 'featureImage___asset____id'
  | 'featureImage___asset____type'
  | 'featureImage___asset____createdAt'
  | 'featureImage___asset____updatedAt'
  | 'featureImage___asset____rev'
  | 'featureImage___asset____key'
  | 'featureImage___asset___originalFilename'
  | 'featureImage___asset___label'
  | 'featureImage___asset___title'
  | 'featureImage___asset___description'
  | 'featureImage___asset___sha1hash'
  | 'featureImage___asset___extension'
  | 'featureImage___asset___mimeType'
  | 'featureImage___asset___size'
  | 'featureImage___asset___assetId'
  | 'featureImage___asset___path'
  | 'featureImage___asset___url'
  | 'featureImage___asset___metadata____key'
  | 'featureImage___asset___metadata____type'
  | 'featureImage___asset___metadata___lqip'
  | 'featureImage___asset___metadata___hasAlpha'
  | 'featureImage___asset___metadata___isOpaque'
  | 'featureImage___asset___metadata____rawLocation'
  | 'featureImage___asset___metadata____rawDimensions'
  | 'featureImage___asset___metadata____rawPalette'
  | 'featureImage___asset___source____key'
  | 'featureImage___asset___source____type'
  | 'featureImage___asset___source___name'
  | 'featureImage___asset___source___id'
  | 'featureImage___asset___source___url'
  | 'featureImage___asset____rawMetadata'
  | 'featureImage___asset____rawSource'
  | 'featureImage___asset___fixed___width'
  | 'featureImage___asset___fixed___height'
  | 'featureImage___asset___fixed___src'
  | 'featureImage___asset___fixed___srcSet'
  | 'featureImage___asset___fixed___base64'
  | 'featureImage___asset___fixed___srcWebp'
  | 'featureImage___asset___fixed___srcSetWebp'
  | 'featureImage___asset___fluid___aspectRatio'
  | 'featureImage___asset___fluid___src'
  | 'featureImage___asset___fluid___srcSet'
  | 'featureImage___asset___fluid___sizes'
  | 'featureImage___asset___fluid___base64'
  | 'featureImage___asset___fluid___srcWebp'
  | 'featureImage___asset___fluid___srcSetWebp'
  | 'featureImage___asset___id'
  | 'featureImage___asset___parent___id'
  | 'featureImage___asset___parent___children'
  | 'featureImage___asset___children'
  | 'featureImage___asset___children___id'
  | 'featureImage___asset___children___children'
  | 'featureImage___asset___internal___content'
  | 'featureImage___asset___internal___contentDigest'
  | 'featureImage___asset___internal___description'
  | 'featureImage___asset___internal___fieldOwners'
  | 'featureImage___asset___internal___ignoreType'
  | 'featureImage___asset___internal___mediaType'
  | 'featureImage___asset___internal___owner'
  | 'featureImage___asset___internal___type'
  | 'featureImage___hotspot____key'
  | 'featureImage___hotspot____type'
  | 'featureImage___hotspot___x'
  | 'featureImage___hotspot___y'
  | 'featureImage___hotspot___height'
  | 'featureImage___hotspot___width'
  | 'featureImage___crop____key'
  | 'featureImage___crop____type'
  | 'featureImage___crop___top'
  | 'featureImage___crop___bottom'
  | 'featureImage___crop___left'
  | 'featureImage___crop___right'
  | 'featureImage____rawAsset'
  | 'featureImage____rawHotspot'
  | 'featureImage____rawCrop'
  | 'textures'
  | 'textures____id'
  | 'textures____type'
  | 'textures____createdAt'
  | 'textures____updatedAt'
  | 'textures____rev'
  | 'textures____key'
  | 'textures___textureName'
  | 'textures___textureThumbnail____key'
  | 'textures___textureThumbnail____type'
  | 'textures___textureThumbnail___asset____id'
  | 'textures___textureThumbnail___asset____type'
  | 'textures___textureThumbnail___asset____createdAt'
  | 'textures___textureThumbnail___asset____updatedAt'
  | 'textures___textureThumbnail___asset____rev'
  | 'textures___textureThumbnail___asset____key'
  | 'textures___textureThumbnail___asset___originalFilename'
  | 'textures___textureThumbnail___asset___label'
  | 'textures___textureThumbnail___asset___title'
  | 'textures___textureThumbnail___asset___description'
  | 'textures___textureThumbnail___asset___sha1hash'
  | 'textures___textureThumbnail___asset___extension'
  | 'textures___textureThumbnail___asset___mimeType'
  | 'textures___textureThumbnail___asset___size'
  | 'textures___textureThumbnail___asset___assetId'
  | 'textures___textureThumbnail___asset___path'
  | 'textures___textureThumbnail___asset___url'
  | 'textures___textureThumbnail___asset____rawMetadata'
  | 'textures___textureThumbnail___asset____rawSource'
  | 'textures___textureThumbnail___asset___id'
  | 'textures___textureThumbnail___asset___children'
  | 'textures___textureThumbnail___hotspot____key'
  | 'textures___textureThumbnail___hotspot____type'
  | 'textures___textureThumbnail___hotspot___x'
  | 'textures___textureThumbnail___hotspot___y'
  | 'textures___textureThumbnail___hotspot___height'
  | 'textures___textureThumbnail___hotspot___width'
  | 'textures___textureThumbnail___crop____key'
  | 'textures___textureThumbnail___crop____type'
  | 'textures___textureThumbnail___crop___top'
  | 'textures___textureThumbnail___crop___bottom'
  | 'textures___textureThumbnail___crop___left'
  | 'textures___textureThumbnail___crop___right'
  | 'textures___textureThumbnail____rawAsset'
  | 'textures___textureThumbnail____rawHotspot'
  | 'textures___textureThumbnail____rawCrop'
  | 'textures___images'
  | 'textures___images____key'
  | 'textures___images____type'
  | 'textures___images___asset____id'
  | 'textures___images___asset____type'
  | 'textures___images___asset____createdAt'
  | 'textures___images___asset____updatedAt'
  | 'textures___images___asset____rev'
  | 'textures___images___asset____key'
  | 'textures___images___asset___originalFilename'
  | 'textures___images___asset___label'
  | 'textures___images___asset___title'
  | 'textures___images___asset___description'
  | 'textures___images___asset___sha1hash'
  | 'textures___images___asset___extension'
  | 'textures___images___asset___mimeType'
  | 'textures___images___asset___size'
  | 'textures___images___asset___assetId'
  | 'textures___images___asset___path'
  | 'textures___images___asset___url'
  | 'textures___images___asset____rawMetadata'
  | 'textures___images___asset____rawSource'
  | 'textures___images___asset___id'
  | 'textures___images___asset___children'
  | 'textures___images___hotspot____key'
  | 'textures___images___hotspot____type'
  | 'textures___images___hotspot___x'
  | 'textures___images___hotspot___y'
  | 'textures___images___hotspot___height'
  | 'textures___images___hotspot___width'
  | 'textures___images___crop____key'
  | 'textures___images___crop____type'
  | 'textures___images___crop___top'
  | 'textures___images___crop___bottom'
  | 'textures___images___crop___left'
  | 'textures___images___crop___right'
  | 'textures___images____rawAsset'
  | 'textures___images____rawHotspot'
  | 'textures___images____rawCrop'
  | 'textures____rawTextureThumbnail'
  | 'textures____rawImages'
  | 'textures___id'
  | 'textures___parent___id'
  | 'textures___parent___parent___id'
  | 'textures___parent___parent___children'
  | 'textures___parent___children'
  | 'textures___parent___children___id'
  | 'textures___parent___children___children'
  | 'textures___parent___internal___content'
  | 'textures___parent___internal___contentDigest'
  | 'textures___parent___internal___description'
  | 'textures___parent___internal___fieldOwners'
  | 'textures___parent___internal___ignoreType'
  | 'textures___parent___internal___mediaType'
  | 'textures___parent___internal___owner'
  | 'textures___parent___internal___type'
  | 'textures___children'
  | 'textures___children___id'
  | 'textures___children___parent___id'
  | 'textures___children___parent___children'
  | 'textures___children___children'
  | 'textures___children___children___id'
  | 'textures___children___children___children'
  | 'textures___children___internal___content'
  | 'textures___children___internal___contentDigest'
  | 'textures___children___internal___description'
  | 'textures___children___internal___fieldOwners'
  | 'textures___children___internal___ignoreType'
  | 'textures___children___internal___mediaType'
  | 'textures___children___internal___owner'
  | 'textures___children___internal___type'
  | 'textures___internal___content'
  | 'textures___internal___contentDigest'
  | 'textures___internal___description'
  | 'textures___internal___fieldOwners'
  | 'textures___internal___ignoreType'
  | 'textures___internal___mediaType'
  | 'textures___internal___owner'
  | 'textures___internal___type'
  | '_rawFeatureImage'
  | '_rawTextures'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySwatchCardFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  swatchName?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  featureImage?: Maybe<SanityImageFilterInput>;
  textures?: Maybe<SanityTextureCardFilterListInput>;
  _rawFeatureImage?: Maybe<JsonQueryOperatorInput>;
  _rawTextures?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanitySwatchCardGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySwatchCardEdge>;
  nodes: Array<SanitySwatchCard>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanitySwatchCardSortInput = {
  fields?: Maybe<Array<Maybe<SanitySwatchCardFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanitySwatchlessTab = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  productImage?: Maybe<SanityImage>;
  productDescription?: Maybe<Scalars['String']>;
  buttonLink?: Maybe<SanityLink>;
  _rawProductImage?: Maybe<Scalars['JSON']>;
  _rawButtonLink?: Maybe<Scalars['JSON']>;
};


export type SanitySwatchlessTab_RawProductImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanitySwatchlessTab_RawButtonLinkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityTabItem = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  featureImage?: Maybe<SanityImage>;
  description?: Maybe<Scalars['String']>;
  idealFor?: Maybe<SanityBlockContent>;
  features?: Maybe<SanityBlockContent>;
  _rawFeatureImage?: Maybe<Scalars['JSON']>;
  _rawIdealFor?: Maybe<Scalars['JSON']>;
  _rawFeatures?: Maybe<Scalars['JSON']>;
};


export type SanityTabItem_RawFeatureImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityTabItem_RawIdealForArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityTabItem_RawFeaturesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityTabsDisplay = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  tabs?: Maybe<Array<Maybe<SanityTabItem>>>;
  _rawTabs?: Maybe<Scalars['JSON']>;
};


export type SanityTabsDisplay_RawTabsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityTeamMember = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  memberName?: Maybe<Scalars['String']>;
  memberImage?: Maybe<SanityImage>;
  memberRole?: Maybe<Scalars['String']>;
  _rawMemberImage?: Maybe<Scalars['JSON']>;
};


export type SanityTeamMember_RawMemberImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityTestimonials = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  subHeader?: Maybe<Scalars['String']>;
  statements?: Maybe<Scalars['String']>;
};

export type SanityTextSection = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  textContent?: Maybe<SanityBlockContent>;
  _rawTextContent?: Maybe<Scalars['JSON']>;
};


export type SanityTextSection_RawTextContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityTextSectionFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  textContent?: Maybe<SanityBlockContentFilterInput>;
  _rawTextContent?: Maybe<JsonQueryOperatorInput>;
};

export type SanityTextureCard = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  textureName?: Maybe<Scalars['String']>;
  textureThumbnail?: Maybe<SanityImage>;
  images?: Maybe<Array<Maybe<SanityImage>>>;
  _rawTextureThumbnail?: Maybe<Scalars['JSON']>;
  _rawImages?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityTextureCard_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityTextureCard_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityTextureCard_RawTextureThumbnailArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityTextureCard_RawImagesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityTextureCardConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityTextureCardEdge>;
  nodes: Array<SanityTextureCard>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityTextureCardGroupConnection>;
};


export type SanityTextureCardConnectionDistinctArgs = {
  field: SanityTextureCardFieldsEnum;
};


export type SanityTextureCardConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityTextureCardFieldsEnum;
};

export type SanityTextureCardEdge = {
  next?: Maybe<SanityTextureCard>;
  node: SanityTextureCard;
  previous?: Maybe<SanityTextureCard>;
};

export type SanityTextureCardFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'textureName'
  | 'textureThumbnail____key'
  | 'textureThumbnail____type'
  | 'textureThumbnail___asset____id'
  | 'textureThumbnail___asset____type'
  | 'textureThumbnail___asset____createdAt'
  | 'textureThumbnail___asset____updatedAt'
  | 'textureThumbnail___asset____rev'
  | 'textureThumbnail___asset____key'
  | 'textureThumbnail___asset___originalFilename'
  | 'textureThumbnail___asset___label'
  | 'textureThumbnail___asset___title'
  | 'textureThumbnail___asset___description'
  | 'textureThumbnail___asset___sha1hash'
  | 'textureThumbnail___asset___extension'
  | 'textureThumbnail___asset___mimeType'
  | 'textureThumbnail___asset___size'
  | 'textureThumbnail___asset___assetId'
  | 'textureThumbnail___asset___path'
  | 'textureThumbnail___asset___url'
  | 'textureThumbnail___asset___metadata____key'
  | 'textureThumbnail___asset___metadata____type'
  | 'textureThumbnail___asset___metadata___lqip'
  | 'textureThumbnail___asset___metadata___hasAlpha'
  | 'textureThumbnail___asset___metadata___isOpaque'
  | 'textureThumbnail___asset___metadata____rawLocation'
  | 'textureThumbnail___asset___metadata____rawDimensions'
  | 'textureThumbnail___asset___metadata____rawPalette'
  | 'textureThumbnail___asset___source____key'
  | 'textureThumbnail___asset___source____type'
  | 'textureThumbnail___asset___source___name'
  | 'textureThumbnail___asset___source___id'
  | 'textureThumbnail___asset___source___url'
  | 'textureThumbnail___asset____rawMetadata'
  | 'textureThumbnail___asset____rawSource'
  | 'textureThumbnail___asset___fixed___width'
  | 'textureThumbnail___asset___fixed___height'
  | 'textureThumbnail___asset___fixed___src'
  | 'textureThumbnail___asset___fixed___srcSet'
  | 'textureThumbnail___asset___fixed___base64'
  | 'textureThumbnail___asset___fixed___srcWebp'
  | 'textureThumbnail___asset___fixed___srcSetWebp'
  | 'textureThumbnail___asset___fluid___aspectRatio'
  | 'textureThumbnail___asset___fluid___src'
  | 'textureThumbnail___asset___fluid___srcSet'
  | 'textureThumbnail___asset___fluid___sizes'
  | 'textureThumbnail___asset___fluid___base64'
  | 'textureThumbnail___asset___fluid___srcWebp'
  | 'textureThumbnail___asset___fluid___srcSetWebp'
  | 'textureThumbnail___asset___id'
  | 'textureThumbnail___asset___parent___id'
  | 'textureThumbnail___asset___parent___children'
  | 'textureThumbnail___asset___children'
  | 'textureThumbnail___asset___children___id'
  | 'textureThumbnail___asset___children___children'
  | 'textureThumbnail___asset___internal___content'
  | 'textureThumbnail___asset___internal___contentDigest'
  | 'textureThumbnail___asset___internal___description'
  | 'textureThumbnail___asset___internal___fieldOwners'
  | 'textureThumbnail___asset___internal___ignoreType'
  | 'textureThumbnail___asset___internal___mediaType'
  | 'textureThumbnail___asset___internal___owner'
  | 'textureThumbnail___asset___internal___type'
  | 'textureThumbnail___hotspot____key'
  | 'textureThumbnail___hotspot____type'
  | 'textureThumbnail___hotspot___x'
  | 'textureThumbnail___hotspot___y'
  | 'textureThumbnail___hotspot___height'
  | 'textureThumbnail___hotspot___width'
  | 'textureThumbnail___crop____key'
  | 'textureThumbnail___crop____type'
  | 'textureThumbnail___crop___top'
  | 'textureThumbnail___crop___bottom'
  | 'textureThumbnail___crop___left'
  | 'textureThumbnail___crop___right'
  | 'textureThumbnail____rawAsset'
  | 'textureThumbnail____rawHotspot'
  | 'textureThumbnail____rawCrop'
  | 'images'
  | 'images____key'
  | 'images____type'
  | 'images___asset____id'
  | 'images___asset____type'
  | 'images___asset____createdAt'
  | 'images___asset____updatedAt'
  | 'images___asset____rev'
  | 'images___asset____key'
  | 'images___asset___originalFilename'
  | 'images___asset___label'
  | 'images___asset___title'
  | 'images___asset___description'
  | 'images___asset___sha1hash'
  | 'images___asset___extension'
  | 'images___asset___mimeType'
  | 'images___asset___size'
  | 'images___asset___assetId'
  | 'images___asset___path'
  | 'images___asset___url'
  | 'images___asset___metadata____key'
  | 'images___asset___metadata____type'
  | 'images___asset___metadata___lqip'
  | 'images___asset___metadata___hasAlpha'
  | 'images___asset___metadata___isOpaque'
  | 'images___asset___metadata____rawLocation'
  | 'images___asset___metadata____rawDimensions'
  | 'images___asset___metadata____rawPalette'
  | 'images___asset___source____key'
  | 'images___asset___source____type'
  | 'images___asset___source___name'
  | 'images___asset___source___id'
  | 'images___asset___source___url'
  | 'images___asset____rawMetadata'
  | 'images___asset____rawSource'
  | 'images___asset___fixed___width'
  | 'images___asset___fixed___height'
  | 'images___asset___fixed___src'
  | 'images___asset___fixed___srcSet'
  | 'images___asset___fixed___base64'
  | 'images___asset___fixed___srcWebp'
  | 'images___asset___fixed___srcSetWebp'
  | 'images___asset___fluid___aspectRatio'
  | 'images___asset___fluid___src'
  | 'images___asset___fluid___srcSet'
  | 'images___asset___fluid___sizes'
  | 'images___asset___fluid___base64'
  | 'images___asset___fluid___srcWebp'
  | 'images___asset___fluid___srcSetWebp'
  | 'images___asset___id'
  | 'images___asset___parent___id'
  | 'images___asset___parent___children'
  | 'images___asset___children'
  | 'images___asset___children___id'
  | 'images___asset___children___children'
  | 'images___asset___internal___content'
  | 'images___asset___internal___contentDigest'
  | 'images___asset___internal___description'
  | 'images___asset___internal___fieldOwners'
  | 'images___asset___internal___ignoreType'
  | 'images___asset___internal___mediaType'
  | 'images___asset___internal___owner'
  | 'images___asset___internal___type'
  | 'images___hotspot____key'
  | 'images___hotspot____type'
  | 'images___hotspot___x'
  | 'images___hotspot___y'
  | 'images___hotspot___height'
  | 'images___hotspot___width'
  | 'images___crop____key'
  | 'images___crop____type'
  | 'images___crop___top'
  | 'images___crop___bottom'
  | 'images___crop___left'
  | 'images___crop___right'
  | 'images____rawAsset'
  | 'images____rawHotspot'
  | 'images____rawCrop'
  | '_rawTextureThumbnail'
  | '_rawImages'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityTextureCardFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  textureName?: Maybe<StringQueryOperatorInput>;
  textureThumbnail?: Maybe<SanityImageFilterInput>;
  images?: Maybe<SanityImageFilterListInput>;
  _rawTextureThumbnail?: Maybe<JsonQueryOperatorInput>;
  _rawImages?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityTextureCardFilterListInput = {
  elemMatch?: Maybe<SanityTextureCardFilterInput>;
};

export type SanityTextureCardGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityTextureCardEdge>;
  nodes: Array<SanityTextureCard>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityTextureCardSortInput = {
  fields?: Maybe<Array<Maybe<SanityTextureCardFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityWideImageBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  wideImage?: Maybe<SanityImage>;
  _rawWideImage?: Maybe<Scalars['JSON']>;
};


export type SanityWideImageBlock_RawWideImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___projectId'
  | 'pluginCreator___pluginOptions___dataset'
  | 'pluginCreator___pluginOptions___token'
  | 'pluginCreator___pluginOptions___watchMode'
  | 'pluginCreator___pluginOptions___overlayDrafts'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___namespace'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___alias____components'
  | 'pluginCreator___pluginOptions___alias____shared'
  | 'pluginCreator___pluginOptions___alias____sub'
  | 'pluginCreator___pluginOptions___alias____lib'
  | 'pluginCreator___pluginOptions___alias____pages'
  | 'pluginCreator___pluginOptions___alias____util'
  | 'pluginCreator___pluginOptions___alias____assets'
  | 'pluginCreator___pluginOptions___alias____graphql_types'
  | 'pluginCreator___pluginOptions___siteUrl'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___sitemap'
  | 'pluginCreator___pluginOptions___policy'
  | 'pluginCreator___pluginOptions___policy___userAgent'
  | 'pluginCreator___pluginOptions___policy___allow'
  | 'pluginCreator___pluginOptions___engine'
  | 'pluginCreator___pluginOptions___options___encode'
  | 'pluginCreator___pluginOptions___options___tokenize'
  | 'pluginCreator___pluginOptions___options___threshold'
  | 'pluginCreator___pluginOptions___engineOptions'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___ref'
  | 'pluginCreator___pluginOptions___store'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___projectId'
  | 'pluginOptions___dataset'
  | 'pluginOptions___token'
  | 'pluginOptions___watchMode'
  | 'pluginOptions___overlayDrafts'
  | 'pluginOptions___displayName'
  | 'pluginOptions___minify'
  | 'pluginOptions___namespace'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___alias____components'
  | 'pluginOptions___alias____shared'
  | 'pluginOptions___alias____sub'
  | 'pluginOptions___alias____lib'
  | 'pluginOptions___alias____pages'
  | 'pluginOptions___alias____util'
  | 'pluginOptions___alias____assets'
  | 'pluginOptions___alias____graphql_types'
  | 'pluginOptions___siteUrl'
  | 'pluginOptions___host'
  | 'pluginOptions___sitemap'
  | 'pluginOptions___policy'
  | 'pluginOptions___policy___userAgent'
  | 'pluginOptions___policy___allow'
  | 'pluginOptions___engine'
  | 'pluginOptions___options___encode'
  | 'pluginOptions___options___tokenize'
  | 'pluginOptions___options___threshold'
  | 'pluginOptions___engineOptions'
  | 'pluginOptions___query'
  | 'pluginOptions___ref'
  | 'pluginOptions___store'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  projectId?: Maybe<Scalars['String']>;
  dataset?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  watchMode?: Maybe<Scalars['Boolean']>;
  overlayDrafts?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  alias?: Maybe<SitePluginPluginOptionsAlias>;
  siteUrl?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  sitemap?: Maybe<Scalars['String']>;
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsPolicy>>>;
  engine?: Maybe<Scalars['String']>;
  options?: Maybe<SitePluginPluginOptionsOptions>;
  engineOptions?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  store?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAlias = {
  _components?: Maybe<Scalars['String']>;
  _shared?: Maybe<Scalars['String']>;
  _sub?: Maybe<Scalars['String']>;
  _lib?: Maybe<Scalars['String']>;
  _pages?: Maybe<Scalars['String']>;
  _util?: Maybe<Scalars['String']>;
  _assets?: Maybe<Scalars['String']>;
  _graphql_types?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAliasFilterInput = {
  _components?: Maybe<StringQueryOperatorInput>;
  _shared?: Maybe<StringQueryOperatorInput>;
  _sub?: Maybe<StringQueryOperatorInput>;
  _lib?: Maybe<StringQueryOperatorInput>;
  _pages?: Maybe<StringQueryOperatorInput>;
  _util?: Maybe<StringQueryOperatorInput>;
  _assets?: Maybe<StringQueryOperatorInput>;
  _graphql_types?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  projectId?: Maybe<StringQueryOperatorInput>;
  dataset?: Maybe<StringQueryOperatorInput>;
  token?: Maybe<StringQueryOperatorInput>;
  watchMode?: Maybe<BooleanQueryOperatorInput>;
  overlayDrafts?: Maybe<BooleanQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  alias?: Maybe<SitePluginPluginOptionsAliasFilterInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  sitemap?: Maybe<StringQueryOperatorInput>;
  policy?: Maybe<SitePluginPluginOptionsPolicyFilterListInput>;
  engine?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
  engineOptions?: Maybe<StringQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  ref?: Maybe<StringQueryOperatorInput>;
  store?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsOptions = {
  encode?: Maybe<Scalars['String']>;
  tokenize?: Maybe<Scalars['String']>;
  threshold?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsOptionsFilterInput = {
  encode?: Maybe<StringQueryOperatorInput>;
  tokenize?: Maybe<StringQueryOperatorInput>;
  threshold?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  allow?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  allow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPolicyFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};
