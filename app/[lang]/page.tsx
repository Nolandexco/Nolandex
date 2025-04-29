import HomeIndex from "@/components/home/HomeIndex";

export default function Page({
  params,
}: {
  params: { lang: string };
}) {
  return <HomeIndex params={params} />;
}
