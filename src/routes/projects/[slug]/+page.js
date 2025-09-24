import { getProjectBySlug } from '$lib/data/projects.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      status: 404,
      error: new Error('Project not found')
    };
  }

  return { project };
}


