"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { blogPosts } from "@/data/dummy/blogPosts";
import { truncateText } from "@/lib/textUtils";

const BlogGrid: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;
  const postsPerPage = 6;

  // Sort posts by newest first
  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    []
  );

  // Calculate pagination
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = sortedPosts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    router.push(`/blog?page=${page}`);
  };
  
  return (
    <>
      <div className="blog-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {currentPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <div className="blog-item">
                  <div className="blog-top">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative w-full bg-white flex items-center justify-center" style={{ width: '366px', height: '283px' }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={416}
                          height={283}
                          style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                          className="w-auto h-auto"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="blog-bottom">
                    <h3>
                      <Link href={`/blog/${post.slug}`}>
                        {truncateText(post.title, 50)}
                      </Link>
                    </h3>
                    <p>{truncateText(post.excerpt, 100)}</p>
                    <ul>
                      <li>
                        <Link href={`/blog/${post.slug}`}>
                          Read More <i className="icofont-long-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <i className="icofont-calendar"></i>
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="row justify-content-center mt-5">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={
                        currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handlePageChange(Math.min(totalPages, currentPage + 1))
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
