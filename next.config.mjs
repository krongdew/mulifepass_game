/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // ระบุ basePath ตามชื่อ repository ของคุณ
  basePath: '/your-repo-name',
  // ถ้าใช้ custom domain ให้ comment บรรทัดด้านบนออก
  
  // แก้ไขปัญหารูปภาพ
  images: {
    unoptimized: true,
    // เพิ่ม domains ที่อนุญาตให้โหลดรูปภาพ (ถ้าโหลดจาก external sources)
    domains: ['example.com'],
    // สำหรับ Next.js 14
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // แนวทางแก้ไขปัญหาเพิ่มเติม
  assetPrefix: './',
  trailingSlash: true,
}

module.exports = nextConfig
