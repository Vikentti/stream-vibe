import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";

export const metadata = {
  title: 'Home',
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
    </>
  )
}
