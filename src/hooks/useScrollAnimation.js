/**
 * useScrollAnimation.js
 * Drop this in src/hooks/useScrollAnimation.js
 *
 * Watches every element with [data-anim] and adds
 * the class "is-visible" when it enters the viewport.
 * Once visible, the element stays visible (no re-trigger on scroll back).
 */
import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -48px 0px',
            }
        );

        const observeAll = () => {
            document.querySelectorAll('[data-anim]').forEach((el) => {
                if (!el.classList.contains('is-visible')) {
                    observer.observe(el);
                }
            });
        };

        observeAll();

        const mutationObserver = new MutationObserver(() => {
            observeAll();
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);
};

export default useScrollAnimation;