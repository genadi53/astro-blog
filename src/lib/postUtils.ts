import type { CollectionEntry } from "astro:content";

type BlogPosts = CollectionEntry<"blog">;

export function filterPosts(
  posts: BlogPosts[],
  {
    sortByDate = true,
    filterTag,
    limit,
  }: {
    sortByDate?: boolean;
    filterTag?: string;
    limit?: number;
  },
) {
  let filteredPosts = posts;
  if (filterTag !== undefined) {
    filteredPosts = posts.reduce((acc, post) => {
      if (post.data.tag === filterTag) {
        acc.push(post);
      }
      return acc;
    }, [] as BlogPosts[]);
  }

  if (sortByDate) {
    return filteredPosts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .slice(0, limit);
  }

  return filteredPosts.slice(0, limit);
}

export function getTags(posts: BlogPosts[]) {
  return posts
    .map((post) => {
      return post.data.tag;
    })
    .filter((tag) => Boolean(tag)) as string[];
}

type TagCount = {
  [key: string]: number;
};

export function getPostPerTagCount(tags: string[]) {
  const tagCounts = tags.reduce((acc, tag) => {
    const value = acc[tag] || 0;
    return {
      ...acc,
      [tag]: value + 1,
    };
  }, {} as TagCount);
  return tagCounts;
}
