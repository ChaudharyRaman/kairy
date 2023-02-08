import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { OnboardingScreenOne } from './OnboardingScreenOne'
import { OnboardingScreenTwo } from './OnboardingScreenTwo'
import { OnboardingScreenThree } from './OnboardingScreenThree'

interface IOnboardingProps {
	setOnboarding: React.Dispatch<React.SetStateAction<boolean | undefined>>
}
export const Onboarding: React.FC<IOnboardingProps> = ({ setOnboarding }) => {
	const [currentScreen, setCurrentScreen] = useState(1)

	useEffect(() => {
		// initialize theme
		if (!localStorage.getItem('kairy.theme')) {
			document.querySelector(':root')!.setAttribute('theme', 'light')
		}
	}, [])
	useEffect(() => {
		if (currentScreen == 4) {
			setOnboarding(true)
		}
	}, [currentScreen])
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<h1>Getting Started</h1>
				<p>{currentScreen} of 3</p>
			</div>
			{currentScreen == 1 && (
				<OnboardingScreenOne setCurrentScreen={setCurrentScreen} />
			)}
			{currentScreen == 2 && (
				<OnboardingScreenTwo setCurrentScreen={setCurrentScreen} />
			)}
			{currentScreen == 3 && (
				<OnboardingScreenThree setCurrentScreen={setCurrentScreen} />
			)}
		</div>
	)
}
