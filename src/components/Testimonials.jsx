import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  { name: "John", text: "Amazing service!" },
  { name: "Grace", text: "Very professional." },
  { name: "Samuel", text: "Highly recommended." }
];

function Testimonials() {

  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-12">
          What Clients Say
        </h2>

        <Swiper spaceBetween={30} slidesPerView={1} loop={true}>

          {data.map((d, i) => (

            <SwiperSlide key={i}>

              <div className="bg-slate-900 p-10 rounded-3xl text-center border border-slate-800">

                <p className="text-slate-300 text-lg">
                  "{d.text}"
                </p>

                <h3 className="text-cyan-400 mt-6 font-semibold">
                  {d.name}
                </h3>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Testimonials;