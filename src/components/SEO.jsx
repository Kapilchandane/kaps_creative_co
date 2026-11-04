import { useEffect } from "react";

export default function SEO({
  title,
  description,
  image,
  type = "website",
  noindex = false,
}) {
  useEffect(() => {
    const siteName = "Kaps Creative Co.";
    const origin =
      (typeof window !== "undefined" && window.location.origin) ||
      "https://kapilchandane.github.io";
    const base = import.meta.env.BASE_URL || "/";
    const siteUrl = `${origin}${base}`.replace(/\/+$/, "");
    const defaultImage = `${siteUrl}/images/projects/social-media-campaign/mockup-poster.webp`;

    const fullTitle = title
      ? `${title} | ${siteName}`
      : `${siteName} | Creative Digital Agency`;

    const defaultDescription =
      "Kaps Creative Co. offers branding, packaging design, social media creatives, website development and digital solutions.";

    const finalDescription = description || defaultDescription;
    const finalImage = image
      ? new URL(image, `${origin}${base}`).href
      : defaultImage;
    const canonical = `${origin}${window.location.pathname}`;

    document.title = fullTitle;

    function setMeta(selector, attr, key, value) {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
      return tag;
    }

    function setLink(rel, href) {
      let tag = document.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", rel);
        document.head.appendChild(tag);
      }
      tag.setAttribute("href", href);
    }

    // Basic
    setMeta('meta[name="description"]', "name", "description", finalDescription);
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex,nofollow" : "index,follow");
    setMeta('meta[name="theme-color"]', "name", "theme-color", "#7c3aed");

    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", siteName);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", finalDescription);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", finalImage);
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", fullTitle);
    setMeta('meta[property="og:locale"]', "property", "og:locale", "en_US");

    // Twitter
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", finalDescription);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", finalImage);

    return () => {};
  }, [title, description, image, type, noindex]);

  return null;
}