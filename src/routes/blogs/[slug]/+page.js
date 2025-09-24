import { blogs } from '$lib/data/blogs.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      status: 404,
      error: new Error('Blog not found')
    };
  }

  return { resource: blog };
}

