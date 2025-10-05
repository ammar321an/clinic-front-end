import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import TopHeader from "../../../components/Layouts/TopHeader";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogDetailsWrapper from "../../../components/Blog/BlogDetails/BlogDetailsWrapper";
import { getBlogDetailBySlug, getBlogPostBySlug, blogDetailsData } from "@/data/dummy/blogPosts";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blogDetail = getBlogDetailBySlug(params.slug);

  if (!blogDetail) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blogDetail.title,
    description: blogDetail.metaDescription,
    openGraph: {
      title: blogDetail.title,
      description: blogDetail.metaDescription,
      images: [
        {
          url: blogDetail.ogImage,
          width: 1200,
          height: 630,
          alt: blogDetail.title,
        },
      ],
      type: "article",
      publishedTime: blogDetail.publishedDate,
      authors: blogDetail.author ? [blogDetail.author] : undefined,
      tags: blogDetail.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blogDetail.title,
      description: blogDetail.metaDescription,
      images: [blogDetail.ogImage],
    },
  };
}

// Generate static params for all blog posts (for static generation)
export async function generateStaticParams() {
  return blogDetailsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }: PageProps) {
  const blogDetail = getBlogDetailBySlug(params.slug);
  const blogPost = getBlogPostBySlug(params.slug);

  // If blog not found, show 404
  if (!blogDetail) {
    notFound();
  }

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogDetail.title,
    description: blogDetail.metaDescription,
    image: blogDetail.ogImage,
    datePublished: blogDetail.publishedDate,
    author: {
      "@type": "Person",
      name: blogDetail.author || "Anonymous",
    },
    publisher: {
      "@type": "Organization",
      name: "Your Clinic Name",
      logo: {
        "@type": "ImageObject",
        url: "/images/logo.png", // Update with your logo path
      },
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TopHeader />
      <Navbar />
      
      <PageBanner
        pageTitle={blogDetail.title}
        homePageUrl="/"
        homePageText="Home"
        activePageText={blogDetail.title}
        bgImage="/images/page-banner4.jpg"
      />

      <BlogDetailsWrapper blogDetail={blogDetail} />

      <Footer />
    </>
  );
}