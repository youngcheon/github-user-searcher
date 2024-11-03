import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type UseInViewProps = {
	onView: () => void;
};

export default function useCustomInView({ onView }: UseInViewProps) {
	const { ref, inView } = useInView();
	useEffect(() => {
		if (inView) {
			onView();
		}
	}, [inView, onView]);

	return { ref };
}
