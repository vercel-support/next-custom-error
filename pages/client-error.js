import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";

export default function ClientError() {

	useEffect(() => {
		throw new Error("throwing from client")
	})
 
  return (
    <div>
      <Head>
        <title>Next.js Custom Error - Client </title>
        <meta name="description" content="Next.js Custom Error - Client" />
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