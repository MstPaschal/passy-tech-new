function BusinessHours() {
  return (
    <section className="py-20 bg-slate-900">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-slate-800 rounded-3xl p-10">

          <h2 className="text-3xl font-bold text-white mb-8">

            Business Hours

          </h2>

          <div className="space-y-4 text-slate-300">

            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>8:00 AM - 7:00 PM</span>
            </div>

            <div className="flex justify-between">
              <span>Saturday</span>
              <span>9:00 AM - 4:00 PM</span>
            </div>

            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BusinessHours;