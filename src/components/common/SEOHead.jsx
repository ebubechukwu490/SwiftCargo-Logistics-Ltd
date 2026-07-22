import { useEffect } from 'react';
import { SEO_PAGES, SEO_DEFAULT, LOCAL_BUSINESS_SCHEMA } from '@/constants/seo';

function Helmet({ children }) {
  useEffect(() => {
    const elements = [];
    const childArray = Array.isArray(children) ? children.filter(Boolean) : [children].filter(Boolean);

    childArray.forEach((child) => {
      if (!child?.props) return;
      const { children: content, ...props } = child.props;

      if (child.type === 'title') {
        document.title = content;
        return;
      }

      if (child.type === 'script') {
        const script = document.createElement('script');
        Object.entries(props).forEach(([key, val]) => script.setAttribute(key, val));
        script.textContent = content;
        document.head.appendChild(script);
        elements.push(script);
        return;
      }

      const attrName = props.name ? 'name' : props.property ? 'property' : 'rel';
      const attrValue = props.name || props.property || props.rel;
      let el = document.querySelector(`[${attrName}="${attrValue}"]`);

      if (!el) {
        el = document.createElement(child.type === 'link' ? 'link' : 'meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }

      if (child.type === 'link') {
        el.href = props.href;
      } else {
        el.content = content;
      }
      elements.push(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el.tagName === 'SCRIPT') el.remove();
      });
    };
  }, [children]);

  return null;
}

export default function SEOHead({ page = 'home' }) {
  const meta = SEO_PAGES[page] || SEO_PAGES.home;
  const url = `${SEO_DEFAULT.baseUrl}${meta.path}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SEO_DEFAULT.siteName} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={SEO_DEFAULT.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_DEFAULT.twitterHandle} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={SEO_DEFAULT.ogImage} />
      {page === 'home' && (
        <script type="application/ld+json">
          {JSON.stringify(LOCAL_BUSINESS_SCHEMA)}
        </script>
      )}
    </Helmet>
  );
}
