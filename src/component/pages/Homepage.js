import React from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import About from "../layouts/About";
import Experience from "../layouts/Experience";
import Work from "../layouts/Work";
import Contact from "../layouts/Contact";
import Projects from "../layouts/Projects";
import Alerts from "../layouts/Alerts";
import ContactsModal from "../common/ContactsModal";
import Icons from "../layouts/Icons";
import LeftSide from "../common/LeftSide";
import RightSide from "../common/RightSide";
import ScrollTop from "../common/scrollTop";

import { connect } from "react-redux";
import { fetchProjects } from "../../actions/projects";
import Navbar from "../layouts/Navbar";
import ScrollToTop from "../common/ScrollToTop";

document.title = "Noor-E-Jannat";

function Homepage({ error }) {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Alerts />
        <ContactsModal />
        <LeftSide />
        <Header />
        <About />
        <Experience />
        <Work />
        <Projects />
        <Contact />
        <ScrollTop />
        <Icons />
        <RightSide />
        <div className="alerts">
          {error.msg.error ? (
            <>
              <i className="fa fa-exclamation"></i>
              <h5>{error.msg.error}</h5>
            </>
          ) : (
            ""
          )}

          {error.msg.success ? (
            <>
              <i className="fa fa-check"></i>
              <h5>{error.msg.success}</h5>
            </>
          ) : (
            ""
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  error: state.errors,
});

export default connect(mapStateToProps, { fetchProjects })(Homepage);
