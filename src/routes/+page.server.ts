import type { PostProps } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	const isPostRoute = url.pathname.startsWith('/post/');

	const data: PostProps[] = [
		{
			id: '23456',
			likes_count: 34543,
			comments_count: 8765,
			user: {
				full_name: 'John Doe',
				username: 'john_d',
				profile_pic:
					'https://a.ltrbxd.com/resized/avatar/twitter/4/9/4/7/shard/http___pbs.twimg.com_profile_images_1184457647652663296_PZX58ViG-0-80-0-80-crop.jpg?v=270eae35ac'
			},
			caption: {
				type: 'REVIEW',
				text: '"Inception," at its most basic, is two things. It is a heist film dressed in science fiction conventions; and it is a study of a man trying to free himself from a near-suffocating past. "Inception," at its more complex, is a cerebral pop-masterpiece. It is an enthralling combination of thought-provoking, layered story-telling and sumptuous aesthetics enhanced by near-flawless editing, sound design, effects, and musical score. Driven by a pitch-perfect cast and the confident directorial hand of Christopher Nolan, "Inception" is a brilliant and unrivaled piece of filmmaking.'
			},
			film_embbed: {
				id: '1',
				title: 'Inception',
				poster_path:
					'https://a.ltrbxd.com/resized/sm/upload/sv/95/s9/4j/inception-0-1000-0-1500-crop.jpg?v=30d7224316',
				year: new Date('2010-07-16'),
				director: 'Christopher Nolan',
				storyline:
					"A skilled thief is given a chance to have his past crimes forgiven, by planting an idea into a target's subconscious.",
				rating: 4.5,
				in_lists_count: 456,
				watch_count: 12949586
			},
			posted_time: new Date('2025-01-18T10:30:00Z')
		},
		{
			id: 'sdfg',
			likes_count: 87,
			comments_count: 124,
			user: {
				full_name: 'Alice Smith',
				username: 'alice_s',
				profile_pic:
					'https://a.ltrbxd.com/resized/avatar/upload/6/7/5/4/8/6/6/shard/avtr-0-80-0-80-crop.jpg?v=bb3fb83e9b'
			},
			caption: {
				type: 'GENERAL',
				text: 'Just finished reading a great book! Any movie recommendations?'
			},
			posted_time: new Date('2025-01-17T15:45:00Z')
		}
	];
	return { data, isPostRoute };
}) satisfies PageServerLoad;
