import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
    name: "John David",
    text: "Passy Technologies built our website beautifully."
  },
  {
    name: "Grace Michael",
    text: "Fast delivery and professional service."
  },
  {
    name: "Samuel Peter",
    text: "Highly recommended tech company."
  }
];

function TestimonialsSlider() {

  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">

          What Clients Say

        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
        >

          {data.map((item, i) => (

            <SwiperSlide key={i}>

              <div className="bg-slate-800 p-10 rounded-3xl text-center">

                <p className="text-slate-300 text-lg">
                  "{item.text}"
                </p>

                <h3 className="text-cyan-400 mt-6 font-semibold">
                  {item.name}
                </h3>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default TestimonialsSlider;