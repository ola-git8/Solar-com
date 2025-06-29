export default function Projects({ data }) {
  return (
    <section className="projects py-5 bg-light" id="projects">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4">{data.title}</h2>
        <p className="mb-5">{data.description}</p>

        <div className="row g-4">
          {data.items.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.img.src}
                  alt={project.img.alt}
                  className="card-img-top uniform-img lazyload"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
