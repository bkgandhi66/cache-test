import { useRouter } from 'next/router';

export default function Post({ post }:any) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // Example paths that you might fetch from an external source
  const posts = [
    { id: 'post-1' },
    { id: 'post-2' },
  ];

  const paths = posts.map((post) => ({
    params: { slug: post.id },
  }));

  return { paths, fallback: true }; // `fallback: true` allows statically generated fallback pages
}

export async function getStaticProps({ params }:any) {
  // Fetch post data based on slug
  const posts:any = {
    'post-1': { title: 'Post 1', content: 'This is the content of post 1.' },
    'post-2': { title: 'Post 2', content: 'This is the content of post 2.' },
  };

  return {
    props: {
      post: posts?.[params?.slug] || null,
    },
    revalidate:120
  };
}
