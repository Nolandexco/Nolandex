import HomeIndex from "@/components/home/HomeIndex";

export default async function Home({
  params,
}: {
  params: { lang: string };
}) {
  return <HomeIndex params={params} />;
}
