import { NextApiRequest, NextApiResponse } from 'next';
import postsData from '@/data/postsData.json'; 

type Post = {
  id: string;
  img:string;
  title: string;
  discription: string;
  published_date: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  res.status(200).json(postsData);
}