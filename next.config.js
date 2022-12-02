/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// when adding pictures from another source, Next will give you an error. When that happens, simply place the domain name in this file.
module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com","lh3.googleusercontent.com"],
  },
};
