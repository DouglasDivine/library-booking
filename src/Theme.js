const Generic = {
	primary: "rebeccapurple",
	accent: "#FFAA00",
	danger: "#E56464",
	grey: "#878787",
	greylight: "#848484",
	navbar: "#FDFDFD",
	padding: {
		6: "2rem",
		12: "2.5rem",
	},
	check: {
		// labelBg: "#705DF5"
	},
	alert : {
		info: { bgColor: "dodgerblue" },
		danger: { bgColor: "crimson" },
		success: { bgColor: "limegreen" },
		warning: { bgColor: "yellow", textColor: "#333" }
	}
}

const Light = {
	bgcolorinverse: "#cdbfde",
	bgcolor: "#edf",
	color: "#2d2e2e",
	border: "none",
	heading: "#222222",
	paragraph: Generic.grey,
	whitesmoke: "#F0F0F9",
	skeleton: {
		from: "#eee",
		to: "whitesmoke"
	},
	...Generic
}

const Dark = {
	bgcolorinverse: "#f0c8c2",
	bgcolor: "#2d2e2e",
	color: "#fff",
	border: "none",
	heading: "#fff",
	paragraph: Light.whitesmoke,
	skeleton: {
		from: "#3d3e3e",
		to: "#2d2e2e"
	},
	...Generic
}

export { Light, Dark }
