// components/Services.jsx

import { serviceData } from "./Data";

const Services = () => {
    return (
        <div className="services-container">
            <h2>Services</h2>
            <div className="services-grid">
                {serviceData && serviceData.map((service) => (
                    <div className="service-card" key={service.id}>
                        <div className="service-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                            <div className="small-icons">
                                <a href={service.gitHubLink}><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Services;