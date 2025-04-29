// app/[lang]/page.tsx
import HomeIndex from "@/components/home/HomeIndex";

interface PageProps {
  params: { lang: string };
}

export default async function Page({ params }: PageProps) {
  return <HomeIndex params={params} />;
}
