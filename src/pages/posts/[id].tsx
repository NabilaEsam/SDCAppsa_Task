
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

type Post = {
    id: string;
    img: string;
    title: string;
    discription: string;
    published_date: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts: Post[] = await res.json();
    const paths = posts.map((post) => ({ params: { id: post.id } }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts: Post[] = await res.json();
    const post = posts.find((p) => p.id === params?.id) || null;
    return { props: { post } };
};

export default function PostPage({ post }: { post?: Post }) {
    if (!post) {
        return <div className="p-4 max-w-2xl mx-auto">Post not found</div>;
    }
    return (
        <div className='pt-6 pb-32 px-14'>
            <div className="relative shadow-lg bg-white dark:bg-gray-900 rounded-lg p-4 ">

                <div className="relative w-full h-auto aspect-[16/9] mb-4">
                    <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-300 mt-6">{post.published_date}</p>
                <h3 className="mt-4 text-xl  text-gray-900 dark:text-gray-100 font-semibold">
                    {post.title}
                </h3>
                <p className="text-base font-normal text-gray-600 dark:text-gray-200 mt-4">{post.discription}</p>
            </div>
        </div>
    );
}
