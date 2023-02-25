import type { AstroIntegration } from 'astro';

export default function glimmerIntegration(): AstroIntegration {
	return {
		name: 'glimmer-astro',
		hooks: {},
	};
}
