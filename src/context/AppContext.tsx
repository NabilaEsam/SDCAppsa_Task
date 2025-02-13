'use client'
import React, { ReactNode, useEffect, useState } from "react";
export type Posts = {
id:number;
title:string;
description:string;
published_date:string;
};

interface AppContextInterface {
posts:Posts[];
}
const AppContext = React.createContext<Partial<AppContextInterface>>({});



export function ApiProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        console.log('data in context: ',data)
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <AppContext.Provider value={{ posts }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
