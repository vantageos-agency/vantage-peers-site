import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VantagePeers - Shared Memory for AI Agent Swarms";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				background:
					"linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: "sans-serif",
				padding: "60px",
			}}
		>
			{/* Top accent line */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: "4px",
					background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
				}}
			/>

			{/* Main title */}
			<div
				style={{
					fontSize: 72,
					fontWeight: 800,
					color: "#ffffff",
					textAlign: "center",
					lineHeight: 1.1,
					marginBottom: "20px",
					display: "flex",
				}}
			>
				VantagePeers
			</div>

			{/* Tagline */}
			<div
				style={{
					fontSize: 32,
					fontWeight: 400,
					color: "#a5b4fc",
					textAlign: "center",
					marginBottom: "40px",
					display: "flex",
				}}
			>
				Shared memory for AI agent swarms
			</div>

			{/* Stats row */}
			<div
				style={{
					display: "flex",
					gap: "60px",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div
						style={{
							fontSize: 48,
							fontWeight: 700,
							color: "#8b5cf6",
							display: "flex",
						}}
					>
						35
					</div>
					<div style={{ fontSize: 18, color: "#94a3b8", display: "flex" }}>
						MCP Tools
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div
						style={{
							fontSize: 48,
							fontWeight: 700,
							color: "#8b5cf6",
							display: "flex",
						}}
					>
						10
					</div>
					<div style={{ fontSize: 18, color: "#94a3b8", display: "flex" }}>
						DB Tables
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div
						style={{
							fontSize: 48,
							fontWeight: 700,
							color: "#8b5cf6",
							display: "flex",
						}}
					>
						FSL
					</div>
					<div style={{ fontSize: 18, color: "#94a3b8", display: "flex" }}>
						License
					</div>
				</div>
			</div>

			{/* Free label */}
			<div
				style={{
					marginTop: "40px",
					fontSize: 22,
					color: "#cbd5e1",
					display: "flex",
				}}
			>
				Free. Open source. Self-hosted on Convex.
			</div>

			{/* Bottom branding */}
			<div
				style={{
					position: "absolute",
					bottom: "30px",
					right: "60px",
					fontSize: 16,
					color: "#64748b",
					display: "flex",
				}}
			>
				vantagepeers.com
			</div>
		</div>,
		{
			...size,
		},
	);
}
