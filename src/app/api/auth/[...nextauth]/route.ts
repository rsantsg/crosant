import { authConfig } from "../../../../../lib/auth";
export const runtime = 'edge';
import NextAuth from "next-auth/next";
const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };