import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";


import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import { motion } from "framer-motion";
import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import home from './../assets/homepage.jpg';
import "./styles/homepage.css";
import useScrollToTop from "./../Hooks/useScrollToTop.jsx";
import useScrollEffect from './../Hooks/handleScroll.jsx'
const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
  const [initialLogoSize, setInitialLogoSize] = useState(80);

  useScrollToTop();
  const { logoSize, stayLogo: scrollStayLogo } = useScrollEffect();

	const currentSEO = SEO.find((item) => item.page === "home");
 const Job="I 'm a Front-end Developer and PhotoGrapher .";
 
	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
      
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>
				
			
				  <div className="homepage-container">
						<div className="homepage-first-area">
							
							
							
						<header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
      
		<motion.h1 className='name'>
      {Job.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
      

        
     
      </div>
    </header>
							
							




						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
					
					
				
					
				</div>
			</div>
		
		</React.Fragment>
	);
};

export default Homepage;
