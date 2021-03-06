import React from 'react';
import NextHead from 'next/head'


const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = (props) => {
    return (
        <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || "Vantegral"}</title>
        <meta
          name="description"
          content={props.description || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={props.url || defaultOGURL} />
        <meta property="og:title" content={props.title || ""} />
        <meta
          property="og:description"
          content={props.description || defaultDescription}
        />
        <meta name="twitter:site" content={props.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
            <link rel="icon" href="/favicon.ico" />
        <script async src="https://cse.google.com/cse.js?cx=000826994324533817388:p4gpu_tsl5i"></script>
        </NextHead>
    )
}

export default Head;
