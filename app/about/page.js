import Aboutbg from '@/components/aboutbg/Aboutbg'
import Aboutcard from '@/components/aboutcard/Aboutcard'
import Aboutcards from '@/components/aboutcards/Aboutcards'
import styles from './Page.module.css'

export default function Page() {
	return (
		<div className={styles.container}>
			<Aboutbg />
			<Aboutcard />
			<Aboutcards />
		</div>
	)
}
