let userConfig = undefined

try {
  // ESM 형식 불러오기 시도
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    // CJS 형식 백업 시도
    userConfig = await import('./v0-user-next.config')
  } catch (innerError) {
    // 무시
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // ✅ Cloudflare SSR 지원을 위한 핵심 설정

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

if (userConfig) {
  const config = userConfig.default || userConfig

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig
