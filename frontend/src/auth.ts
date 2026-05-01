import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";


export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // For demo purposes: if user is not found, try guest login via admin@aquaprime.com 
        // with any password just so the demo works easily.
        let user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user && credentials.email === "admin@aquaprime.com") {
           // Auto-create demo user if they don't exist yet
           const hashedPassword = await bcrypt.hash(credentials.password as string, 10);
           user = await prisma.user.create({
             data: {
               email: "admin@aquaprime.com",
               password: hashedPassword,
               name: "Admin User",
             }
           });
        }

        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
