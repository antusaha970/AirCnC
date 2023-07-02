import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#A5FCD4"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="300" height="95" />
    <rect x="0" y="105" rx="0" ry="0" width="193" height="12" />
    <rect x="0" y="130" rx="0" ry="0" width="301" height="18" />
    <circle cx="13" cy="173" r="14" />
    <circle cx="56" cy="174" r="14" />
    <circle cx="97" cy="176" r="14" />
    <circle cx="136" cy="177" r="14" />
    <circle cx="171" cy="179" r="14" />
  </ContentLoader>
);

export default MyLoader;
