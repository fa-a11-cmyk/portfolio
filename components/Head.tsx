import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Fatma Adel is an avid Cloud & DevOps Engineer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Fatma adel, Fatma, adel, web developer portfolio, Fatma web developer,  mern stack, Fatma adel portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Fatma Adel's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nitin Ranganath',
};
