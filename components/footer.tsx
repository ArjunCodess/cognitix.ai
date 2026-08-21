import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/github-icon";
import { InstagramIcon } from "@/components/instagram-icon";
import { XIcon } from "@/components/x-icon";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Footer() {
	return (
		<footer
			className={cn(
				"relative mx-auto max-w-5xl w-full lg:border-x",
				"dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]"
			)}
		>
			<div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
				<div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
					<a className="w-max" href="#">
						<Logo className="h-5" />
					</a>
					<p className="max-w-sm text-balance text-muted-foreground text-sm">
						Start Scaling With AI.
					</p>
					<div className="flex gap-2">
						{socialLinks.map((item, index) => (
							<Button key={`social-${item.link}-${index}`} size="icon" variant="outline" render={<a href={item.link} target="_blank" />} nativeButton={false}>{item.icon}</Button>
						))}
					</div>
				</div>
				<div className="col-span-3 w-full md:col-span-1">
					<span className="text-muted-foreground text-xs">Company</span>
					<div className="mt-2 flex flex-col gap-2">
						{company.map(({ href, title }) => (
							<a
								className="w-max text-sm hover:underline"
								href={href}
								key={title}
							>
								{title}
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center gap-2 py-4">
				<p className="text-center font-light text-muted-foreground text-sm">
					&copy; {new Date().getFullYear()} efferd, All rights reserved
				</p>
			</div>
		</footer>
	);
}

const company = [
	{
		title: "Features",
		href: "#features",
	},
	{
		title: "Pricing",
		href: "#pricing",
	},
	{
		title: "About",
		href: "#about",
	},
	{
		title: "Chat",
		href: "/chat",
	},
	{
		title: "Contact",
		href: "/contact",
	},
];

const socialLinks = [
	{
		icon: <InstagramIcon />,
		link: "#",
	},
	{
		icon: <XIcon />,
		link: "#",
	},
];
