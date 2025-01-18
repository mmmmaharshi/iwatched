export interface PostProps {
	id: string;
	user: {
		full_name: string;
		username: string;
		profile_pic: string;
	};
	caption: {
		type: 'REVIEW' | 'GENERAL';
		text: string;
	};
	film_embbed?: {
		id: string;
		title: string;
		poster_path: string;
		year: Date;
		director: string;
		storyline: string;
	};
	posted_time: Date;
}
