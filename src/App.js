import { Helmet } from "react-helmet";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Pricing from "./components/sections/Pricing";
import Investment from "./components/sections/Investment";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Stars IT – Professional IT Support Services</title>
        <meta
          name="description"
          content="Reliable, smart IT support and solutions by Chadley Starkey."
        />
        <meta property="og:site_name" content="Stars IT" />
<meta property="og:locale" content="en_ZA" />

        <meta
          name="keywords"
          content="IT support, tech support, network setup, Stars IT, computer repair, IT services, Chadley Starkey"
        />
        <meta name="author" content="Chadley Starkey" />
        <link rel="canonical" href="https://project-LKH.github.io/stars-it/" />

        {/* Optional: Social Preview Meta Tags (Open Graph / Twitter) */}
        <meta
          property="og:title"
          content="Stars IT – Professional IT Support Services"
        />
        <meta
          property="og:description"
          content="Reliable, smart IT support and solutions by Chadley Starkey."
        />
        <meta
          property="og:url"
          content="https://project-LKH.github.io/stars-it/"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Stars IT",
            url: "https://project-LKH.github.io/stars-it/",
            telephone: "+27 76 909 2178",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Durban",
              addressLocality: "Durban",
              addressCountry: "ZA",
            },
            description:
              "Reliable, smart IT support and network services by Chadley Starkey.",
            founder: "Chadley Starkey",
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Investment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
