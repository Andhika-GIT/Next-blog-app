import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  { slug: 'getting-started-with-nextjs', title: 'Getting started with Nextjs', image: 'getting-started-nextjs.png', excerpt: 'NextJS is react framework for production', date: '2022-02-10' },
  { slug: 'getting-started-with-nextjs', title: 'Getting started with Nextjs', image: 'getting-started-nextjs.png', excerpt: 'NextJS is react framework for production', date: '2022-02-10' },
  { slug: 'getting-started-with-nextjs', title: 'Getting started with Nextjs', image: 'getting-started-nextjs.png', excerpt: 'NextJS is react framework for production', date: '2022-02-10' },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
