import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

const FeaturedPosts = ({ posts }) => {
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
