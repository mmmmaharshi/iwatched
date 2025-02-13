import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function sharePost({ title, url }: { title: string; url: string }) {
	if (navigator.share) {
		try {
			await navigator.share({
				title,
				url
			});
		} catch (error) {
			alert(`Error sharing: ${String(error)}`);
		}
	} else {
		alert('Web Share API is not supported in your browser.');
	}
}

export function truncateText(text: string, maxLength: number = 200): string {
	return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

export function convertRatingToFraction(rating: number): string {
	const integerPart = Math.floor(rating);
	const decimalPart = rating - integerPart;

	if (decimalPart === 0.5) {
		return `${integerPart}½`;
	}

	return rating.toString();
}

export function convertRatingToStars(rating: number): string {
	const integerPart = Math.floor(rating);
	const decimalPart = rating - integerPart;

	let stars = '★'.repeat(integerPart);

	if (decimalPart === 0.5) {
		stars += '½';
	}

	return stars;
}
