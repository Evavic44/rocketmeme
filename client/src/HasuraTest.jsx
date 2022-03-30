import { useSession, UserButton, useUser } from "@clerk/clerk-react";
import { useQuery, gql } from "@apollo/client";

const getMemeTemplatesQuery = gql`
	query GetTemplates {
		meme_templates {
			id
			title
			image_link
		}
	}
`;

const HasuraTest = () => {
	const { user } = useUser();
	const { loading, error, data } = useQuery(getMemeTemplatesQuery);

	const { getToken } = useSession().session;
	const getMemes = async () => {
		const hasuraToken = await getToken({ template: "hasura" });
		console.log("Bearer " + hasuraToken);
		// getTemplates();
	};
	// getMemes();

	if (loading) return <p>Loading Meme Templates...</p>;
	if (error) return `Error: ${error}`;

	if (data) {
		console.log("Data: ", data);
		return <div>Data fetched</div>;
	}

	return (
		<div>
			<UserButton />

			<div>Hello, {user.firstName}</div>
			<div>
				<button onClick={getMemes}>Get Memes</button>
			</div>
		</div>
	);
};

export default HasuraTest;
