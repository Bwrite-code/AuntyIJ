import { useTheme } from '../theme';
import auntyIJ from '../assets/Aunty IJ.jpg';
import auntyIJLagos from '../assets/Aunty IJ Lagos.jpg';
import auntyIJAbuja from '../assets/Aunty IJ Abuja.jpg';

const locations = [
  {
    name: 'Aunty IJ Ekiti',
    address: '123, Bamidele Olumilua University of Education, Science and Technology, Ikere-Ekiti',
    phone: '(+234) 912-074-4751',
    hours: 'Mon-Fri: 11am - 10pm',
    image: auntyIJ,
    mapLink: 'https://www.google.com/maps/search/?api=1&query=BOUESTI+Main+Gate+Ikere+Ekiti'
  },
  {
    name: 'Aunty IJ Lagos',
    address: '125, Lagos–Badagry Expressway, Ojo, Lagos State, Nigeria',
    phone: '(+234) 912-074-4751',
    hours: 'Mon-Fri: 10am - 9pm, Sat-Sun: 11am - 9pm',
    image: auntyIJLagos,
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Lagos+State+University'
  },
  {
    name: 'Aunty IJ Abuja',
    address: 'Plot 20, University Road, Gwagwalada, Abuja, FCT, Nigeria',
    phone: '(+234) 912-074-4751',
    hours: 'Every day: 12pm - 10pm',
    image: auntyIJAbuja,
    mapLink: 'https://www.google.com/maps/search/?api=1&query=University+of+Abuja+Gwagwalada+Plot+20+University+Road'
  }
];

const Locations = () => {
  const { colors } = useTheme();

  const styles = {
    main: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center' as 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '3rem',
      color: colors.primary,
    },
    subtitle: {
      fontSize: '1.2rem',
      color: colors.text,
    },
    locationsContainer: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '3rem',
    },
    locationCard: {
      display: 'flex',
      gap: '2rem',
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#f9f9f9',
    },
    locationImage: {
      width: '400px',
      height: '250px',
      objectFit: 'cover' as 'cover',
    },
    locationInfo: {
      padding: '1.5rem',
    },
    locationName: {
      fontSize: '2rem',
      color: colors.primary,
      margin: '0 0 1rem',
    },
    infoText: {
      fontSize: '1.1rem',
      color: colors.text,
      margin: '0.5rem 0',
    },
    directionsButton: {
      marginTop: '1.5rem',
      padding: '0.8rem 1.5rem',
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
    },
    mapContainer: {
        marginTop: '4rem',
        textAlign: 'center' as 'center',
    },
    mapPlaceholder: {
        border: `2px solid ${colors.primary}`,
        borderRadius: '8px',
        width: '100%',
        height: '450px',
    }
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>Our Locations</h1>
        <p style={styles.subtitle}>Come and visit us at one of our branches. We look forward to serving you!</p>
      </header>

      <div style={styles.locationsContainer}>
        {locations.map(location => (
          <div key={location.name} style={styles.locationCard}>
            <img src={location.image} alt={location.name} style={styles.locationImage} />
            <div style={styles.locationInfo}>
              <h2 style={styles.locationName}>{location.name}</h2>
              <p style={styles.infoText}><strong>Address:</strong> {location.address}</p>
              <p style={styles.infoText}><strong>Phone:</strong> {location.phone}</p>
              <p style={styles.infoText}><strong>Hours:</strong> {location.hours}</p>
              <a href={location.mapLink} target="_blank" rel="noopener noreferrer" style={styles.directionsButton}>
                Get Directions
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.mapContainer}>
        <h2 style={{...styles.title, fontSize: '2.5rem'}}>Find Us on the Map</h2>
        {/* This is a placeholder for an interactive map. You would replace this with a real map component (e.g., Google Maps, Leaflet). */}
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.184077199245!2d5.1687286!3d7.496295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047f3d86a73fd37%3A0x5204f4af28f918c5!2sBamidele%20Olumilua%20University%20of%20Education%2C%20Science%20and%20Technology%2C%20Ikere-Ekiti!5e0!3m2!1sen!2sng!4v1721825322001!5m2!1sen!2sng "
            style={styles.mapPlaceholder} 
            allowFullScreen={true} 
            loading="lazy">
        </iframe>
      </div>
    </main>
  );
};

export default Locations;