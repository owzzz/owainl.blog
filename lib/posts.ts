/* eslint-disable no-unused-vars */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Prisma, Post } from '@prisma/client';
import prisma from './prisma';

const postsDirectory = path.join(process.cwd(), 'posts');

export type Path = {
  params: {
    id: string,
  }
}

export type StaticPost = {
    id: number,
    title: string,
    excerpt?: string,
    content: string,
    createdAt: string,
    published: boolean,
    slug: string;
}

export function getAllPosts(): StaticPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id: Number(id),
      ...matterResult.data,
    } as StaticPost;
  });
  // Filter by Sort posts by date
  return allPosts
    .filter((post) => Boolean(post.published) === true)
    .sort((a: StaticPost, b: StaticPost) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
  });
}

export function getPost(id: string): Post | null {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const isPublished = Boolean(matterResult.data.published);

  if (!isPublished) {
    return null;
  }

  // Combine the data with the id
  return {
    id: Number(id),
    content: matterResult.content,
    ...matterResult.data,
  } as Post;
}

export async function findUniquePostBySlug(slug: string): Promise<Post | null> {
  const post = await prisma.post.findUnique({
    where: {
      slug,
    } as Prisma.PostWhereUniqueInput
  });

  return post;
}