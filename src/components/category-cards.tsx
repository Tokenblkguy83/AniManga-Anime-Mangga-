import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpenIcon, PlayCircleIcon } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="container mx-auto px-4 max-md:px-0 py-8">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
        <Card className="w-full mx-auto">
          <CardHeader className="flex flex-row items-center gap-4">
            <PlayCircleIcon className="w-8 h-8 text-primary" />
            <div>
              <CardTitle className="text-2xl">Anime</CardTitle>
              <p className="text-sm text-muted-foreground">
                Jelajahi koleksi anime kami yang luas
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="/anime_catalog.jpg"
              alt="Anime collection"
              className="w-full h-[300px] object-cover rounded-md max-md:h-[200px]"
            />
            <p className="text-sm text-muted-foreground hidden md:block">
              Selami dunia penceritaan yang menawan, animasi yang memukau, dan karakter yang tak terlupakan. Bagian anime kami menawarkan beragam berbagai genre, mulai dari Shonen yang penuh aksi hingga yang mengharukan seri irisan kehidupan. Apakah Anda seorang otaku berpengalaman atau baru anime, Anda akan menemukan sesuatu untuk disukai di kami yang dikurasi dengan cermat koleksi.
            </p>
            <p className="text-sm text-muted-foreground block md:hidden">
              Rasakan kisah-kisah yang mendebarkan dan animasi yang menakjubkan berbagai genre. Apakah Anda seorang penggemar berpengalaman atau pendatang baru, kami koleksi memiliki sesuatu untuk semua orang.
            </p>
          </CardContent>
          <CardFooter>
            <Link className="w-full" href={"/pages/Anime"}>
              <Button className="w-full">Explore Anime</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpenIcon className="w-8 h-8 text-primary" />
            <div>
              <CardTitle className="text-2xl">Manga</CardTitle>
              <p className="text-sm text-muted-foreground">
                Discover our extensive manga library
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="/manga_catalog.jpg"
              alt="Manga collection"
              className="w-full h-[300px] object-cover rounded-md max-md:h-[200px]"
            />
            <p className="text-sm text-muted-foreground hidden md:block">
              Benamkan diri Anda dalam dunia komik Jepang yang kaya. Manga kami bagian menampilkan karya-karya dari mangaka terkenal di berbagai macam genre. Dari saga epik yang mencakup ratusan bab hingga pendek, cerita yang berdampak, koleksi kami melayani semua bacaan preferensi.
            </p>
            <p className="text-sm text-muted-foreground block md:hidden">
              Selami kisah-kisah menawan dari para pencipta top Jepang. Manga kami Koleksinya menawarkan perpaduan seri jangka panjang dan pendek, kuat narasi yang diperuntukkan bagi semua pembaca.
            </p>
          </CardContent>
          <CardFooter>
            <Link className="w-full" href={"/pages/Manga"}>
              <Button className="w-full">Jelajahi Manga</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
