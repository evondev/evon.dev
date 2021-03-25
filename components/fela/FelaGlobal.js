import { css } from "@components/fela/felaCSS";

export const FelaGlobal = {
	formWrapper: css`
		debug: formWrapper;
		padding: 20px;
		background-color: white;
	`,
	gridSlider: ({ gap, width }) => css`
		@media screen and (max-width: 1279px) {
			display: grid !important;
			justify-content: flex-start !important;
			grid-auto-columns: 330px;
			grid-auto-flow: column;
			grid-column-gap: ${gap};
			overflow-x: auto;
			overflow-y: hidden;
			scroll-snap-type: x mandatory;
			scroll-snap-stop: always;
			-ms-touch-action: manipulation;
			touch-action: manipulation;
			-webkit-overflow-scrolling: touch;
			scroll-padding: 1rem;
			grid-template-columns: unset !important;
			&::-webkit-scrollbar {
				display: none;
				width: 0;
			}
			& > * {
				scroll-snap-align: start;
			}
		}
		@media screen and (max-width: 479px) {
			grid-auto-columns: ${width};
		}
	`,
};
