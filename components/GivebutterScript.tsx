import Script from "next/script";

const accountId = process.env.NEXT_PUBLIC_GIVEBUTTER_ACCOUNT_ID?.trim();

export function GivebutterScript() {
  if (!accountId) {
    return null;
  }

  return (
    <Script
      async
      src={`https://widgets.givebutter.com/latest.umd.cjs?acct=${accountId}&p=other`}
      strategy="beforeInteractive"
    />
  );
}
