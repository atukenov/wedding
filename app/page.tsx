import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Details from "@/components/Details";
import DressCode from "@/components/DressCode";
import Organizers from "@/components/Organizers";
import Rsvp from "@/components/Rsvp";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Countdown />
      <Details />
      <DressCode />
      <Organizers />
      <Rsvp />
    </main>
  );
}
