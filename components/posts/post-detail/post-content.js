import PostHeader from './post-header';

const DUMMY_POST = { slug: 'getting-started-with-nextjs', title: 'Getting started with Nextjs', image: 'getting-started-nextjs.png', date: '2022-02-10', content: '# This is a first post' };

const PostContent = () => {
  const image = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  const title = DUMMY_POST.title;
  return (
    <article>
      <PostHeader title={title} image={image} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
