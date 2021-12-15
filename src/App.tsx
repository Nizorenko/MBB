import { Header } from "@/components/Header";

import { Presentation } from "@/components/Presentation";
import { Company } from "./components/Company";
import { Preview } from "./components/Preview";
import { Benefits } from "./components/Benefits";
import { Proposal } from "./components/Proposal";
import { Comment } from "./components/Comment";
import { Feedback } from "./components/Feedback";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Company />
      <Presentation />
      <Preview />
      <Benefits />
      <Proposal />
      <Comment />
      <Feedback />
      <Footer />
    </>
  );
}
