import Link from "next/link";
import Head from "next/head";

export default function Home() {
 
  return (
    <div>
      <Head>
        <title>Next.js Custom Error</title>
        <meta name="description" content="Next.js Custom Error" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Link href="/client-error"><a>Client Error</a></Link>
        <div />
        <Link href="/server-error"><a>Server Error</a></Link>
      </div>
    </div>
  );
}
