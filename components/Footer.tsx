"use client";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrap">
          <div className="brand-block">
            <div className="logo">BRAND</div>
            <div className="credit">Website made by You</div>
          </div>

          <div>
            <h5>Products</h5>
            <a href="#">BRAND One</a>
            <a href="#">BRAND Pure</a>
            <a href="#">Find retailer</a>
          </div>

          <div>
            <h5>Company</h5>
            <a href="#">About us</a>
            <a href="#">Light knowledge</a>
            <a href="#">Magazine</a>
          </div>

          <div>
            <h5>More</h5>
            <a href="#">Contact</a>
            <a href="#">Support</a>
            <a href="#">Downloads</a>
          </div>

          <div className="news">
            <h5>Subscribe to the newsletter</h5>
            <input type="email" placeholder="E-Mail" />
            <button type="button">Sign up</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
