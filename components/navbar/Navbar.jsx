'use client'

import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isHomeOpen, setIsHomeOpen] = useState(false)
	const [isGamesOpen, setIsGamesOpen] = useState(false)
	const [isPagesOpen, setIsPagesOpen] = useState(false)

	const navRef = useRef()

	const toggleNavbar = () => {
		setIsMenuOpen(!isMenuOpen) // Menünün durumunu değiştir
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
						<div
							className={styles.dropdownItem}
							onMouseEnter={() => setIsHomeOpen(true)}
							onMouseLeave={() => setIsHomeOpen(false)}
						>
							<a href="#">HOME</a>
							{isHomeOpen && (
								<div className={styles.dropdownMenu}>
									<a href="#">home 1</a>
									<a href="#">home 2</a>
								</div>
							)}
							<Image src="/image/arrow.svg" alt="Search" width={12} height={12} />
						</div>
						{/* ABOUT */}
						<ul className={styles.ul}>
							<Link href="/about">ABOUT</Link>
						</ul>
						{/* GAMES Dropdown */}
						<div
							className={styles.dropdownItem}
							onMouseEnter={() => setIsGamesOpen(true)}
							onMouseLeave={() => setIsGamesOpen(false)}
						>
							<a href="#">GAMES</a>
							{isGamesOpen && (
								<div className={styles.dropdownMenu}>
									<a href="#">Game 1</a>
									<a href="#">Game 2</a>
								</div>
							)}
							<Image src="/image/arrow.svg" alt="Search" width={12} height={12} />
						</div>
						{/* PAGES Dropdown */}
						<div
							className={styles.dropdownItem}
							onMouseEnter={() => setIsPagesOpen(true)}
							onMouseLeave={() => setIsPagesOpen(false)}
						>
							<a href="#">PAGES</a>
							{isPagesOpen && (
								<div className={styles.dropdownMenu}>
									<a href="#">Page 1</a>
									<a href="#">Page 2</a>
								</div>
							)}
							<Image src="/image/arrow.svg" alt="Search" width={12} height={12} />
						</div>
						{/* BLOG */}
						<ul className={styles.ul}>
							<li>
								<a href="/blog">BLOG</a>
							</li>
						</ul>
						{/* CONTACT */}
						<ul className={styles.ul}>
							<li>
								<a href="/contact">CONTACT</a>
							</li>
						</ul>
						{/* Toolbar */}
						<div className={styles.toolbar}>
							<Image src="/image/Search.svg" alt="Search" width={24} height={24} />
							<input type="text" placeholder="Arama yapınız..." className={styles.searchInput} />
						</div>
						{/* CONNECT WALLET Button */}
						<button className={`${styles.button} ${styles.button1}`}>CONNECT WALLET</button>
						{/* MARKETPLACE Button */}
						<button className={`${styles.button} ${styles.button2}`}>MARKETPLACE</button>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Navbar
