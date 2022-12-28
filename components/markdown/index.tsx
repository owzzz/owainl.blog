import { roboto } from '../../lib/fonts';
import styles from './index.module.css';

type Props = {
  html: string
  className?: string;
}

export default function Markdown({ html, className }: Props) {
  return (
    <div className={`${className} ${styles.markdown} ${roboto.variable} font-body`} dangerouslySetInnerHTML={{ __html: html }} />
  );
}