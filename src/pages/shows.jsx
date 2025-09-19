import ShowsBanner from "@/sections/ShowBanner";
import MovieDetails from "@/sections/MovieDetails";
import Seasons from "@/components/Seasons";


export const metadata = {
  title: 'Show - Stranger Things'
}

export default () => {
  return (
    <>
      <ShowsBanner/>
      <MovieDetails
        seasons={<Seasons/>}
      />
    </>
  )
}
