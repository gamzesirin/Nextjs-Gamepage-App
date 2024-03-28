'use client'

import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navRef = useRef()

	const toggleNavbar = () => {
		setIsMenuOpen(!isMenuOpen)
		navRef.current.classList.toggle(styles.responsive_nav)
	}

	return (
		<div className={styles.rnHeader}>
			<div className={styles.rnHeaderContainer}>
				<div className={styles.rnLogoContainer}>
					<Image src="/image/logo.svg" alt="Logo" width={260} height={50} />
				</div>
				<button className={styles.navBtn} onClick={toggleNavbar}>
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</button>
				<div className={`${styles.rnMenuContainer} ${isMenuOpen ? styles.show : ''}`}>
					<nav ref={navRef} className={`${styles.nav} ${isMenuOpen ? styles.responsive_nav : ''}`}>
						{/* HOME  */}
						<ul className={styles.ul}>
							<Link href="/">HOME</Link>
						</ul>
						{/* GAMES  */}
						<ul className={styles.ul}>
							<Link href="/games">GAMES</Link>
						</ul>
						{/* ABOUT */}
						<ul className={styles.ul}>
							<Link href="/about">ABOUT</Link>
						</ul>

						{/* CONTACT */}
						<ul className={styles.ul}>
							<Link href="/contact">CONTACT</Link>
						</ul>
						{/* Whitepaper  */}
						<ul className={styles.ul}>
							<Link href="/Whitepaper">WHİTEPAPER</Link>
						</ul>
						<div className={styles.enddiv}>
							{/* CONNECT WALLET Button */}
							<button className={`${styles.button} ${styles.button1}`}>CONNECT WALLET</button>
							{/* MARKETPLACE Button */}
							<button className={`${styles.button} ${styles.button2}`}>MARKETPLACE</button>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Navbar
