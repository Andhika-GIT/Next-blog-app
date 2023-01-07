import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// define the path to getting-started-with-nextjs.md file
const postsDirectory = path.join(process.cwd(), 'content/posts');

const getPostData = (fileName) => {
  // path.join to create absolute path
  // 'content/posts/getting-started-with-nextjs'
  const filePath = path.join(postsDirectory, fileName);

  // using absolute file to get all the content from getting-started-with-nextjs.md file
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  //   extract data and content from the result of matter function
  const { data, content } = matter(fileContent);

  //   create post slug by using file name without md extension
  const postSlug = fileName.replace(/\.md$/, ''); //  remove .md file extension

  //   create post data
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return getPostData;
};

const getAllPosts = () => {
  // reading getting-started-with-nextjs.md file
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return sortedPosts;
};
