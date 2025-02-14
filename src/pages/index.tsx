'use client';
import { BlogCard } from "@/components/BlogCard";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  img:string;
  title: string;
  discription: string;
  published_date: string;
}
export default function Home() {
  const [posts, setPost] = useState<Post[]>([]);
  useEffect(() => {
    fetch('api/posts')
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [])
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16  lg:max-w-none ">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Blogs</h2>
          <div className="mt-6 space-y-12 gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {posts.map((post) => {
              return (
                <BlogCard post={post} key={post.id} />
              )
            })}

          </div>
        </div>
      </div>
    </main>
  );
}
