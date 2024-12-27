import { Container } from "reactstrap";
import SectionTitle from "./section-title";
import styles from "./styles.module.css";
import { ClientList } from "./clientList";

export default function Clients() {
  return (
    <section className={styles.section}>
      <Container className={styles.flex}>
        <SectionTitle title="Trusted by customers and partners" />
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {ClientList.map((element) => (
              <div className={styles.slide}>{element}</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
