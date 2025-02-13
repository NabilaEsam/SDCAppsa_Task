'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Post = {
    id: string;
    img: string;
    title: string;
    discription: string;
    published_date: string;
}

export const BlogCard = ({ post }: { post: Post }) => {
    const route = useRouter()

    const handleNavigation = (id: string) => {
        route.push(`/posts/${id}`);
    };
    return (
        <div>
            <div className="relative delay-150 duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:transition-all  bg-white dark:bg-gray-900 rounded-lg p-4">
                <div className="relative w-full h-auto aspect-[16/9] mb-4">
                    <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <p className="text-xs font-medium bg-transparent text-gray-500 dark:text-gray-300 mt-6">{post.published_date}</p>
                <Link href={`/posts/${post.id}`} className="cursor-pointer">
                    <h3 className="mt-4 text-base text-gray-900 dark:text-gray-100 font-semibold">
                        {post.title}
                    </h3>
                </Link>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-200 mt-4">{post.discription}</p>
                <button className="mt-6 text-sm font-semibold bg-indigo-500 hover:bg-indigo-900  text-white p-4 focus:ring-1 rounded-2xl"
                    onClick={() => handleNavigation(post.id.toString())}
                >Learn More</button>
            </div>
        </div>
    );
}