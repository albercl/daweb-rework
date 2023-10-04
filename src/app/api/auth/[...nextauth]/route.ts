import NextAuth, {NextAuthOptions} from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_APP_ID as string,
            clientSecret: process.env.GITHUB_APP_SECRET as string,
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };