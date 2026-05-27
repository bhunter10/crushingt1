export const PRINTIFY_STORE_URL =
  process.env.NEXT_PUBLIC_PRINTIFY_STORE_URL ?? "https://crushingt1.printify.me";

export type PrintifyProduct = {
  id: string;
  title: string;
  url: string;
  image: string | null;
  price: string | null;
};
