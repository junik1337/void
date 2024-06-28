import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="flex h-screen bg-white flex-col">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
