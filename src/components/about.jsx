export default function About(){
    return(
        <>
      <section className="about py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
        <h2 className="display-5 fw-bold mb-3">Our Mission</h2>
        <p className=" fs-5 mb-4 text-wrap">
          At <strong>SOLAR-COM</strong>, we are committed to providing clean, renewable energy solutions for homes and businesses. Our mission is to make solar energy accessible and affordable for everyone.
        </p>
        <p className=" fs-5 mb-4 text-wrap">
          With <strong>13</strong> years of experience in the solar industry, our team of experts is dedicated to delivering high-quality solar installations and exceptional customer service. Join us in our journey toward a sustainable future.
        </p>
      </div>

      <div className="col-md-6 text-center">
        <img 
          src="https://cdn.pixabay.com/photo/2016/11/18/12/10/white-male-1834133_640.jpg" 
          alt="Solar panels installation" 
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  </div>
</section>

        </>
    )
}