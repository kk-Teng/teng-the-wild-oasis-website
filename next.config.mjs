/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://ilskzbrvgtbastztbxxp.supabase.co/**'), new URL('https://dclaevazetcjjkrzczpc.supabase.co/**'), {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            pathname: '/u/**',
        }]
    }
};

export default nextConfig;
