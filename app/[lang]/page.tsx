// app/[lang]/page.tsx

import HomeIndex from "@/components/home/HomeIndex";

interface PageProps {
  params: { lang: string };
}

export default function Page({ params }: PageProps) {
  return <HomeIndex params={params} />;
}
