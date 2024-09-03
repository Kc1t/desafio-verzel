// Components
import Footer from "@/components/Footer";
import Announcement from "@/components/home/Announcement";
import Header from "@/components/home/Header";
import HighGrades2024 from "@/components/home/HighGrades2024";
import HorrorContainer from "@/components/home/HorrorContainer";
import PopularMovies from "@/components/home/PopularMovies";
import UpcomingMovies from "@/components/home/UpcomingMovies";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-x-hidden bg-background-dark">
      <Header />
      <HighGrades2024 />
      <HorrorContainer />
      <PopularMovies />
      <UpcomingMovies />
      <Announcement />
      <Footer />
    </div>
  );
}
