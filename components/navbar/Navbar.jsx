'use client'

import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'

import Image from 'next/image'
import styles from './Navbar.module.css'
import { useRef } from 'react'

const Navbar = () => {
	const [isHomeOpen, setIsHomeOpen] = useState(false)
	const [isPagesOpen, setIsPagesOpen] = useState(false)
	const [isGamesOpen, setIsGamesOpen] = useState(false)

	const navRef = useRef()

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav')
	}

	return (
		<div className={styles.rnHeader}>
			<div className={styles.rnHeaderContainer}>
				<div className={styles.rnLogoContainer}>
					<Image src="/image/logo.svg" alt="Logo" width={260} height={50} />
				</div>
				<div className={styles.rnMenuContainer}>
					{/* HOME Dropdown */}
					<div className={styles.header}>
						<nav ref={navRef} className={styles.nav}>
							<div
								className={styles.dropdownItem}
								onMouseEnter={() => setIsHomeOpen(true)}
								onMouseLeave={() => setIsHomeOpen(false)}
							>
								<a href="#">HOME</a>
								{isHomeOpen && (
									<div className={styles.dropdownMenu}>
										<a href="#">Submenu 1</a>
										<a href="#">Submenu 2</a>
									</div>
								)}
								<Image src="/image/arrow.svg" alt="Search" width={12} height={12} />
							</div>
							{/* ABOUT */}
							<ul className={styles.ul}>
								<li>
									<a href="/about">ABOUT</a>
								</li>
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
								<Image src="/image/search.svg" alt="Search" width={24} height={24} />
								<input type="text" placeholder="Arama yapınız..." className={styles.searchInput} />
							</div>
							{/* CONNECT WALLET Button */}
							<button className={`${styles.button} ${styles.button1}`}>CONNECT WALLET</button>
							{/* MARKETPLACE Button */}
							<button className={`${styles.button} ${styles.button2}`}>MARKETPLACE</button>
						</nav>
					</div>
					<button className="nav-btn" onClick={showNavbar}>
						<FaBars />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
