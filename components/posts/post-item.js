import Link from 'next/link';
import Image from 'next/image';
import classes from './post-item.module.css';

const PostItem = ({ title, image, excerpt, date, slug }) => {
  // format date into more user friendly
  const formatDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // format the image path
  const imagePath = `/image/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formatDate}</time>
          <time>{excerpt}</time>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
