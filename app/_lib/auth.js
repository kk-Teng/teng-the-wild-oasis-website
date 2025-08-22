import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import { createGuest, getGuest } from "@/app/_lib/data-service";

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    callbacks: {
        // TODO check if user already logged in
        authorized({ auth, request }) {
            return auth && auth.user
        },
        // TODO do something on signing in
        async signIn({ user }) {
            try {
                const existingGuest = await getGuest(user.email)
                if (existingGuest === null) {
                    await createGuest({ email: user.email, fullName: user.name })
                }
                return true
            } catch (ignore) {
                return false
            }
        },
        // TODO middleware session, 是每次调用auth()都会触发吗?
        async session({ session }) {
            const currentGuest = await getGuest(session.user.email)
            session.guestId = currentGuest.id
            return session
        }
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        }),
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ]
})