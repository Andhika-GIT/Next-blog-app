import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  { slug: 'getting-started-with-nextjs', title: 'Getting started with Nextjs', image: 'getting-started-nextjs.png', excerpt: 'NextJS is react framework for production', date: '2022-02-10' },
  { slug: 'getting-started-with-nextjs', title: 'Getting started with Nextjs', image: 'getting-started-nextjs.png', excerpt: 'NextJS is react framework for production', date: '2022-02-10' },
  { slug: 'getting-started-with-nextjs', title: 'Getting started with Nextjs', image: 'getting-started-nextjs.png', excerpt: 'NextJS is react framework for production', date: '2022-02-10' },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
