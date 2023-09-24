import Titulo from "@/components/Titulo"
import styles from './layout.module.css'

export const metadata = {
  title: 'Conta Certa',
  description: 'Controle as finanças da sua empresa em um só lugar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">  
    <head>
      <link rel="shortcut icon" href="../logoVerde.png" type="image/x-icon" />  
    </head>    
      <body className={styles.body}>
        <Titulo />
        {children}
      </body>
    </html>
  )
}
