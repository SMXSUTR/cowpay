import styles from "./styles/PasosParaUsarCowpay.module.css";

type TarjetasProps = {
  titulo: string;
  texto: string;
  
};

export default function PasosParaUsarCowpay({ titulo, texto }: TarjetasProps) {
  return (
      <div className={styles.pasos}>
        <div className={styles.paso}>
          <div className={styles.pasoTitulo}>
            <span className={styles.numero}>1</span>
            <h3>{titulo}</h3>
          </div>
          <p>{texto}</p>
        </div>
      </div>
  );
}

{/* <div className={styles.pasos}>
          <div className={styles.paso}>
            <div className={styles.pasoTitulo}>
              <span className={styles.numero}>1</span>
              <h3>Escanea el QR</h3>
            </div>
            <p>
              Cada mesa tiene su propio código. Al escanearlo, CowPay ya sabe en
              qué restaurante estás y en qué mesa te sentaste. No tienes que
              escribir nada.
            </p>
          </div>

          import styles from "../styles/InicioPublicoPage.module.css";

type TarjetasProps = {
  titulo: string;
  texto: string;
};

export function MesaCard({ number, status }: MesaCardProps) {
  return (
    <article>
      <h2>Mesa {number}</h2>
      <p>{status}</p>
    </article>
  );
}

export default function PasosParaUsarCowpay({titulo, texto}: TarjetasProps) {
    return (
        <>
          <div className={styles.pasos}>
          <div className={styles.paso}>
            <div className={styles.pasoTitulo}>
              <span className={styles.numero}>1</span>
              <h3>Escanea el QR</h3>
            </div>
            <p>
              Cada mesa tiene su propio código. Al escanearlo, CowPay ya sabe en
              qué restaurante estás y en qué mesa te sentaste. No tienes que
              escribir nada.
            </p>
          </div>

          <div className={styles.paso}>
            <div className={styles.pasoTitulo}>
              <span className={styles.numero}>2</span>
              <h3>Pide y disfruta</h3>
            </div>
            <p>
              Ves el menú con fotos, precios y lo que está agotado hoy. Escoges
              y el pedido entra directo a la cocina.
            </p>
          </div>

          <div className={styles.paso}>
            <div className={styles.pasoTitulo}>
              <span className={styles.numero}>3</span>
              <h3>Paga o divide</h3>
            </div>
            <p>
              Cuando terminen, cada quien paga lo que consumió, en partes
              iguales o por el monto que definan.
            </p>
          </div>
        </div>
        </>
    );
*/}