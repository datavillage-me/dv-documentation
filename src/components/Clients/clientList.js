import styles from "./styles.module.css";
import fluviusLogo from "../../../static/img/clients/fluvius.png";
import belfiusLogo from "../../../static/img/clients/belfius.png";
import eliaLogo from "../../../static/img/clients/elia.png";
import cfitLogo from "../../../static/img/clients/cfit.png";
import fluxysLogo from "../../../static/img/clients/fluxys.png";
import rbcLogo from "../../../static/img/clients/rbc.png";
import vrtLogo from "../../../static/img/clients/vrt.png";
import sndkLogo from "../../../static/img/clients/sndk.png";
import athumiLogo from "../../../static/img/partners/athumi.png";
import spwLogo from "../../../static/img/clients/spw.png";
import microsoftLogo from "../../../static/img/partners/microsoft.png";
import temenosLogo from "../../../static/img/partners/temenos.png";
import ibmLogo from "../../../static/img/partners/ibm.png";
import imecLogo from "../../../static/img/partners/imec.png";

// TODO: show SVGs
const ClientList = [
  <img src={fluviusLogo} width="250" className={styles.clientsImg} />,
  <img src={belfiusLogo} width="250" className={styles.clientsImgSmall} />,
  <img src={eliaLogo} width="250" className={styles.clientsImg} />,
  <img src={cfitLogo} width="250" className={styles.clientsImg} />,
  <img src={fluxysLogo} width="250" className={styles.clientsImg} />,
  <img src={rbcLogo} width="250" className={styles.clientsImg} />,
  <img src={vrtLogo} width="250" className={styles.clientsImg} />,
  <img src={sndkLogo} width="250" className={styles.clientsImg} />,
  <img src={athumiLogo} width="250" className={styles.clientsImgMedium} />,
  <img src={spwLogo} width="250" className={styles.clientsImgMedium} />,
  <img src={microsoftLogo} width="250" className={styles.clientsImgMedium} />,
  <img src={temenosLogo} width="250" className={styles.clientsImgMedium} />,
  <img src={ibmLogo} width="250" className={styles.clientsImgMedium} />,
  <img src={imecLogo} width="250" className={styles.clientsImgMedium} />,
];

export { ClientList };
