export interface PostProps {
	id: string;
	likes_count: number;
	comments_count: number;
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
		rating: number;
		watch_count: number;
		in_lists_count: number;
	};
	posted_time: Date;
}

export type FilmEmbbedProps = PostProps['film_embbed'];
