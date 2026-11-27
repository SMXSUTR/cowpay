import styles from "./styles/PasosParaUsarCowpay.module.css";


type TarjetasProps = {
  titulo: string;
  texto: string;
  numero: number;
  
};

export default function PasosParaUsarCowpay({ numero, titulo, texto }: TarjetasProps) {
  return (
    <div className={styles.paso}>
      <div className={styles.pasoTitulo}>
        <span className={styles.numero}>{numero}</span>
        <h3>{titulo}</h3>
      </div>
      <p>{texto}</p>
    </div>
  );
}

