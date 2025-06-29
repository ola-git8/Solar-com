export default function Services({ data }) {
  return (
    <section className="services py-5">
      <div className="services-head text-center mb-5">
        <h1 className="serv text-uppercase fw-bold">Services</h1>
        <p className="serv-para">We offer a range of services to meet your solar energy needs.</p>
      </div>
      <div className="container py-3 gap-3">
        <div className="row">
          {data.map((service) => (
            <div className="col-md-6 col-lg-3 mb-4" key={service.id}>
              <div className="card h-100">
                <img
                  src={service.img.src}
                  alt={service.img.alt}
                  className="card-img-top uniform-img lazyload"
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
