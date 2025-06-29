export default function Contact(){
return(
    <section className="contact py-5 bg-white" id="contact">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold">Contact Us</h2>
      <p className="text-muted">We'd love to hear from you. Reach out for inquiries or consultations.</p>
    </div>

    <div className="row g-4">
      {/* Contact Form */}
      <div className="col-md-6">
        <form id="contactForm" onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you! Your message has been received.');
          e.target.reset();
        }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100">Send Message</button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="col-md-6">
        <div className="mb-4">
          <h5>Address</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore</p>
          <h5>Email</h5>
          <p>info@solar-com.ng</p>
          <h5>Phone</h5>
          <p>+234 123 456 789</p>
        </div>

      
        <div className="mt-4">
          <h5>Follow Us</h5>
          <div className="d-flex gap-3 mt-2">
            <a href="#" className="text-dark fs-4"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-dark fs-4"><i className="bi bi-x"></i></a>
            <a href="#" className="text-dark fs-4"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-dark fs-4"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}

