// components/Services.jsx

import { serviceData } from "./Data";

const Services = () => {
    return (
        <div className="services-container">
            <h2>Services</h2>
            <div className="services-grid">
                {serviceData && serviceData.map((service) => (
                    <a className="service-card" key={service.id} href="mailto: ivantlasecaes@gmail.com">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </a>
                ))
                }
            </div>
        </div>
    )
}

export default Services;