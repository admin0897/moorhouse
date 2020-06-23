const Footer = () => {
  const mystyle = {
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
  };
  return (
    <footer style={mystyle} className="page-footer font-small bg-blue pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
            <p>You can contact us on 123-456-7890</p>
          </div>
          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">Our Services</h5>
            <p>You can see our services here</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <span> Moorhouse Coating</span>
      </div>
    </footer>
  );
};

export default Footer;
