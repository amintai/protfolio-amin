"use client";

import { ExternalLink } from 'lucide-react';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface BlogShowcaseProps {
  blog: import('@/lib/data').Blogs;
}

const BlogShowCase = ({ blog }: BlogShowcaseProps) => {

  return (
    <div>
      <div
        onClick={() => {
          window.open(blog.link);
        }}
        className="rounded-xl border bg-card text-card-foreground shadow cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
      >
        <div className="space-y-2 p-6">
          <div className="flex space-x-4 ">
            <div>
              <Avatar>
                <AvatarImage src={blog.logo}  style={{imageRendering: '-webkit-optimize-contrast'}}/>
                <AvatarFallback>Blog Logo</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="space-x-2 font-semibold leading-none tracking-tight">
              {blog.title}
            </h3>
            <ExternalLink height={15} width={15} />
          </div>
          <p className="text-sm text-muted-foreground">{blog.description}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogShowCase;