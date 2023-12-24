import React from "react";
import { IconProps } from "../types";

export function AtomWithWords({ height, width, color }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={height || "30"}
			width={width || "30"}
			viewBox="0 0 128 128"
		>
			<path
				fill={color || "#67595D"}
				d="M49.66 53.23h1.14l8.19 21.57H58l-2.79-7.35H45.16l-2.82 7.35h-.99l8.31-21.57zm5.19 13.32L50.23 54.4l-4.71 12.15h9.33zm12.99-12.39h-6.72v-.93h14.46v.93h-6.721V74.8h-1.02V54.16zm14.879 1.95c1.681-2.24 4.11-3.36 7.29-3.36 3.2 0 5.641 1.11 7.32 3.33 1.5 2.021 2.25 4.67 2.25 7.951 0 3.299-.75 5.939-2.25 7.92-1.68 2.199-4.12 3.3-7.32 3.3s-5.63-1.101-7.29-3.3c-1.5-1.98-2.25-4.621-2.25-7.92 0-3.261.75-5.901 2.25-7.921zm.75 15.15c1.48 2.081 3.66 3.12 6.54 3.12 2.9 0 5.09-1.039 6.57-3.12 1.3-1.819 1.95-4.229 1.95-7.229 0-2.98-.66-5.39-1.98-7.23-1.5-2.1-3.68-3.15-6.54-3.15s-5.04 1.05-6.54 3.15c-1.3 1.84-1.949 4.25-1.949 7.23s.649 5.389 1.949 7.229zM106.6 53.23h1.44l7.859 15.179 7.561-15.179h1.41V74.8h-.9V54.49l-7.8 15.15h-.601L107.5 54.49V74.8h-.9V53.23z"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				fill={color || "#67595D"}
				d="M13.217 64.784l-.572 1.191c-.88 1.89-1.607 3.833-1.984 5.891-.208 1.144-.322 2.297-.023 3.446.257.987.79 1.494 1.704 1.536.4.019.82-.066 1.209-.176 1.03-.292 1.929-.856 2.796-1.467.21-.149.427-.242.689-.144.465.173.634.79.241 1.083-1.418 1.057-2.917 1.967-4.754 2.022-1.504.047-2.592-.76-3.071-2.193-.359-1.07-.38-2.171-.249-3.274.391-3.286 1.66-6.271 3.183-9.166.131-.249.138-.446.046-.711a109.395 109.395 0 01-1.081-3.297c-.067-.21-.135-.269-.361-.219-1.491.328-2.961.729-4.286 1.512a6.613 6.613 0 00-1.409 1.108c-.68.714-.693 1.503-.138 2.319.484.711 1.168 1.197 1.888 1.638l.69.391c.33.196.443.58.274.897a.653.653 0 01-.896.267c-1.014-.52-1.958-1.138-2.715-2.005-.463-.53-.804-1.128-.917-1.835-.14-.882.113-1.66.643-2.357.547-.721 1.265-1.234 2.048-1.66 1.39-.757 2.888-1.208 4.425-1.542l.353-.087c-.072-.411-.15-.809-.213-1.21-.251-1.63-.367-3.263.032-4.889.159-.644.408-1.251.841-1.764.884-1.044 2.021-1.277 3.295-.966 1.261.309 2.318 1.006 3.306 1.818.278.23.286.645.059.912-.233.272-.595.308-.912.092-.496-.338-.98-.7-1.497-1.005-.592-.35-1.228-.599-1.935-.602-.586-.002-1.042.235-1.374.709-.423.601-.573 1.295-.653 2.006-.168 1.505.031 2.984.324 4.456.031.156.092.212.257.195 1.187-.119 2.376-.236 3.564-.335a.759.759 0 00.588-.319c1.546-1.953 3.241-3.761 5.234-5.27 1.111-.84 2.283-1.573 3.635-1.974.846-.25 1.702-.343 2.554-.043 1.063.374 1.658 1.183 1.965 2.227.325 1.107.274 2.237.143 3.366-.034.289-.085.577-.139.863-.074.389-.364.595-.752.55-.354-.041-.584-.325-.546-.72.051-.543.175-1.084.18-1.627.007-.644-.007-1.302-.141-1.926-.278-1.298-1.177-1.807-2.505-1.515-.996.22-1.88.688-2.721 1.243-1.728 1.139-3.203 2.563-4.572 4.103-.255.286-.5.581-.747.874l-.034.123h.359c3.527.035 7.002.455 10.397 1.432 1.616.466 3.178 1.073 4.613 1.966.765.475 1.466 1.025 2.021 1.744 1.131 1.463 1.036 3.108-.266 4.418-.879.886-1.961 1.445-3.115 1.88a.643.643 0 01-.811-.37c-.137-.344.012-.698.361-.868.533-.258 1.086-.48 1.59-.788a5.529 5.529 0 001.145-.922c.705-.75.731-1.57.133-2.409-.447-.628-1.048-1.089-1.695-1.491-1.596-.992-3.348-1.606-5.15-2.085-1.88-.5-3.789-.849-5.729-.987-1.546-.11-3.098-.142-4.646-.215-.224-.01-.376.056-.5.247-.908 1.4-1.826 2.794-2.729 4.197a.497.497 0 00-.05.395c1.529 3.638 3.466 7.033 6.031 10.047 1.08 1.27 2.256 2.442 3.683 3.33.669.417 1.367.765 2.178.817.734.051 1.27-.257 1.634-.88.345-.587.481-1.236.544-1.904.198-2.152-.228-4.23-.792-6.286-.579-2.105-1.396-4.123-2.334-6.093-.075-.158-.139-.347-.13-.518.015-.311.26-.531.566-.58.27-.042.552.105.687.395.336.718.677 1.436.983 2.167.949 2.257 1.713 4.573 2.116 6.995.281 1.69.416 3.388.025 5.081a5.819 5.819 0 01-.379 1.108c-.666 1.455-2.016 2.112-3.579 1.771-1.271-.278-2.344-.943-3.345-1.736-1.841-1.459-3.335-3.238-4.686-5.145a40.635 40.635 0 01-3.931-6.909l-.168-.344zm-.666-5.781l.843 2.677 1.951-2.979-2.794.302zm7.472 6.91a1.913 1.913 0 01-1.916-1.908 1.918 1.918 0 011.937-1.917A1.918 1.918 0 0121.961 64a1.914 1.914 0 01-1.938 1.913z"
			/>
		</svg>
	);
}
export function Atom({ height, width, color }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={height || "30"}
			width={width || "30"}
			viewBox="0 0 128 128"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				fill={color || "#67595D"}
				d="M38.622 66.979c-.806 1.674-1.508 3.089-2.175 4.522-3.338 7.177-6.103 14.553-7.53 22.367-.794 4.346-1.228 8.724-.093 13.087.975 3.749 3.004 5.674 6.475 5.833 1.519.071 3.108-.251 4.587-.668 3.916-1.109 7.323-3.251 10.618-5.571.8-.564 1.618-.916 2.616-.545 1.768.658 2.408 3.002.917 4.115-5.381 4.009-11.076 7.466-18.049 7.68-5.711.176-9.845-2.887-11.667-8.331-1.36-4.062-1.44-8.24-.941-12.432 1.482-12.478 6.298-23.815 12.081-34.805.497-.944.527-1.694.175-2.703-1.444-4.147-2.787-8.33-4.106-12.519-.25-.794-.506-1.02-1.368-.831-5.666 1.246-11.248 2.767-16.274 5.744-1.941 1.15-3.803 2.578-5.355 4.208-2.581 2.71-2.63 5.709-.521 8.803 1.84 2.701 4.433 4.548 7.169 6.217.856.524 1.759.97 2.621 1.484 1.253.749 1.682 2.201 1.039 3.409-.645 1.209-2.092 1.688-3.406 1.012-3.844-1.976-7.429-4.321-10.304-7.611-1.762-2.016-3.053-4.282-3.48-6.968-.532-3.35.428-6.302 2.44-8.954 2.075-2.733 4.8-4.683 7.775-6.303 5.276-2.873 10.961-4.589 16.801-5.854.4-.087.796-.195 1.338-.33-.275-1.558-.57-3.07-.806-4.593-.957-6.194-1.398-12.393.123-18.567.602-2.442 1.547-4.75 3.191-6.695 3.356-3.967 7.672-4.85 12.512-3.668 4.784 1.169 8.801 3.818 12.547 6.901 1.06.872 1.089 2.447.224 3.462-.883 1.035-2.256 1.17-3.458.351-1.888-1.285-3.724-2.658-5.686-3.819-2.248-1.329-4.662-2.272-7.352-2.285-2.222-.011-3.949.893-5.215 2.693-1.604 2.283-2.177 4.917-2.48 7.618-.641 5.713.12 11.329 1.233 16.918.119.594.347.804.972.741 4.51-.45 9.021-.899 13.538-1.276.982-.081 1.623-.436 2.232-1.206 5.87-7.415 12.305-14.281 19.875-20.01 4.217-3.191 8.673-5.973 13.8-7.492 3.212-.951 6.463-1.303 9.698-.166 4.04 1.42 6.298 4.49 7.462 8.452 1.234 4.206 1.041 8.494.54 12.781a46.552 46.552 0 01-.528 3.277c-.281 1.478-1.377 2.261-2.853 2.089-1.342-.156-2.218-1.235-2.077-2.733.195-2.066.666-4.121.687-6.183.025-2.44-.027-4.943-.535-7.313-1.059-4.928-4.468-6.861-9.511-5.749-3.783.833-7.138 2.613-10.332 4.718-6.561 4.324-12.162 9.731-17.362 15.577-.967 1.087-1.897 2.208-2.837 3.318-.057.066-.053.184-.125.465h1.361c13.391.135 26.585 1.727 39.479 5.438 6.14 1.768 12.067 4.072 17.521 7.465 2.902 1.805 5.566 3.894 7.673 6.62 4.297 5.56 3.936 11.802-1.007 16.781-3.338 3.363-7.449 5.487-11.828 7.137-1.239.465-2.603-.218-3.077-1.405-.521-1.304.044-2.653 1.37-3.296 2.022-.98 4.125-1.829 6.037-2.993a21.078 21.078 0 004.347-3.499c2.677-2.849 2.776-5.963.506-9.151-1.7-2.388-3.984-4.134-6.44-5.66-6.06-3.766-12.71-6.099-19.557-7.92-7.138-1.899-14.39-3.224-21.755-3.748-5.869-.417-11.759-.537-17.639-.816-.849-.041-1.429.21-1.901.938-3.447 5.316-6.933 10.607-10.362 15.935-.25.388-.356 1.086-.185 1.497 5.805 13.814 13.157 26.708 22.9 38.155 4.102 4.817 8.563 9.272 13.98 12.643 2.542 1.581 5.195 2.9 8.272 3.105 2.788.188 4.822-.979 6.206-3.345 1.304-2.229 1.827-4.695 2.061-7.229.756-8.177-.861-16.064-3.005-23.87-2.196-7.996-5.304-15.654-8.865-23.136-.287-.602-.522-1.317-.491-1.965.057-1.179.987-2.018 2.15-2.2 1.022-.16 2.098.402 2.609 1.498 1.274 2.728 2.567 5.451 3.734 8.226 3.602 8.571 6.502 17.365 8.034 26.563 1.069 6.42 1.58 12.863.096 19.294a22.23 22.23 0 01-1.439 4.21c-2.527 5.524-7.651 8.02-13.588 6.722-4.827-1.057-8.901-3.579-12.702-6.592-6.991-5.541-12.663-12.297-17.793-19.535-5.848-8.245-10.787-17.013-14.925-26.234-.155-.343-.333-.676-.637-1.295zm-2.528-21.95l3.196 10.164c2.525-3.854 4.879-7.446 7.411-11.313l-10.607 1.149zm28.374 26.238c-4.017-.005-7.286-3.261-7.278-7.249.007-4.052 3.272-7.281 7.356-7.28 4.014.002 7.276 3.255 7.279 7.255.002 4.047-3.267 7.279-7.357 7.274z"
			/>
		</svg>
	);
}
