'use client'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

import {auth} from './firebase/firebase'
import { useRouter } from 'next/navigation'
onAuthStateChanged(auth, (user)=>{
	if(user){
		console.error(user)
	}
	else{
		console.error("NO USER")
	}
})
export function getUser() {
	const [user, setUser] = useState()
	const router = useRouter()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (authUser) => {
			setUser(authUser)
		})

		return () => unsubscribe()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		onAuthStateChanged(auth, (authUser) => {
			console.error(`user : ${user}` )
			if (user === undefined) return

			// refresh when user changed to ease testing
			if (user?.email !== authUser?.email) {
				router.refresh()
			}
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	return user
}
