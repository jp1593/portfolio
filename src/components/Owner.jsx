import OWN from "../assets/OWN.jpeg";
import "./Owner.css";
import Socials from "../components/Social";

export default function Owner() {
  return (
    <section class="p-10">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="flex flex-col gap-10 text-center">
            <img class="ownimage mx-auto" src={OWN} />
            <div class="flex flex-col gap-3">
              <h1 class="text-white text-5xl">Juan Pablo Estrada Lucero</h1>
              <p class="rolcolor text-2xl">
                Full Stack Developer / Backend developer
              </p>
              <p class="text-6xl mb-5">🇬🇹</p>
              <Socials />
              <p class="text-white text-xl mt-10">
                I am a systems engineer and student of technology, I work as a
                full stack developer with a greater focus on the Backend
                section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
