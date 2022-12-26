import { roboto } from '../../lib/fonts';
import styles from './index.module.css';

type Props = {
  html: string
}

export default function Markdown({ html }: Props) {
  return (
    <div className={`${styles.markdown} ${roboto.variable} font-body`} dangerouslySetInnerHTML={{ __html: html }} />
  )
}