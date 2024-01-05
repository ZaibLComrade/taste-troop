import useAuth from "../hooks/useAuth"

export default function Root() {
	const auth = useAuth()
	return <div>
		<h1>This is head</h1>
	</div>
}
